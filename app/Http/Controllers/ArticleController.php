<?php

namespace App\Http\Controllers;

use App\Http\Resources\ArticleItemResource;
use App\Http\Resources\ArticleSingleResource;
use App\Models\Article;
use App\Models\Category;
use App\Models\Tag;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Inertia\ResponseFactory;

class ArticleController extends Controller
{
    public $tags;
    public $categories;

    public function __construct()
    {
        $this->middleware('auth')->except(['index', 'show']);
        $this->tags = Tag::select('id', 'name')->get();
        $this->categories = Category::select('id', 'name')->get();
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response|ResponseFactory
     */
    public function index()
    {
        $articles = Article::query()
            ->select('title', 'slug', 'user_id', 'teaser', 'created_at', 'id')
            ->with(['tags' => fn($tag) => $tag->select('name', 'slug')])
            ->latest()
            ->fastPaginate();

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
            'categories' => $this->categories
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(Request $request)
    {
        $picture = $request->file('picture');

        $article = $request->user()->articles()->create([
            'title' => $title = $request->title,
            'slug' => $slug = str($title)->slug(),
            'teaser' => $request->teaser,
            'category_id' => $request->category_id,
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
     */
    public function show(Article $article)
    {
        return inertia('Articles/Show', [
            'article' => new ArticleSingleResource($article->load([
                'tags' => fn($tag) => $tag->select('id', 'name', 'slug'),
                'category' => fn($category) => $category->select('id', 'name', 'slug')
            ]))
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Article $article
     * @return Response
     */
    public function edit(Article $article)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param Article $article
     * @return Response
     */
    public function update(Request $request, Article $article)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Article $article
     * @return Response
     */
    public function destroy(Article $article)
    {
        //
    }
}
