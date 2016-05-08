var config = require("./webpack.config.js");
const WebpackDevServer = require('webpack-dev-server')
const webpack = require('webpack')
var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
    publicPath: 'http://localhost:2992/_assets/',
    colors: true,
    progress: true,
    hot: true,
    historyApiFallback: true
});
server.listen(2992);