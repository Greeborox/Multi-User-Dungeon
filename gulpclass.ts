import {Gulpclass, Task, SequenceTask} from "gulpclass/Decorators";

let del = require('del');
let gulp = require('gulp');
let path = require('path');
let ts = require('gulp-typescript');
let sourcemaps = require('gulp-sourcemaps');

@Gulpclass()
export class Gulpfile {

    @Task()
    clean(cb: Function) {
        return del(["./dist/**"], cb);
    }

    @Task("build:server")
    buildServer() {
        var tsProject = ts.createProject(
            path.resolve('./server/tsconfig.json')
        );
        var tsResult = gulp.src(['./server/**/*.ts'])
            .pipe(sourcemaps.init())
            .pipe(ts(tsProject));
        return tsResult.js
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(
                path.resolve('./dist/server')
            ));
    }

    @SequenceTask()
    default() {
        return ['clean', 'build:server'];
    }
}