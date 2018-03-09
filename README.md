# webpack-101
1. Basic webpack setup
2. Bundling javascript
3. HTML Webpack Plugin
    a. Dynamic html generation
    b. Templating
    c. Minification and Hashing
4. CSS Loader, Style Loader, SASS loader
    These loaders are used to bundle the style sheets and these write the styles directly into the body
5. Extract Text Webpack Plugin
    This plugin will help us dumping all the styles in a file
    npm install extract-text-webpack-plugin -D
6. Webpack dev server
    npm i webpack-dev-server -D
7. Webpack dev server advanced configuration
    a. create custom configuration for webpack dev server (this is served from memory as compared to webpack writes to the disk)
    lsof -i tcp:9000
    kill -9 pid
    stats - to limit the error info or other details and open a browser automatically
   
8. Setup react app without using create-react-app
    a. adding react
    npm install --save react react-dom
    b. Enabling ES6 and JSX
    npm install babel babel-preset-react babel-preset-es2015 --save-dev
    npm install babel babel-preset-react babel-preset-env --save-dev
    c. Adding loaders
        npm install --save-dev babel-loader babel-core