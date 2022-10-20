<?php

namespace App\Http\Controllers;

use App\Http\Resources\ArticleItemResource;
use App\Models\Tag;
use Illuminate\Http\Request;

class TagController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth')->except(['index', 'show']);
    }

    public function index()
    {
        return inertia('Tags/Index', [
            'tags' => Tag::query()
                ->latest('updated_at')
                ->get(),
        ]);
    }

    public function store(Request $request, Tag $tag)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
        ]);

        $tag->create([
            'name' => $request->name,
            'slug' => str($request->name)->slug(),
        ]);

        return back();
    }

    public function update(Request $request, Tag $tag)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
        ]);

        $tag->update([
            'name' => $request->name,
            'slug' => str($request->name)->slug(),
        ]);

        return back();
    }

    public function show(Tag $tag)
    {
        $articles = $tag->articles()->latest()->fastPaginate();

        return inertia('Tags/Show', [
            'tag' => $tag,
            'articles' => ArticleItemResource::collection($articles)
        ]);
    }

    public function destroy(Tag $tag)
    {
        $tag->delete();

        return back();
    }

}
