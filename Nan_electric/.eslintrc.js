const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
	// ESLint 一旦发现配置文件中有 "root": true，它就会停止在父级目录中寻找。
	root: true,
	// 指定脚本的运行环境。每种环境都有一组特定的预定义全局变量。
	env: {
		browser: true,
		es2021: true,
	},
	// 启用的规则
	extends: [
		"plugin:vue/vue3-recommended",
		"standard",
		"prettier",
		"eslint-config-prettier",
	],
	parserOptions: {
		// js的版本
		ecmaVersion: 13,
		// 解析器
		parser: "@typescript-eslint/parser",
		// 模块化方案
		sourceType: "module",
	},
	// 引用的插件  下载的插件去掉eslint-plugin-前缀引入
	plugins: ["vue", "@typescript-eslint", "import", "node", "promise"],
	// 自定义规则
	rules: {
		camelcase: 2,
		curly: 2,
		"brace-style": [2, "1tbs"],
		quotes: [2, "double"],
		semi: [2, "always"],
		indent: ["error", "tab"],
		"vue/multi-word-component-names": 0,
		"object-curly-spacing": [2, "always"],
		"vue/no-use-v-if-with-v-for": [0]
	},
});
