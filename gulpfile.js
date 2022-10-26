const { src, dest, series, parallel, watch } = require("gulp");
const bs = require("browser-sync").create();
const changed = require('gulp-changed');

const ejs = require("gulp-ejs");
const rename = require("gulp-rename");
const plumber = require("gulp-plumber");//エラーでビルドを中止させない
const fs = require("fs");//追加
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');



// browserSync初期化
function bsInit(done) {
    bs.init({
      server: {
        baseDir: "./",
      },
      reloadDelay: 1000,//リロードの遅延
      open: false, //起動時のライブリロードを止める
    });
    done();
  }

function ejsfile(done) {
    const json_path = "./src/data/site.json";
    const json = JSON.parse(fs.readFileSync(json_path));

    src(["src/ejs/**/*.ejs", "!" + "src/ejs/**/_*.ejs"])
    
    .pipe(plumber())
    .pipe(
        ejs({
          jsonData: json,
        })
      )
    .pipe(rename({ extname: ".html" }))
    .pipe(dest("./"))
    .pipe(bs.stream());
  done();
}

function watchTask(done) {
  watch(["src/ejs/**/*.ejs"], ejsfile);
  watch(["src/assets/sass/*.scss"], compileSass);
  done();
  }
const compileSass = () =>
src('src/assets/sass/style.scss')
  .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
  .pipe(autoprefixer())
  .pipe(dest('css'));



exports.default = parallel(series(bsInit, watchTask));
