let mix = require('laravel-mix');

mix
  .sass('./resources/sass/style.scss', 'assets/css')
    .js('./resources/js/main.js', 'assets/js').vue()
      .setPublicPath('public');