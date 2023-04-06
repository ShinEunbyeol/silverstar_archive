const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

// .js('resources/js/reactTest.jsx', 'public/js')
// .postCss('resources/css/main.scss', 'public/css', [])

mix.sass('resources/css/main.scss', 'public/css', [])
    .sass('resources/css/header.scss', 'public/css', [])
    .sass('resources/css/footer.scss', 'public/css', []);
