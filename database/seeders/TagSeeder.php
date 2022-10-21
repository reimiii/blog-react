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
            ['name' => $name = 'Fun', 'slug' => str($name)->slug()],
            ['name' => $name = 'Windows', 'slug' => str($name)->slug()],
            ['name' => $name = 'Linux', 'slug' => str($name)->slug()],
            ['name' => $name = 'Anime', 'slug' => str($name)->slug()],
            ['name' => $name = 'Docker', 'slug' => str($name)->slug()],
            ['name' => $name = 'Git', 'slug' => str($name)->slug()],
            ['name' => $name = 'GitHub', 'slug' => str($name)->slug()],
            ['name' => $name = 'GitLab', 'slug' => str($name)->slug()],

        ])->each(fn($category) => \App\Models\Tag::create($category));
    }
}
