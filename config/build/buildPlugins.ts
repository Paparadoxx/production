import { BuildPaths, BuildOptions } from './types/config';
import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export function buildPlugins({paths}: BuildOptions): webpack.WebpackPluginInstance[] {
	return [
		new HtmlWebpackPlugin({
			templaete: paths.html,
		}),
		new webpack.ProgressPlugin(),
	]
}