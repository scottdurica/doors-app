<?php

use Illuminate\Foundation\Auth\User;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('quotes', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor( User::class );
            $table->boolean('quote_type');
            $table->string('delivery_option');
            $table->string('c_name');
            $table->string('f_name');
            $table->string('l_name');
            $table->string('street');
            $table->string('city');
            $table->string('state');
            $table->string('zip',10);
            $table->string('phone',10);
            $table->string('email');
            $table->string('po_number');
            $table->string('construction_type');
            $table->string('style');
            $table->string('wood_type');
            $table->string('rs_size');
            $table->string('rr_size');
            $table->string('outside_edge');
            $table->string('hinge_option');
            $table->string('hinge_distance');
            $table->string('finish');
            $table->boolean('supply_hinges');
            $table->string('hinge_type');
            $table->text('notes', 1000);
            $table->string('status');
            $table->json('doors');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('quotes');
    }
};
