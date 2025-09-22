<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Carbon\Carbon;
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

        protected $appends = [
            'readable_date',
        ];

        public function getReadableDateAttribute() {
           return $this->created_at->format('m-d-Y');
        }
    }
