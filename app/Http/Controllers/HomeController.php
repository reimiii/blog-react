<?php

namespace App\Http\Controllers;

use App\Http\Resources\ArticleItemResource;
use App\Models\Article;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection|\Inertia\Response|\Inertia\ResponseFactory
     */
    public function __invoke(Request $request)
    {
        $articles = Article::query()
            ->select('title', 'picture', 'slug', 'user_id', 'created_at', 'id')
            ->published()
            ->limit(9)
            ->latest()
            ->get();

        return inertia('Home', [
            'articles' => ArticleItemResource::collection($articles)
        ]);
    }
}
