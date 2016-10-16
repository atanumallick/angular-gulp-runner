var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('serve', function(){
	browserSync.init({
		server: {
			baseDir: './'
		}
	});	
});

gulp.task('script', function(){
	gulp.src('app/js/*.js')
		.pipe(concat('main.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist'));
});

gulp.task('watch', function(){
	gulp.watch(['index.html', 'partials/*.html', 'dist/*.js']).on('change', browserSync.reload);
	gulp.watch('app/js/*.js', ['script']);
});

gulp.task('default', ['serve', 'script', 'watch']);