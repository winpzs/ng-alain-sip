var gulp = require('gulp'),
    typescript = require('gulp-typescript'),
    sourcemaps = require('gulp-sourcemaps'),
    rollup = require('rollup'),
    rollupTypescript = require('rollup-plugin-typescript2'),
    nodeResolve = require('rollup-plugin-node-resolve-angular');

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
        input: "./src/app/sip-alain/index.ts",
        plugins: [
            // nodeResolve({ jsnext: true, main: true }),
            rollupTypescript({
                tsconfig: './tsconfig-build.json'
            })
        ]
    }).then(function (bundle) {
        bundle.write({
            format: "umd",
            file: './dist/index.js',
            name: 'sip-alain',
            sourcemap: true
            //globals: globals
        });
    })
});

gulp.task('movebuildfile', function () {
    return gulp.src('./dist/sip-alain/**').pipe(gulp.dest('./dist'));
});

gulp.task('npmprepublish', function () {
    return gulp.src(['tonpm/**'])
        .pipe(gulp.dest('dist'));
});

gulp.task('npmtotest', function () {
    return gulp.src(['dist/**'])
        .pipe(gulp.dest('E:\\Projects\\angular\\ng-alain-sip\\node_modules\\sip-alain'));
});

