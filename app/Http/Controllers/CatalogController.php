<?php

namespace App\Http\Controllers;

use App\Models\Catalog;
use Illuminate\Http\Request;

class CatalogController extends Controller
{
    public function showAllCatalog()
    {
        return Catalog::get();
    }
}
