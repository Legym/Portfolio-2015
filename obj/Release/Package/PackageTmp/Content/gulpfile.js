// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var plumber      = require('gulp-plumber'); // To handle error events
var jshint       = require('gulp-jshint'); // To show JS errors
var cssmin       = require('gulp-cssmin'); // Minify
var imagemin     = require('gulp-imagemin'); // Image Minification
var sass         = require('gulp-sass'); // Compile our Sass
var sourcemaps   = require('gulp-sourcemaps'); // Sass Sourcemaps
var concat       = require('gulp-concat'); // Concatinate JS
var uglify       = require('gulp-uglify'); // Pass through Uglification
var rename       = require('gulp-rename'); // Rename files after compilation
var autoprefixer = require('gulp-autoprefixer'); // Automatically add CSS prefixes for greater CSS3 browser support
var notify       = require("gulp-notify"); // Ability to send error notifications

// Lint Task
gulp.task('lint', function() {
	return gulp.src('./scripts/components/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

// Compile Our Sass
gulp.task('sass', function() {
	gulp.src(['./scss/*.scss'])
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(sass({includePaths: [
			'./3rdparty/frameworks/bootstrap-sass/3.1.1/css',
			'./3rdparty/frameworks/bootstrap-efelle/1.2.0/css'
		]}))
		.pipe(autoprefixer({
			browsers: ['last 5 versions'],
		}))
		.pipe(plumber())
		.pipe(sass())
		.pipe(notify())
		.pipe(cssmin())
		.pipe(sourcemaps.write('./maps'))
		.pipe(gulp.dest('./css'));
});

gulp.task('images', function() {
	gulp.src([
		'graphics/*',
	])
		.pipe(imagemin({
			progressive: true,
			interlaced: true,
			svgoPlugins: [{removeUnknownsAndDefaults: false}, {cleanupIDs: false}]
		}))
		.pipe(gulp.dest('dist/graphics'))
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
	gulp.src([
		"3rdparty/frameworks/bootstrap/3.1.1/js/bootstrap.min.js",
		"3rdparty/scripts/fancybox/2.1.5/jquery.fancybox.pack.js",
		"3rdparty/scripts/lazyload/1.9.3/jquery.lazyload.min.js",
		"3rdparty/scripts/isotope/2.1.0/isotope.pkgd.min.js",
		"scripts/slick.min.js",
		"core/scripts/basescriptv2.js",
		"3rdparty/frameworks/bootstrap-efelle/1.2.0/js/plugins/*.js",
		"3rdparty/frameworks/bootstrap-efelle/1.2.0/js/init.js",
		"scripts/components/*.js"
	])
		.pipe(plumber())
		.pipe(concat('./all.js'))
		.pipe(rename('./efelle.js'))
		.pipe(plumber())
		.pipe(uglify())
		.pipe(gulp.dest('./scripts'));
});


// Watch Files For Changes
gulp.task('watch', function() {
	gulp.watch('scripts/components/*.js', ['lint', 'scripts']);    
	gulp.watch(['scss/*.scss', 'scss/**/*.scss'], ['sass']);
});

// Default Task
gulp.task('default', ['lint', 'sass', 'scripts', 'watch']);
