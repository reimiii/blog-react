#!/usr/bin/env bash
echo "Running composer"
composer install --working-dir=/var/www/html

echo "===================================="
echo "Caching config..."
echo "===================================="
php artisan config:cache

echo "===================================="
echo "Caching routes..."
echo "===================================="
php artisan route:cache

echo "===================================="
echo "Caching routes..."
echo "===================================="
php artisan view:cache

echo "===================================="
echo "Running migrations..."
echo "===================================="
php artisan migrate:fresh --seed --force

echo "===================================="
echo "Running Storage Link..."
echo "===================================="
php artisan storage:link --force

echo "===================================="
echo "Running composer autoloader optimize"
echo "===================================="
composer install --optimize-autoloader --no-dev --working-dir=/var/www/html

echo "===================================="
echo "OS info"
echo "===================================="
cat /etc/os-release

#echo "===================================="
#echo "Running npm install"
#echo "===================================="
#npm install --working-dir=/var/www/html
#
#echo "===================================="
#echo "Running Build"
#echo "===================================="
#npm run build
#
#echo "===================================="
#echo "Running Inertia SSR"
#echo "===================================="
#php artisan inertia:start-ssr
