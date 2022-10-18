<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RoleSeeder extends Seeder
{
    public function run()
    {
        collect([
            ['name' => 'admin'],
            ['name' => 'writer'],
        ])->each(fn($role) => \App\Models\Role::create($role));

        collect([
            ['user_id' => 1, 'role_id' => 1],
            ['user_id' => 2, 'role_id' => 1],
            ['user_id' => 3, 'role_id' => 1],
        ])->each(fn($role) => DB::table('role_user')->insert($role));
    }
}
