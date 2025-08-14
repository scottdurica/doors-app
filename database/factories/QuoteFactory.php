<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Arr;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Quote>
 */
class QuoteFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
$rs = [2.0,2.25,3.0,3.5];
    $sizes = [10,10.5,12,12.5,14,14.5,15,15.25,28.25,18.75,23.125,12.375,24.5];
    $types = ['door','glass','glass - 2lite','glass - 4lite' ];

    $doors = [];

    for ($i=0; $i<rand(1,5); $i++) {
        $door = [
            'quantity' => rand(1,4),
            'width' => Arr::random($sizes),
            'height' => Arr::random($sizes),
            'type' => Arr::random($types),
            'slab' => Arr::random([0,1,1]),
            'rails' => Arr::random($rs),
            'stiles' => Arr::random($rs),
            'notes' => Arr::random(['This is a note about the doors', '']),
            'bore' => Arr::random([0,1]),
        ];
        array_push($doors, $door);
    }
        //dd($doors);

        return [
            //'user_id' => rand(9,11),
            'user_id' => 11,
            'quote_type' => Arr::random([0,1]),
            'delivery_option' => Arr::random(['pickup', 'ship', 'delivery']),
            'c_name' => $this->faker->company(),
            'f_name' => $this->faker->firstName(),
            'l_name' => $this->faker->lastName(),
            'street' => $this->faker->streetAddress(),
            'city' => $this->faker->city(),
            'state' => $this->faker->stateAbbr(),
            'zip' => $this->faker->postcode(),
            'phone' => $this->faker->phoneNumber(),
            'email' => $this->faker->email(),
            'po_number' => $this->faker->lastName(),
            'construction_type' => Arr::random(['one', 'five']),
            'style' => Arr::random(['slim shaker','beaded','beveled','step-bead', 'shaker', 'tacoma']),
            'wood_type' => Arr::random(['maple','hickory','white oak', 'walnut', 'cherry']),
            'rs_size' => $this->faker->randomFloat(2, 1, 3),
            'rr_size' => $this->faker->randomFloat(2, 1, 3),
            'outside_edge' => Arr::random(['none', 'ogee', 'rounded']),
            'hinge_option' => Arr::random(['yes', 'no']),
            'hinge_distance' => $this->faker->randomFloat(2, 1, 3),
            'finish' => Arr::random(['raw', 'primed', 'finished']),
            'supply_hinges' => Arr::random([0,1]),
            'hinge_type' => Arr::random(['inset','1/2','3/4', '1', '1 1/4']),
            'notes' => Arr::random([$this->faker->sentences(), '']),
            'status' => Arr::random(['quoted','on-order','complete']),
            'doors' => $doors
            
        ];
    }
}
