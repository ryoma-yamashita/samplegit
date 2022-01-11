
// gulpプラグインの読み込み
const gulp = require("gulp");
// Sassをコンパイルするプラグインの読み込み（require('gulp-sass');ではエラーのため下記に変更）
const sass = require('gulp-sass')(require('sass'));

// style.scssの監視タスクを作成する
gulp.task('default', function () {
  // ★ style.scssファイルを監視
  return gulp.watch('sass/style.scss', function () {
  // style.scssの更新があった場合の処理
  // style.scssファイルを取得
  return gulp.src('sass/style.scss')
    // Sassのコンパイルを実行 'compressed'とすることでcssへのコンパイル時に記述を圧縮
    .pipe(sass({
      outputStyle: 'expanded'
    })
    // Sassのコンパイルエラーを表示
    // (これがないと自動的に止まってしまう)
    .on('error', sass.logError))
    // cssフォルダー以下に保存
    .pipe(gulp.dest('css'));
  });
});