<script setup lang="ts">
import { routes, IconPath } from "@/router/index";
import { useRouter } from "vue-router";
const router = useRouter();

const clickRouter = (path) =>  {
	router.push({ path });
};

</script>

<template>
	<div class="HomeContainer">
		<el-card v-for="(item, index) in routes" v-show="item.path !== '/'" :key="index">
			<template #header>
				<span>{{ item.name }}</span>
			</template>
			<div class="contentContainer" >
				<div
					v-for="(child, childIndex) in item?.children"
					:key="childIndex"
					class="contentItem"
					@click="clickRouter(child?.path)"
				>
					<img :src="IconPath">
					<div>{{ child.name }}</div>
				</div>
			</div>
		</el-card>
	</div>
</template>


<style scoped lang="less">
.HomeContainer {
	width: 100%;
	height: 100%;
	box-sizing: border-box;
	display: grid;
	overflow: scroll;
	grid-template-columns: repeat(auto-fill, 300px);
	grid-auto-rows: 260px;
	grid-row-gap: 1rem;
	grid-column-gap: 1rem;
	justify-content: center;

	.contentContainer {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-row-gap: 1rem;
		justify-content: center;
		align-content: center;

		.contentItem {
			display: flex;
			flex-direction: column;
			align-items: center;
		  	cursor: pointer;

			img {
				width: 32px;
				height: 32px;
			}

			div {
			  	text-align: center;
			  	width: 80%;
				font-size: 0.8rem;
				font-weight: bold;
			}
		}
	}
}
</style>
