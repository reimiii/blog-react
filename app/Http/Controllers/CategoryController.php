<?php

namespace App\Http\Controllers;

use App\Http\Resources\ArticleItemResource;
use App\Models\Article;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
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
            'articles' => ArticleItemResource::collection($articles)
        ]);
    }
}
