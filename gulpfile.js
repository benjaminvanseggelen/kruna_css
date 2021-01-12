const gulp = require('gulp');
const { src, dest } = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const streamqueue = require('streamqueue');
const sourcemaps = require('gulp-sourcemaps');

sass.compiler = require('sass'); // Using the dart sass compiler

gulp.task('build', function () {
	let normalizeStream = src('./vendors/normalize.css')
		.pipe(concat('normalize.css'))
		.pipe(sourcemaps.init());

	let sassStream = src('./src/scss/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(concat('style.scss'));

	let fullStream = streamqueue(
		{ objectMode: true },
		normalizeStream,
		sassStream
	)
		.pipe(concat('kruna.css'))
		.pipe(sourcemaps.write('./'))
		.pipe(dest('dist/'));

	return fullStream;
});
