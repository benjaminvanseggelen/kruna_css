const gulp = require('gulp');
const { src } = require('gulp');
const { dest } = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const streamqueue = require('streamqueue');
const sourcemaps = require('gulp-sourcemaps');

sass.compiler = require('node-sass');

gulp.task('build', function () {
	let normalizeStream = src('./vendors/normalize.css').pipe(
		concat('normalize.css')
	);

	let sassStream = src('./src/scss/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(concat('style.scss'));

	let fullStream = streamqueue(
		{ objectMode: true },
		normalizeStream,
		sassStream
	)
		.pipe(sourcemaps.init())
		.pipe(concat('kruna.css'))
		.pipe(sourcemaps.write())
		.pipe(dest('dist/'));

	return fullStream;
});
