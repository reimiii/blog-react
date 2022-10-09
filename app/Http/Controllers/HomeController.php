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
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection|\Inertia\Response|\Inertia\ResponseFactory
     */
    public function __invoke(Request $request)
    {
        $articles = Article::query()
            ->select('title', 'slug', 'user_id', 'teaser', 'created_at', 'id')
            ->with(['tags' => fn($tag) => $tag->select('name', 'slug') ])
            ->limit(9)
            ->latest()
            ->get();
//        return ArticleItemResource::collection($articles);
        return inertia('Home', [
            'articles' => ArticleItemResource::collection($articles)
        ]);
    }
}
