<?php

namespace Database\Seeders;

use App\Models\Catalog;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class CatalogSeeder extends Seeder
{
    public $catalog = ['Суп', 'Второе', 'Десерт'];
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i=0; $i<count($this->catalog); $i++){
            \DB::table('catalog')->insert(['name' => $this->catalog[$i]]);
        }
    }
}
