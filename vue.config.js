const path = require('path');

module.exports = {
    devServer: {
        proxy: 'http://localhost:8090'
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@': path.join(__dirname, 'src/')
            }
        }
    }
}