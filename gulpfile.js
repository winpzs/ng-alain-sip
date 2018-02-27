var gulp = require('gulp'),
    typescript = require('gulp-typescript'),
    sourcemaps = require('gulp-sourcemaps'),
    rollup = require('rollup'),
    rollupTypescript = require('rollup-plugin-typescript2');

gulp.task('build', function () {
    return rollup.rollup({
        input: "./src/app/sip/index.ts",
        plugins: [
            rollupTypescript({
                tsconfig: './tsconfig.json'
            })
        ]
    }).then(function (bundle) {
        bundle.write({
            format: "umd",
            moduleName: "cmpxs.cmpx",
            dest: "./dist/bundles/cmpx.umd.js",
            sourceMap: true
        });
    })
});

// gulp.task('todemo', function () {
//     return gulp.src(['dist/**'])
//         .pipe(gulp.dest('../cmpx-demo/node_modules/cmpx'));
// });

// gulp.task('tonpm', function () {
//     return gulp.src(['dist/**'])
//         .pipe(gulp.dest('../cmpx-npm/cmpx'));
// });

// gulp.task('tomvc', function () {
//     return gulp.src(['dist/**'])
//         .pipe(gulp.dest('../cmpx-mvc/node_modules/cmpx'));
// });
