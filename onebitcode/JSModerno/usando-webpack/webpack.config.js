module.exports = {
    entry: {
        index: './dist/src/index.js'
    },
    mode: 'development',
    module: {
        rules:[{
            test: /\.css$/,
            use:['style-loader', 'css-loader']
        }]
    }
}