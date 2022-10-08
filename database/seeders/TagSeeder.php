<?php

namespace Database\Seeders;

use App\Models\Tag;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        collect([
            ['name' => $name = 'Laravel', 'slug' => str($name)->slug()],
            ['name' => $name = 'PHP', 'slug' => str($name)->slug()],
            ['name' => $name = 'Rust', 'slug' => str($name)->slug()],
            ['name' => $name = 'R lang', 'slug' => str($name)->slug()],
            ['name' => $name = 'Linux', 'slug' => str($name)->slug()],
            ['name' => $name = 'Go', 'slug' => str($name)->slug()],
            ['name' => $name = 'Javascript', 'slug' => str($name)->slug()],
            ['name' => $name = 'Java', 'slug' => str($name)->slug()],
            ['name' => $name = 'Pascal', 'slug' => str($name)->slug()],
            ['name' => $name = 'SQL', 'slug' => str($name)->slug()],
        ])->each(fn ($category) => \App\Models\Tag::create($category));
    }
}
