const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
    mode: 'development',

    output: {
        clean: true
    },

    module: {
        rules: [
            {
                test: /\.html$/i, // esta expresion regular le dice a webpack que aplique esta regla con los archivos .html
                loader: 'html-loader', // Carga el arcivho html en la carpeta dist
                options: {
                    sources: false,
                    minimize: false,
                },
            },
            {
                test: /\.css$/i,
                exclude: /styles.css$/,
                use: ['style-loader', 'css-loader'] // el css y el style loader en conjunto lo que hacen es trabjar archivos de css como si fuera js
            },
            {
                test: /styles.css$/,
                use: [ MiniCssExtractPlugin.loader, 'css-loader' ]
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: 'file-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({ // inyecta mi codigo html en el nuevo archivo
            template: './src/index.html',
            title: 'mi configuracion webpack',
            filename: 'index.html'
        }),

        new MiniCssExtractPlugin({
            filename: '[name].[fullhash].css', //Me crea el archivo en dist con el mismo nombre del origin y ademas lo crea con un hash para que el navegador no lo guarde en cache
            ignoreOrder: false
        }),
        new CopyPlugin({
            patterns: [
                {from: 'src/assets/', to: 'assets/'}
            ]
        })
    ]
}