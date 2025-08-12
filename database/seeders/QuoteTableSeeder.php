<?php

namespace Database\Seeders;

use App\Models\Quote;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class QuoteTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Quote::factory(30)->create();
    }
}
