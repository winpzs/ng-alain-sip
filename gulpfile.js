var gulp = require('gulp'),
    typescript = require('gulp-typescript'),
    sourcemaps = require('gulp-sourcemaps'),
    rollup = require('rollup'),
    rollupTypescript = require('rollup-plugin-typescript2');

// const globals = {
//     '@angular/core': 'ng.core',
//     '@angular/common': 'ng.common',
//     '@angular/platform-browser': 'ng.platformBrowser',
//     '@angular/router': 'ng.router',

//     'ng-zorro-antd': 'ngZorro.antd',

//     'rxjs/Observable': 'Rx',
//     'rxjs/Observer': 'Rx',
//     'rxjs/BehaviorSubject': 'Rx',
//     'rxjs/operators': 'Rx.Observable.prototype',
//     'rxjs/observable/of': 'Rx.Observable',
//     'rxjs/observable/fromEvent': 'Rx.Observable',
//     'rxjs/observable/FromEventObservable': 'Rx.Observable',
//     'rxjs/observable/ErrorObservable': 'Rx.Observable'
// };

gulp.task('build', function () {
    return rollup.rollup({
        input: "./src/app/sip/index.ts",
        plugins: [
            rollupTypescript({
                tsconfig: './tsconfig-build.json'
            })
        ]
    }).then(function (bundle) {
        bundle.write({
            format: "umd",
            file: './dist/index.js',
            name: 'sip.test',
            sourceMap: true
            //globals: globals
        }).then(function(){
            gulp.src('./dist/src/app/sip/**').pipe(gulp.dest('./dist'));
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
