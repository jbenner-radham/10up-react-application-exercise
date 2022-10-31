const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

const isProduction = () => process.NODE_ENV?.toLowerCase() === 'production';

module.exports = {
    entry: './src/index.js',
    mode: isProduction() ? 'production' : 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            isProduction() ? 'react-app/prod' : 'react-app',
                            '@babel/preset-env'
                        ]
                    }
                }
            }
        ]
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: 'public' }
            ]
        })
    ],
    resolve: {
        extensions: [
            '.jsx',
            '...'
        ]
    }
};
