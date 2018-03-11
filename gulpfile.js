// Добавить создание спрайтов

const gulp          = require('gulp');
const pug           = require('gulp-pug');
const sass          = require('gulp-sass');
const rename        = require('gulp-rename');
const sourcemaps    = require('gulp-sourcemaps');
const del           = require('del');
const browserSync   = require('browser-sync').create();
const gulpWebpack   = require('gulp-webpack');
const webpack       = require('webpack');
const webpackConfig = require('./webpack.config.js');
const babel         = require("gulp-babel");
const concat        = require("gulp-concat");
const eslint        = require("eslint");

const paths = {
    root: './build',
    templates: {
        pages: 'src/templates/pages/*.pug',
        src: 'src/templates/**/*.pug'
    },
    styles: {
        src: 'src/styles/**/*.scss',
        dest: 'build/assets/styles/'
    },
    images: {
        src: 'src/images/**/*.*',
        dest: 'build/assets/images/'
    },
    scripts: {
        src: 'src/scripts/**/*.js',
        dest: 'build/assets/scripts/'
    }
};


// babel
function useBabel () {
    return gulp.src("src/**/*.js")
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(concat("all.js"))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("dist"));
}

// линтинг js
function lint () {
    return gulp.src('src/**/*.js')
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
}

// pug
function templates() {
    return gulp.src(paths.templates.pages)
        .pipe(pug({ pretty: true }))
        .pipe(gulp.dest(paths.root));
}

// scss - сжатие и переименование
function styles() {
    return gulp.src('./src/styles/app.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(sourcemaps.write())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(paths.styles.dest))
}

// удаление
function clean() {
    return del(paths.root);
}

// webpack
function scripts() {
    return gulp.src('src/scripts/app.js')
        .pipe(gulpWebpack(webpackConfig, webpack))
        .pipe(gulp.dest(paths.scripts.dest));
}

// livereload
function server() {
    browserSync.init({
        server: paths.root
    });
    browserSync.watch(paths.root + '/**/*.*', browserSync.reload);
}

// перенос картинок
function images() {
    return gulp.src(paths.images.src)
        .pipe(gulp.dest(paths.images.dest));
}

exports.templates = templates;
exports.styles = styles;
exports.clean = clean;
exports.images = images;

function watch() {
    gulp.watch(paths.styles.src, styles);
    gulp.watch(paths.templates.src, templates);
    gulp.watch(paths.images.src, images);
    gulp.watch(paths.scripts.src, scripts);
    gulp.watch(paths.scripts.src, useBabel);
    gulp.watch(paths.scripts.src, lint);
}

gulp.task('default', gulp.series(
    clean,
    gulp.parallel(styles, templates, images, scripts),
    gulp.parallel(watch, server)
));
