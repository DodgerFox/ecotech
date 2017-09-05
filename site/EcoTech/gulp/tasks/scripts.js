var
	gulp          = require('gulp'),
	plumber       = require('gulp-plumber'),
	gutil         = require('gulp-util'),
/*	gulpif        = require('gulp-if'),*/
	concat        = require('gulp-concat'),
	//uglify        = require('gulp-uglify'),
	errorHandler  = require('../utils/errorHandler'),
	paths         = require('../paths'),
	component			= require('../utils/pathFinder').component,
	vendor				= require('../utils/pathFinder').vendor;
	app					= require('../utils/pathFinder').app;

gulp.task('scripts', function () {
	return gulp.src([
			component('jquery/dist/jquery.min.js'),
			// component('jquery-cookie/jquery.cookie.js'),
			// component('svgxuse/svgxuse.min.js'),
			// component('devicejs/lib/device.min.js'),
			 component('jquery.csssr.validation/jquery.csssr.validation.js'),
			// component('jstimezonedetect/jstz.js'),
			// component('js-cookie/src/js.cookie.js'),
			// component('highcharts/highcharts.js'),
			component('malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.min.js'),
			component('fullpage.js/dist/jquery.fullpage.min.js'),
			component('parallax/deploy/jquery.parallax.min.js'),
			component('Headhesive.js/dist/headhesive.min.js'),
			component('anchor-js/anchor.min.js'),
			// component('purl/purl.js'),
			// component('moment/min/moment-with-locales.min.js'),

			// component('wow/dist/wow.min.js'),
			// component('featherlight/src/featherlight.js'),
			// component('slick-carousel/slick/slick.min.js'),

			// vendor('scripts/base.js'),
			// vendor('scripts/affilate.js'),
			// vendor('scripts/bonus.js'),
			// vendor('scripts/social.js'),
			// vendor('scripts/framingProtection.js'),
			// // vendor('scripts/socials.js'),
			// vendor('scripts/cookies.js'),
			// vendor('scripts/registration.js'),
			// vendor('scripts/callback.js'),
			// vendor('scripts/scroll.js'),
			// vendor('scripts/slick.js'),
			// vendor('scripts/passwordStrength.js'),

			app('common.js')
			// app('stock.js')

	])
		.pipe(plumber({
			errorHandler: errorHandler
	}))
		.pipe(concat('common.min.js'))
		.pipe(gulp.dest(paths.scripts));
});
