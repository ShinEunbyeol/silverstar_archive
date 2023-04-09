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

// .postCss('resources/css/main.scss', 'public/css', [])

mix.js('resources/js/app.js', 'public/js')
    .js('resources/js/main.js', 'public/js')
    .js('resources/js/content.js', 'public/js')
        .js('resources/js/library/typing.js', 'public/js/library')
    .sass('resources/css/main.scss', 'public/css', [])
    .sass('resources/css/header.scss', 'public/css', [])
    .sass('resources/css/footer.scss', 'public/css', [])
    .sass('resources/css/sideMenu.scss', 'public/css', [])
    .sass('resources/css/content.scss', 'public/css', [])
        .sass('resources/css/library/typing.scss', 'public/css/library', []);
