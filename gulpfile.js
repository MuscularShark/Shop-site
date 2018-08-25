var gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync'),
	autoprefixer = require('gulp-autoprefixer'),
	sourcemaps = require('gulp-sourcemaps'),
	notify = require('gulp-notify'),
	plumber = require('gulp-plumber'),
	   del = require('del'); 

	var onError = function(error){
		return error.messageOriginal ?
		"File: " + error.file +
		"\rAt: " + error.line + error.column +
		"r" + error.messageOriginal :
		error;
	}

gulp.task('sass', function(){
	return gulp.src('app/scss/*.scss')
	.pipe(sourcemaps.init())
	.pipe(plumber({
		errorHandler : notify.onError({
			title: 'SCSS error',
			message: onError
		})
	}))
	.pipe(sass())
	.pipe(autoprefixer({
		browsers: ['last 2 versions'],
		cascade: false
	}))
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({stream: true}))
	.pipe(notify({message:'SCSS complete', onLast: true}));
});

gulp.task('browser-sync', function(){
	browserSync({
		server:{
			baseDir: 'app'
		}
	});
});

gulp.task('watch',['browser-sync', 'sass'], function(){
	gulp.watch('app/scss/**/*.scss', ['sass'])
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/*.js', browserSync.reload);
});


gulp.task('default', ['watch']);


gulp.task('clean', function() {
    return del.sync('dist'); // Удаляем папку dist перед сборкой
});

gulp.task('build', ['clean', 'sass'], function() {

    var buildCss = gulp.src([ // Переносим библиотеки в продакшен
        'app/css/style.css',
        'app/css/style.css.map'
        ])
    .pipe(gulp.dest('dist/css'))

    var buildFonts = gulp.src('app/fonts/**/*') // Переносим шрифты в продакшен
    .pipe(gulp.dest('dist/fonts'))

    var buildJs = gulp.src('app/js/**/*') // Переносим скрипты в продакшен
    .pipe(gulp.dest('dist/js'))

    var buildHtml = gulp.src('app/*.html') // Переносим HTML в продакшен
    .pipe(gulp.dest('dist'));

});

gulp.task('build', ['sass'], function() {

    var buildCss = gulp.src([ // Переносим CSS стили в продакшен
        'app/css/style.css',
        'app/css/style.css.map'
        ])
    .pipe(gulp.dest('dist/css'))

    var buildFonts = gulp.src('app/fonts/**/*') // Переносим шрифты в продакшен
    .pipe(gulp.dest('dist/fonts'))

    var buildJs = gulp.src('app/js/**/*') // Переносим скрипты в продакшен
    .pipe(gulp.dest('dist/js'))

    var buildHtml = gulp.src('app/*.html') // Переносим HTML в продакшен
    .pipe(gulp.dest('dist'));

});



