<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ArticleTableResource extends JsonResource
{
    /**
     * @param Request $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'author' => $this->author,
            'title' => $this->title,
            'category' => [
                'name' => $this->category->name,
                'url' => route('categories.show', $this->category),
            ],
            'url' => route('articles.show', $this->slug),
            'tags' => $this->tags->map(fn($tag) => [
                'name' => $tag->name,
                'url' => route('tags.show', $tag),
            ]),
        ];
    }
}
