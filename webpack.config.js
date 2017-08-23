const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
	entry: path.resolve(__dirname, './app/main.js'),
	output: {
		path: path.resolve(__dirname, './build'),
		filename: 'bundle.js'
	},
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		contentBase: './public',
		historyApiFallback: true,
		inline: true,
		hot: true
	},
	module: {
		rules: [
			{
				test: /\.(jsx|js)$/, 
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.json$/,
				loader: 'json-loader'
			},
			{
				test: /\.css$/,
				use: [
					{loader: 'style-loader'},
					{loader: 'css-loader',options: {module: true}},
					{loader: 'postcss-loader',options:{plugins: function(){return [require('autoprefixer')]}}}
				]
			},
			{
				test: /\.styl$/,
				use: [
					{loader: 'style-loader'},
					{loader: 'css-loader'},
					// {loader: 'postcss-loader',options:{plugins: function(){return [require('autoprefixer')]}}},
					{loader: 'stylus-loader'}
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, './index.html')
		}),
		new webpack.HotModuleReplacementPlugin()
	]

}