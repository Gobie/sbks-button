gulp = require 'gulp'
GulpEste = require 'gulp-este'
concat = require 'gulp-concat'
rimraf = require 'gulp-rimraf'
fs = require 'fs'
p = require './package.json'

este = new GulpEste __dirname, false, ''

paths =
  compiler: 'bower_components/closure-compiler/compiler.jar'
  coffee:
    src: 'src/**/*.coffee'
  js:
    src: 'src/**/*.js'
    closure: 'bower_components/closure-library/**/*.js'
    customElement: 'bower_components/w3c-custom-element/index.js'
  build:
    tempComponent: 'build/temp_component.js'
    component: 'build/component.js'
    manifest: 'build/manifest.json'
    examples: 'build/examples/'

gulp.task 'coffee', ->
  return este.coffee paths.coffee.src

gulp.task 'compile', ['coffee'], ->
  return este.compile [paths.js.src, paths.js.closure], './',
    fileName: paths.build.tempComponent
    compilerPath: paths.compiler
    compilerFlags:
      closure_entry_point: 'an.ui.Button.WebComponent'
      compilation_level: 'ADVANCED'
      output_wrapper: '(function(){%output%})();'
      generate_exports: null

gulp.task 'concat', ['compile'], ->
  return gulp.src [paths.js.customElement, paths.build.tempComponent]
    .pipe concat(paths.build.component)
    .pipe gulp.dest './'

gulp.task 'clean', ['concat'], ->
  return gulp.src [paths.build.tempComponent, paths.js.src], read: false
    .pipe rimraf()

gulp.task 'watch', ['default'], ->
  gulp.watch paths.coffee.src, ['clean']

gulp.task 'manifest', ->
  manifest =
    name: p.name
    files: [paths.build.component]
    examples: paths.build.examples
    minified: true

  fs.writeFile paths.build.manifest, JSON.stringify(manifest, null, 4), (err) ->
    console.log err if err

gulp.task 'default', ['manifest', 'clean']