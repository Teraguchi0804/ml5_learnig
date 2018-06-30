import gulp from "gulp";
// import streamqueue from 'streamqueue';
// import connect from 'gulp-connect';
// import webserver from "gulp-webserver";
// import livereload from 'gulp-livereload';
import browserSync from "browser-sync";
// import ssi from "browsersync-ssi";
// import PATH from '../../config';

gulp.task("browserSync", ()=>{
	browserSync.init({
		notify: false,
		open: 'external',
		server: {
			baseDir: '../src/'
		}
	});
});

gulp.task("sync", ()=>{
    browserSync.reload();
});
