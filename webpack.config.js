const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = () => process.env.NODE_ENV?.toLowerCase() === 'production';

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
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            isProduction() ? 'babel-preset-react-app/prod' : 'babel-preset-react-app',
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
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ],
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
            '...'
        ]
    },
    resolve: {
        extensions: [
            '.jsx',
            '...'
        ]
    }
};
