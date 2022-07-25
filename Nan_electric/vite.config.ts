import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";
import * as  path from "path";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import VueSetupExtend from "vite-plugin-vue-setup-extend";

export default defineConfig({
	plugins: [
		vue(),
		VueSetupExtend(),
		AutoImport({
			resolvers: [ElementPlusResolver()],
		}),
		Components({
			resolvers: [ElementPlusResolver()],
		}),
	],
	resolve: {
		extensions: [".js", ".json", ".ts"],
		alias: {
			"@": path.resolve(__dirname, ".", "src"),
			"@/assets": path.resolve(__dirname, ".", "src/assets"),
			"@/pages": path.resolve(__dirname, ".", "src/pages"),
			"@/theme": path.resolve(__dirname, ".", "src/theme"),
			"@/utils": path.resolve(__dirname, ".", "src/utils"),
			"@/router": path.resolve(__dirname, ".", "src/router"),
			"@/components": path.resolve(__dirname, ".", "src/components")
		}
	},
	css: {
		preprocessorOptions: {
			less: {
				javascriptEnabled: true
			}
		}
	}
});
