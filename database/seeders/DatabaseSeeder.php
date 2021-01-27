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
            UserSeeder2::class,
            CatalogSeeder2::class,
            UnitsSeeder2::class,
            IngredientsSeeder2::class,
            RecipesSeeder2::class,
            ReviewsSeeder2::class,
            Ingredients_in_recipes_Seeder2::class
        ]);
        // \App\Models\User::factory(10)->create();
    }

}
