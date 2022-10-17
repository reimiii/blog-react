<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    public function run()
    {
        collect([
            ['name' => 'admin'],
            ['name' => 'writer'],
        ])->each(fn($role) => \App\Models\Role::create($role));
    }
}
