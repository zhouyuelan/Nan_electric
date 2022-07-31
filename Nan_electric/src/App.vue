<script setup lang="ts">
import { watch, reactive } from "vue";
import { useRoute, useRouter, RouteRecordName } from "vue-router";

const route = useRoute();
const router = useRouter();
const RouterName = reactive<{ name: RouteRecordName, path: String }>({
	name: "",
	path: ""
});
watch(route, (newRouter) => {
	RouterName.name = newRouter.name;
	RouterName.path = newRouter.fullPath;
});
const back = () => {
	router.go(-1);
};
</script>

<template>
	<el-container style="height: 100%">
		<el-header v-show="RouterName.path !== '/'" id="pageHeader">
			<el-page-header :content="RouterName.name" title="返回" @back="back"/>
		</el-header>
		<el-main id="pageContent">
			<router-view></router-view>
		</el-main>
	</el-container>
</template>

<style lang="less">
html, body {
	width: 100%;
	height: 100%;
	margin: 0;
	padding: 0;
	font-size: 16px;
}

#app {
	width: 100%;
	height: 100%;
	background-color: #F2F3F5;
	padding: 1rem 1.5rem;
	box-sizing: border-box;

	#pageHeader {
		padding: 0;
		padding-left: 1rem;
		display: flex;
		align-items: center;
		background-color: #fff;
		margin-bottom: 1rem;
		border-radius: 5px;
	}

	#pageContent {
		padding: 0;
		padding: 2rem;
		box-sizing: border-box;
		background-color: #fff;
		border-radius: 5px;
	}
}
</style>
