<?php

namespace App\Http\Controllers;

use App\Enums\ArticleStatus;
use App\Http\Requests\ArticleRequest;
use App\Http\Resources\ArticleItemResource;
use App\Http\Resources\ArticleSingleResource;
use App\Http\Resources\ArticleTableResource;
use App\Models\Article;
use App\Models\Category;
use App\Models\Tag;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Storage;
use Inertia\ResponseFactory;

class ArticleController extends Controller
{
    public $tags;
    public $categories;
    public $statuses;

    public function __construct()
    {
        $this->middleware('hasRole')->only('table', 'currentTable', 'create', 'store', 'edit', 'update', 'destroy');
        $this->middleware('auth')->except(['index', 'show']);
        $this->tags = Tag::select('id', 'name')->get();
        $this->categories = Category::select('id', 'name')->get();
        $this->statuses = collect(ArticleStatus::cases())->map(fn($status) => [
            'id' => $status->value,
            'name' => str($status->label())->ucfirst(),
        ]);
    }

    public function table(Request $request)
    {
        $articles = Article::query()
            ->when(!$request->user()->hasAnyRoles(['admin']), fn($query) => $query->whereBelongsTo($request->user(), 'author'))
            ->latest()
            ->fastPaginate(10);

        return inertia('Articles/Table', [
            'articles' => ArticleTableResource::collection($articles),
        ]);
    }

    public function currentTable(Request $request)
    {
        $articles = Article::query()
            ->whereBelongsTo($request->user(), 'author')
            ->latest()
            ->fastPaginate(10);

        return inertia('Articles/TableCurrent', [
            'articles' => ArticleTableResource::collection($articles),
        ]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response|ResponseFactory
     */
    public function index()
    {
        $articles = Article::query()
            ->select('title', 'picture', 'slug', 'user_id', 'teaser', 'created_at', 'id')
            ->published()
            ->latest()
            ->fastPaginate(9);

        return inertia('Articles/Index', [
            'articles' => ArticleItemResource::collection($articles)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Inertia\Response|ResponseFactory
     */
    public function create()
    {
        return inertia('Articles/Create', [
            'tags' => $this->tags,
            'categories' => $this->categories,
            'statuses' => $this->statuses,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param ArticleRequest $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(ArticleRequest $request)
    {
        $picture = $request->file('picture');

        $article = $request->user()->articles()->create([
            'title' => $title = $request->title,
            'slug' => $slug = str($title)->slug(),
            'teaser' => $request->teaser,
            'category_id' => $request->category_id,
            'status' => $request->status,
            'body' => $request->body,
            'picture' => $request->hasFile('picture') ? $picture->storeAs('images/articles', $slug . '.' . $picture->extension()) : null
        ]);

        $article->tags()->attach($request->tags);

        return to_route('articles.show', $article);

    }

    /**
     * Display the specified resource.
     *
     * @param Article $article
     * @return \Inertia\Response|ResponseFactory
     * @throws AuthorizationException
     */
    public function show(Article $article)
    {
        $this->authorize('view', $article);

        $articles = Article::query()
            ->select('id', 'title', 'slug')
            ->published()
            ->whereNot('id', $article->id)
            ->whereBelongsTo($article->category)
            ->limit(10)
            ->get();

        $currentArticle = $article->load([
            'tags' => fn($tag) => $tag->select('id', 'name', 'slug'),
            'category' => fn($category) => $category->select('id', 'name', 'slug')
        ]);

        return inertia('Articles/Show', [
            'article' => (new ArticleSingleResource($currentArticle))->additional([
                'related' => $articles,
            ])
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Article $article
     * @return \Inertia\Response|ResponseFactory
     */
    public function edit(Article $article)
    {
        return inertia('Articles/Edit', [
            'article' => $article->load([
                'tags' => fn($tag) => $tag->select('id', 'name'),
                'category' => fn($category) => $category->select('id', 'name')
            ]),
            'tags' => $this->tags,
            'categories' => $this->categories,
            'statuses' => $this->statuses,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param ArticleRequest $request
     * @param Article $article
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(ArticleRequest $request, Article $article)
    {
        $picture = $request->file('picture');

        $article->update([
            'title' => $title = $request->title,
            'teaser' => $request->teaser,
            'category_id' => $request->category_id,
            'status' => $request->status,
            'body' => $request->body,
            'picture' => $request->hasFile('picture')
                ? $picture->storeAs('images/articles', $article->slug . '.' . $picture->extension())
                : $article->picture

        ]);

        $article->tags()->sync($request->tags, true);

        return to_route('articles.show', $article);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Article $article
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(Article $article)
    {
//        dd($article->id);

        if ($article->picture) {
            Storage::delete($article->picture);
        }

        $article->tags()->detach();
        $article->delete();

        return back();
    }
}
