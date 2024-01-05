const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
module.exports = {


}
module.exports = {
    target:'node',
    plugins: [
        new NodePolyfillPlugin()
    ],
    resolve: {
        extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
        fallback: {
            "path": require.resolve("path-browserify"),
            "fs": false,
            "tls": false,
            "net": false,
            "path": false,
            "zlib": false,
            "http": false,
            "https": false,
            "stream": false,
            "crypto": false,
            "crypto-browserify": require.resolve('crypto-browserify'), //if you want to use this module also don't forget npm i crypto-browserify
        }
    },

    experiments: {
        topLevelAwait: true
    }
// node: {
//   fs: 'empty',
//   net: 'empty',
//   tls: 'empty'
// },
};