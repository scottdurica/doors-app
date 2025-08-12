<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Quote extends Model
    {
        /** @use HasFactory<\Database\Factories\QuoteFactory> */
        use HasFactory;
            public function user() {
            return $this->belongsTo(User::class);
        }

        protected $guarded = [];

        protected $casts = [
                'doors' => 'array',
            ];
    }
