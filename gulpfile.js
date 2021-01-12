const gulp = require('gulp');
const { src } = require('gulp');
const { dest } = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const streamqueue = require('streamqueue');

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
		sassStream,
		normalizeStream
	)
		.pipe(concat('kruna.css'))
		.pipe(dest('dist/'));

	return fullStream;
});
