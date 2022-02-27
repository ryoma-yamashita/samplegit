module.exports = {
  mode: 'development',
  // mode: 'production',
  entry: './src/index.js',
  // -wコマンドを使用するのでコメントアウト
  // watch: true,
  watchOptions: {
    ignored: /node_modules/
  },
  output: {
    path: __dirname + '/dist',
    filename: 'sample.js'
  },
  // ローダーの設定
  module: {
    rules: [
      {
        // ローダーの処理対象ファイル
        test: /\.js$/,
        // ローダーの処理対象から外すディレクトリ
        exclude: /node_modules/,
        use: [
          {
            // 利用するローダー
            loader: 'babel-loader',
            // ローダーのオプション
            // 今回はbabel-loaderを利用しているため
            // babelのオプションを指定しているという認識で問題ない
            options: {
              presets: [['@babel/preset-env', { modules: false }]]
            }
          },
        ]
      },
      {
        // enforce: 'pre'を指定することによって
        // enforce: 'pre'がついていないローダーより早く処理が実行される
        // 今回はbabel-loaderで変換する前にコードを検証したいため、指定が必要
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              // Prefer `dart-sass`
              implementation: require("sass"),
            },
          },
        ],
      },
    ]
  },
};