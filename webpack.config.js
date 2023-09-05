const path = require('path');
const miniCss = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    entry: './src/webpack/index.js',
    output: {
        path: path.resolve(__dirname, './src/assets'),
        filename: 'js/main.js'
    },
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: [
                    miniCss.loader,
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true }
                    },
                    {
                        loader: 'postcss-loader',
                    },
                    {
                        loader: 'sass-loader',
                        options: { sourceMap: true }
                    }
                ]
            },
        ],
    },
    plugins: [
        new miniCss({
            filename: 'css/style.css',
        }),
    ]
};