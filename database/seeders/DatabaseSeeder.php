<?php

namespace Database\Seeders;

use App\Models\Shop\Category;
use App\Models\Shop\SubCategory;
use App\Models\User;
use Database\Factories\CategoryFactory;
use Database\Factories\UserFactory;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {


        $adminRole = Role::create(['name' => 'Admin']);
        User::factory(10)->create()->each(function($user) use ($adminRole) {
            $user->assignRole($adminRole);
        });
        //Category
        Category::factory(2)->create();
        SubCategory::factory(10)->create();
    }
}
