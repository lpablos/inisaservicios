<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
         // Crear usuario administrador
         User::create([
            'name' => 'Admin',
            'email' => 'admin@example.com',
            'password' => Hash::make('password123'),
            'role' => 'admin',
        ]);

         // Crear usuario cliente
         User::create([
            'name' => 'Cliente',
            'email' => 'cliente@example.com',
            'password' => Hash::make('password123'),
            'role' => 'cliente',
        ]);

    }
}
