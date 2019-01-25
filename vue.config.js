'use strict';

const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    pages: {
        'detail': {
            entry: 'src/entry/detail.js',
            title: '',
            template: 'public/index.html'
        },
        'list': {
            entry: 'src/entry/list.js',
            title: '',
            template: 'public/index.html'
        }
    },
    configureWebpack: {
        resolve: {
            extensions: ['.webpack.js', '.web.js', '.mjs', '.js', '.vue', '.json'],
            alias: {
                '@': resolve('src'),
                '@api': resolve('src/api'),
                '@tool': resolve('src/tool')
            }
        }
    },
    publicPath: `./`,
    devServer: {
        hot: true,
        disableHostCheck: true
    }
};
