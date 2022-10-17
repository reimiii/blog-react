<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ArticleRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'title' => ['required', 'string', 'min:3', 'max:255'],
            'picture' => ['nullable', 'image', 'mimes:png,jpg,jpeg,gif', 'max:2048'],
            'teaser' => ['required', 'string', 'min:3', 'max:255'],
            'body' => ['required', 'string', 'min:3'],
            'category_id' => ['required', 'exists:categories,id'],
            'tags' => ['required', 'array'],
        ];
    }

    public function authorize(): bool
    {
        return true;
    }
}
