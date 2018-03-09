//since webpack has lot of configurations we keep all the webpack related settings in this file and execute from package.json file scripts
//we use the html webpack plugin to create the html page template dynamically
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            // {test: /\.css$/, use: 'css-loader'}
            {test: /\.css$/, loaders: 'style-loader!css-loader'}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack demo",
            minify: {
                collapseWhitespace: true
            },
            hash: true,
            template:"./src/index.html"
        })
    ]
}