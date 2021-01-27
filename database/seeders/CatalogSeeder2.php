<?php

namespace Database\Seeders;

use Faker\Factory;
use Illuminate\Database\Seeder;

class CatalogSeeder2 extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \DB::table('catalog')->insert($this->getData());
    }

    public function getData():array
    {
        $faker = Factory::create('ru_Ru');

        $data = [];
        for ($i = 0; $i < 30; $i++){
            $name =  $faker->sentence(mt_rand(1,4));
            $data[] =[
                'name' => $name
            ];
        }
        return $data;
    }
}
