<?php

namespace App\Http\Controllers;

use App\Http\Resources\ArticleItemResource;
use App\Models\Article;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth')->except(['index', 'show']);
    }

    public function index()
    {
        return inertia('Category/Index', [
            cache()->forget('categories_global'),
            'categories' => Category::query()
                ->latest('updated_at')
                ->get(),
        ]);
    }

    public function store(Request $request, Category $category)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
        ]);

        $category->create([
            'name' => $request->name,
            'slug' => str($request->name)->slug(),
        ]);

        return back();
    }

    public function update(Request $request, Category $category)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
        ]);

        $category->update([
            'name' => $request->name,
            'slug' => str($request->name)->slug(),
        ]);

        return back();
    }

    public function destroy(Category $category)
    {
        $category->delete();

        return back();
    }

    public function show(Category $category)
    {
        $articles = Article::query()
            ->whereBelongsTo($category)
            ->select('title', 'picture', 'slug', 'user_id', 'created_at', 'id')
            ->published()
            ->latest()
            ->fastPaginate();

        return inertia('Category/Show', [
            'category' => $category,
            'articles' => ArticleItemResource::collection($articles),
        ]);
    }
}
