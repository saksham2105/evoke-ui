const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const morgan = require('morgan'); // Import the morgan middleware

module.exports = {
    devtool: 'eval-cheap-module-source-map',
    entry: './src/index.js',
    devServer: {
        port: 3000,
        contentBase: path.join(__dirname, "dist"),
        before: function (app) {
            app.use(morgan('dev')); // Use morgan middleware to log requests
        }
    },
    node: {
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 8192, // Convert images smaller than 8KB to base64 strings
                      name: 'images/[name].[ext]', // Output path for images
                    },
                  },
                ],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
            inject: true
        })
    ]
};
