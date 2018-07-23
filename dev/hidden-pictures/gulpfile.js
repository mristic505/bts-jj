var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require("gulp-uglify");
var minifyCSS = require("gulp-minify-css");
var csslint = require("gulp-csslint");
var browserSync = require('browser-sync').create();

gulp.task('browser-sync', function() {
    browserSync.init({
        open: 'external',
        host: 'http://localhost/Mateja/JuicyJuiceFlavorsGames/Puzzle/index.php',
        // proxy: "http://localhost/Mateja/JuicyJuiceFlavorsGames/Puzzle/index.php"
        proxy: {
            target: "http://localhost/Mateja/JuicyJuiceFlavorsGames/Puzzle/index.php"
        },
        open:false
    });
});

gulp.task('sass', function () {
   gulp.src(['./sass/style.scss'])
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(autoprefixer("last 5 versions", "> 1%", "ie 8", "ie 7"))
        .pipe(concat('hidden_pictures_style.css'))
        .pipe(gulp.dest('../../'))
        .pipe(browserSync.stream())
});
gulp.task('js', function () {
        gulp.src([
                './js/main.js'
            ])    
            .pipe(uglify())
            .pipe(gulp.dest('../js'));
    
    });
gulp.task('watch', function() {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'browser-sync', 'watch']);
