/*
 * Определяем строгий режим
 */

'use strict';

/*
 * Объявляем переменные для работы с зависимостями
 */

const
	gulp					= require('gulp'),
	browserSync		= require('browser-sync').create(),
	autoprefixer	= require('gulp-autoprefixer'),
	pug						= require('gulp-pug'),
	sass					= require('gulp-sass'),
	concat				= require('gulp-concat'),
	uglify				= require('gulp-uglify'),
	imagemin			= require('gulp-imagemin'),
	htmlmin				= require('gulp-htmlmin'),
	rename				= require('gulp-rename'),
	cleanCSS			= require('gulp-clean-css'),
	babel					= require('gulp-babel'),
	cache					= require('gulp-cache'),
	del						= require('del');

/*
 * Инициализируем таск для для работы с browserSync
 */

gulp.task('browser-sync', () => {
	browserSync.init({
		server: {
			baseDir: 'app'
		}
	});
});

/*
 * Инициализируем таск, собирающий и объединяющий все SCSS файлы
 * в единый минифицированный CSS файл
 */

gulp.task('sass', () => {
	return gulp.src('app/scss/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({cascade: 'false'}))
		.pipe(rename({suffix: '.min', prefix : ''}))
		.pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.stream());
});

/*
 * Инициализируем таск для работы с PUG-файлами
 */

gulp.task('pug', () => {
	return gulp.src('app/pug/*.pug')
		.pipe(pug({pretty: '\t'}))
		.pipe(gulp.dest('app'))
		.pipe(browserSync.stream());
});

/*
 * Инициализируем таск, собирающий и объединяющий все js скрипты
 * в единый минифицированный JS ES6 файл
 */

gulp.task('combine-scripts', () => {
	return gulp.src('app/js/scripts/**/*.js')
		.pipe(babel({presets: ['@babel/env']}))
		.pipe(concat('scripts.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('app/js'))
		.pipe(browserSync.stream());
});

/*
 * Инициализируем таск, минифицирующий основной HTML файл для папки build
 */

gulp.task('minify-html', () => {
	return gulp.src('app/*.html')
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest('build'));
});

/*
 * Инициализируем таск, сжимающий все изображения из папки img (кроме SVG)
 */

gulp.task('minify-images', () => {
	return gulp.src([
			'app/img/**/*',
			'!app/img/svg/**/*'
	])
		.pipe(
			cache(
				imagemin({
					interlaced: true,
					progressive: true,
					optimizationLevel: 5,
					svgoPlugins: [{removeViewBox: true}]
				})
			)
		)
		.pipe(gulp.dest('app/img'));
});

/*
 * Инициализируем таск, собирающий все файлы проекта для отправки в папку build
 */

gulp.task('build-app', (done) => {
	const buildMinifiedCss =
		gulp.src('app/css/*.css')
			.pipe(gulp.dest('build/css'));
	
	const buildMinifiedJs =
		gulp.src('app/js/*.js')
			.pipe(gulp.dest('build/js'));
	
	const buildImg =
		gulp.src('app/img/**/*')
			.pipe(gulp.dest('build/img'));

	const buildFonts =
		gulp.src('app/fonts/**/*')
			.pipe(gulp.dest('build/fonts'));

	done();
});

/*
 * Инициализируем таск, удаляющий папку build
 */

gulp.task('clean-build', (done) => {
	del.sync('build');

	done();
});

/*
 * Инициализируем таск, очищающий весь кэш
 */

gulp.task('clear-cache', () => {
	return cache.clearAll();
});

/*
 * Инициализируем таск, наблюдающий за изменениями HTML, PUG, SCSS, JS файлов
 */

gulp.task('watch', () => {
	gulp.watch('app/scss/**/*.scss', gulp.parallel('sass'));
	gulp.watch('app/js/scripts/**/*.js', gulp.parallel('combine-scripts'));
	gulp.watch('app/pug/**/*.pug', gulp.parallel('pug'));
	gulp.watch('app/*.html').on('change', browserSync.reload);
});

/*
 * Инициализируем таск, собирающий весь проект в продакшн
 */

gulp.task(
	'build',
	gulp.series(
		'clean-build',
		'sass',
		'pug',
		'combine-scripts',
		'minify-html',
		'minify-images',
		'build-app'
	)
);

/*
 * Инициализируем таск, начинающий работу наблюдения за изменениями файлов
 */

gulp.task(
	'default',
	gulp.parallel(
		'sass',
		'combine-scripts',
		'pug',
		'browser-sync',
		'watch'
	)
);