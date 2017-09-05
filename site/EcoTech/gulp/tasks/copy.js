var changed, filter, gulp, gulpif, gutil, paths;

gulp 			= require('gulp');
changed 	= require('gulp-changed');
filter 		= require('gulp-filter');
gutil 		= require('gulp-util');
paths 		= require('../paths');

gulp.task('copy:images', function() {
	return gulp.src(['**/*.{png,jpg,svg}', '!sprite/**/*'], {
		cwd: paths.appImages
	})
		.pipe(gulp.dest(paths.images));
});

gulp.task('copy:fonts', function() {
	return gulp.src(['**/*.{woff,ttf,eot}'], {
		cwd: paths.appFonts
	})
		.pipe(gulp.dest(paths.fonts));
});

gulp.task('copy:resources', function() {
	return gulp.src('app/resources/**/*')
		.pipe(changed(paths.dist))
		.pipe(gulp.dest(paths.dist));
});

gulp.task('copy:scripts', function() {
	return gulp.src(['**/*.js'], {
		base: 'app/scripts',
		cwd: 'app/scripts'
	})
	.pipe(changed(paths.scripts))
	.pipe(gulp.dest(paths.scripts));
});

gulp.task('copy:components', function() {
	return gulp.src(['jquery/dist/jquery.min.js', 'svg4everybody/svg4everybody.min.js', '**/*.js'], {
		base: 'components',
		cwd: 'components'
	})
		.pipe(changed(paths.scripts))
		.pipe(gulp.dest(paths.scripts + '/libs'));
});


gulp.task('copy', ['copy:components', 'copy:images', 'copy:fonts', 'copy:resources', 'copy:scripts']);
