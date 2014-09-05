gulp = require 'gulp'
GulpEste = require 'gulp-este'
concat = require 'gulp-concat'
rimraf = require 'gulp-rimraf'

este = new GulpEste __dirname, false, ''

paths =
  coffee: ['src/**/*.coffee']
  js: ['src/**/*.js', 'bower_components/closure-library/**/*.js']
  buildDir: 'build/'
  tempComponent: 'temp_component.js'
  component: 'component.js'
  compiler: 'bower_components/closure-compiler/compiler.jar'
  customElement: 'bower_components/w3c-custom-element/index.js'

gulp.task 'coffee', ->
  return este.coffee paths.coffee

gulp.task 'compile', ['coffee'], ->
  return este.compile paths.js, './',
    fileName: paths.buildDir + paths.tempComponent
    compilerPath: paths.compiler
    compilerFlags:
      closure_entry_point: 'an.ui.Button'
      compilation_level: 'ADVANCED'
      output_wrapper: '(function(){%output%})();'
      generate_exports: null

gulp.task 'concat', ['compile'], ->
  return gulp.src [paths.customElement, paths.buildDir + paths.tempComponent]
    .pipe concat(paths.component)
    .pipe gulp.dest paths.buildDir

gulp.task 'clean', ['concat'], ->
  return gulp.src paths.buildDir + paths.tempComponent, read: false
    .pipe rimraf()

gulp.task 'default', ['clean']