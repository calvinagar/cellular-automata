const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env, args) => {
    const isDevelopment = args.mode !== 'production';
    return {
        mode: isDevelopment ? 'development' : 'production',
        stats: 'minimal', // Keep console output easy to read.
        entry: './src/App.ts',

        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js',
        },

        devServer: {
            compress: true,
            allowedHosts: 'all',
            static: false,
            client: {
                logging: 'warn',
                overlay: {
                    errors: true,
                    warnings: false,
                },
                progress: true,
            },
            port: 3000,
            host: '0.0.0.0',
        },

        // Web games are bigger than pages, disable the warnings that our game is too big.
        performance: { hints: false },

        devtool: isDevelopment ? 'eval-source-map' : undefined,

        optimization: {
            minimize: !isDevelopment,
            minimizer: [
                new TerserPlugin({
                    terserOptions: {
                        ecma: 6,
                        compress: { drop_console: true },
                        output: { comments: false, beautify: false },
                    },
                }),
            ],
        },

        module: {
            rules: [
                {
                    test: /\.ts(x)?$/,
                    loader: 'ts-loader',
                    exclude: /node_modules/,
                },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: 'index.html',
                hash: true,
                minify: false,
            }),
        ],
    };
}
