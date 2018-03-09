//since webpack has lot of configurations we keep all the webpack related settings in this file and execute from package.json file scripts
//we use the html webpack plugin to create the html page template dynamically
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');

module.exports = {
    entry: {
        app: "./src/app.js",
        contact: "./src/contact.js"
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/, 
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader','sass-loader'],
                    publicPath: '/dist'
                })},
                {
                    test: /\.js$/,
                    exclude: /node_modules/, 
                    loader: "babel-loader" 
                } //webpack 2
            //{test: /\.css$/, loaders: 'style-loader!css-loader'} //webpack 1
        ]
    },
    devServer: {
        contentBase: path.join(__dirname,"dist"),
        compress: true,
        stats: "errors-only",
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack demo",
            // minify: {
            //     collapseWhitespace: true
            // },
            hash: true,
            template:"./src/index.html",
            excludeChunks: ["contact"]
        }),
        new HtmlWebpackPlugin({
            title: "Contact demo",
            hash: true,
            filename: "contact.html",
            template:"./src/contact.html",
            chunks: ["contact"]
        }),
        new ExtractTextPlugin({
            filename: 'app.css',
            disable: false,
            allChunks: true
        })
    ]
}