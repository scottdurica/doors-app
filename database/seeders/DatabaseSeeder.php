<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;


use App\Models\MainForm;
use Illuminate\Database\Seeder;
use Database\Seeders\QuoteTableSeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

       // User::factory(10)->create();

        $this->call([
            QuoteTableSeeder::class,
        ]);
        

    }
}
