//since webpack has lot of configurations we keep all the webpack related settings in this file and execute from package.json file scripts
module.exports = {
    entry: './src/app.js',
    output: {
        filename: './dist/app.bundle.js'
    }
}