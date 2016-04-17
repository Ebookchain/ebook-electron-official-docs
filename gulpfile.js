var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var rename = require("gulp-rename");
var del = require('del');

// Settings
var settings = {
  destFolder: '.',
  sources: 'sources/electron',
  tmp: 'sources/tmp'
};

// Path map
var languages = {
  en: 'sources/electron/docs/**/*.*',
  translations: 'sources/electron/docs-translations/**/*.*'
};

// Copy en
gulp.task('copy-en', function() {
  return gulp.src(languages.en)
    .pipe(gulp.dest(settings.tmp + '/en/'));
});

// Copy translations
gulp.task('copy-tr', ['copy-en'], function() {
  return gulp.src(languages.translations)
    .pipe(gulp.dest(settings.tmp));
});

// Rename
gulp.task('rename', ['copy-tr'], function() {
  // rename via function
  gulp.src(settings.tmp + "/**/README.md")
    .pipe(rename({
      basename: "SUMMARY",
      extname: ".md"
    }))
    .pipe(gulp.dest(settings.tmp));
});

// Copy tmp
gulp.task('copy-tmp', ['rename'], function() {
  return gulp.src(settings.tmp + '/**')
    .pipe(gulp.dest(settings.destFolder));
});

// Copy
gulp.task('copy', ['copy-tmp'], function() {
  // You can use multiple globbing patterns as you would with `gulp.src`
  return del([settings.tmp + '/**'], {force: true});
});

// Domain
gulp.task('domain', function() {
  return gulp.src('CNAME').pipe(gulp.dest('./_book/'));
});

//Deploy
gulp.task('deploy', ['domain'], function() {
  return gulp.src('./_book/**/*')
    .pipe(ghPages());
});
