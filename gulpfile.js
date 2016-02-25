var gulp = require('gulp');
var _    = require('lodash');

// load mozaïk module tasks

gulp.src('./assets/fonts/**/*', {base: './client/src/modules'})
  .pipe(gulp.dest('./build/fonts'));

_.forOwn(require('mozaik/gulpfile').tasks, function (task) {
    gulp.task(task.name, task.dep, task.fn);
});