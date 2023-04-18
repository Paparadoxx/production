/* eslint-disable linebreak-style */
import { Configuration, DefinePlugin, RuleSetRule } from "webpack";
import path from "path";
import { buildCssLoader } from "../build/loaders/buildCssLoader";

export default {
	stories: [
		"../../src/**/*.stories.@(js|jsx|ts|tsx)",
	],
	addons: [
		"@storybook/addon-links",
		{
			name: "@storybook/addon-essentials",
			options: {
				backgrounds: false,
			},
		},
		"@storybook/addon-interactions"
	],
	framework: "@storybook/react",
	core: {
		builder: "@storybook/builder-webpack5"
	},
	webpackFinal: async (config: Configuration) => {
		const paths = {
			build: "",
			html: "",
			entry: "",
			src: path.resolve(__dirname, "..", "..", "src")
		};
		config.resolve?.modules?.push(paths.src);
		config.resolve?.extensions?.push(".ts", ".tsx");
		// config!.resolve!.alias = {
		// 		...config!.resolve!.alias,
		// 		'@': paths.src,
		if (config.module?.rules) {
			config.module.rules = config.module?.rules?.map((rule: RuleSetRule | "...") => {
				if (rule !== "..." && /svg/.test(rule.test as string)) {
					return { ...rule, exclude: /\.svg$/i };
				}
				return rule;
			});
		}
		config?.module?.rules?.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"],
		}),
		config.module?.rules?.push(buildCssLoader(true));

		config?.plugins?.push(new DefinePlugin({
			__IS_DEV__: JSON.stringify(true),
			__API__: JSON.stringify(""),
			__PROJECT__: JSON.stringify("storybook"),
		}));
		
		return config;
	},
};