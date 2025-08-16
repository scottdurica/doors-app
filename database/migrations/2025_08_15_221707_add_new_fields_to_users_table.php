<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
        $table->string('c_name');
        $table->string('fname');
        $table->string('lname');
        $table->string('phone'); 
        $table->string('street'); 
        $table->string('city'); 
        $table->string('state'); 
        $table->string('zip');
        $table->string('residential');
        $table->string('liftgate');


        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            //
        });
    }
};
