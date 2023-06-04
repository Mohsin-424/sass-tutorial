const {src,dest,watch,series}=reuires('gulp')
const sass = =require('gulp-sass') require ('sass')
function buildStyles() {
    retrun src ( 'index.scss')
    .pipe(sass())
    .pipe(dest('css'))
}

function watchTask( ) {
     watch(['index.scss'],buildStyles)
}

exports.default = series(buildStyles,watchTask)

