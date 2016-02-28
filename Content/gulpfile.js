// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var plumber      = require('gulp-plumber'); // To handle error events
var jshint       = require('gulp-jshint'); // To show JS errors
var cssmin       = require('gulp-cssmin'); // Minify
var imagemin     = require('gulp-imagemin'); // Image Minification
var sass         = require('gulp-sass'); // Compile our Sass
var concat       = require('gulp-concat'); // Concatinate JS
var uglify       = require('gulp-uglify'); // Pass through Uglification
var rename       = require('gulp-rename'); // Rename files after compilation
var autoprefixer = require('gulp-autoprefixer'); // Automatically add CSS prefixes for greater CSS3 browser support
var notify       = require("gulp-notify"); // Ability to send error notifications
var importCss    = require('gulp-import-css');

// Lint Task
gulp.task('lint', function() {
	return gulp.src('js/main.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

// Compile Our Sass
gulp.task('sass', function() {
	gulp.src(['./scss/*.scss'])
		.pipe(autoprefixer({
			browsers: ['last 5 versions'],
		}))
        .pipe(plumber())
		.pipe(sass())
		.pipe(notify())
		.pipe(cssmin())
		.pipe(gulp.dest('./css'));
});

//gulp.task('images', function() {
//	gulp.src([
//		'graphics/*',
//	])
//		.pipe(imagemin({
//			progressive: true,
//			interlaced: true,
//			svgoPlugins: [{removeUnknownsAndDefaults: false}, {cleanupIDs: false}]
//		}))
//		.pipe(gulp.dest('dist/graphics'))
//});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    gulp.src([
        "js/vendor/jquery-1.11.2.min.js",
        "js/vendor/mmenu/src/js/jquery.mmenu.all.min.js",
        "js/vendor/fancybox/jquery.fancybox.js",
        "js/vendor/slick-1.5.9/slick/slick.min.js",
        "js/vendor/Chart.min.js",
        "js/vendor/notify.min.js",
        "js/vendor/waypoints/lib/noframework.waypoints.min.js",        
        "js/base.js",
        "js/router.js"
	])
		.pipe(plumber())
		.pipe(concat('all.js'))
		.pipe(rename('district.js'))
		.pipe(plumber())
        .pipe(notify())
		.pipe(uglify())
		.pipe(gulp.dest('js/output/'));
});


// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('js/*.js', ['lint', 'scripts']);
	gulp.watch(['scss/*.scss', 'scss/**/*.scss'], ['sass']);
});

// Default Task
gulp.task('default', ['lint', 'sass', 'scripts', 'watch']);
