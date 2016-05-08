var config = require("./webpack.config.js");
process.env.NODE_ENV = 'development'
const WebpackDevServer = require('webpack-dev-server')
const webpack = require('webpack')
var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
    publicPath: 'http://localhost:2992/_assets/',
    colors: true,
    progress: true,
    hot: true,
    historyApiFallback: true,
    inline: true
});
server.listen(2992);