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

mix.js('resources/js/app.js', 'js')
    .js('resources/js/main.js', 'js')
    .js('resources/js/content.js', 'js')
    .sass('resources/css/main.scss', 'css', [])
    .sass('resources/css/header.scss', 'css', [])
    .sass('resources/css/footer.scss', 'css', [])
    .sass('resources/css/sideMenu.scss', 'css', [])
    .sass('resources/css/content.scss', 'css', [])
        .js('resources/js/library/typing.js', 'js/library/')
        .sass('resources/css/library/typing.scss', 'css/library/', []);
