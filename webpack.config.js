let path = require('path');
let ExtractTextPlugin = require("extract-text-webpack-plugin");

let conf = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
        publicPath: 'dist/'
    },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            use: 'babel-loader'
            //exclude: '/node_modules/'
          },
          {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                //fallback: "style-loader",
                use: "css-loader"
            })
          }
        ]
      },
      plugins: [
        new ExtractTextPlugin("styles.css"),
      ],
      resolve: {
        extensions: ['*', '.js', '.jsx']
      },
    devServer: {
        overlay: true
    },
    devtool: ''
}

module.exports = (env, options) => {
    let production = options.mode === 'production';
    conf.devtool = production 
                    ? false
                    : 'eval-sourcemap'; 
    return conf;
};