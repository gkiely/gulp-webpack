// var babel         = require('gulp-babel'),
    // bulkSass      = require('gulp-sass-bulk-import'),
    // cache         = require('gulp-cached'),
    // concat        = require('gulp-concat'),
    // config        = require('./gulp/gulp-config.js'),
    // eslint        = require('gulp-eslint'),
    // fileInclude   = require('gulp-file-include'),
var gulp          = require('gulp'),
    // livereload    = require('gulp-livereload'),
    // prefix        = require('gulp-autoprefixer'),
    // react         = require('gulp-react'),
    // remember      = require('gulp-remember');
    // sass          = require('gulp-sass'),
    // sourcemaps    = require('gulp-sourcemaps'),
    gulpif        = require('gulp-if'),
    webserver     = require('gulp-webserver'),
    // webpack       = require('webpack'),
    webpack       = require('webpack-stream'),
    //Build only
    extend        = require('extend'),
    htmlmin       = function(){},
    minifyCSS     = function(){},
    uglify        = function(){},
    yargs         = require('yargs');


var prod = yargs.argv.prod;


gulp.task('server', function(){
  return gulp.src('')
  .pipe(webserver())
});

gulp.task('webpack:dev', function(cb){
  var wpConfig = prod ? require('./webpack.prod.js') : require('./webpack.config.js');  
  wpConfig.output = {
    filename: 'bundle.js'
  };

  return gulp.src('App.js')
  .pipe(webpack(wpConfig))
  .pipe(gulp.dest(''))
});

// gulp.task('watch', function(){
//   gulp.watch('*.js', ['webpack:dev'])
// });


if(prod){
  gulp.task('default', ['webpack:dev']);  
}
else{
  gulp.task('default', ['server', 'webpack:dev']);  
}
