<?php

namespace Database\Seeders;

use Faker\Factory;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            CatalogSeeder::class,
            RecipeSeeder::class,
        ]);
        // \App\Models\User::factory(10)->create();
    }

}
