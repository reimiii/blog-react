#!/usr/bin/env bash
echo "Running composer"
composer global require hirak/prestissimo
composer install --working-dir=/var/www/html

echo "Caching config..."
php artisan config:cache

echo "Caching routes..."
php artisan route:cache

echo "Caching routes..."
php artisan view:cache

echo "Running migrations..."
php artisan migrate:fresh --seed --force

echo "Running composer autoloader optimize"
composer install --optimize-autoloader --no-dev --working-dir=/var/www/html
