
const {VueLoaderPlugin} = require('vue-loader')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const resolve = dir => path.join(__dirname, '..', dir)
console.log('name',resolve('examples/index.html'))

module.exports = {
	mode: 'development',
	devtool: 'eval-source-map',
	entry: {
		app: resolve('examples/main.ts'),
	},
	devServer: {
		hot: true,
		inline: true,
		stats: 'minimal',
		overlay: true,
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					hotReload: true,
				},
			},
			{
				test: /\.(ts|js)x?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{
				test: /\.css$/,
				use: [
					{loader: 'style-loader'},
					{loader: 'css-loader'},
				],
			},
		],
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.vue'],
	},
	plugins: [
		new VueLoaderPlugin(),
		new ProgressBarPlugin(),
		new HtmlWebpackPlugin({
			template: resolve('examples/index.html'),
			filename: 'index.html',
		}),
	],
}
