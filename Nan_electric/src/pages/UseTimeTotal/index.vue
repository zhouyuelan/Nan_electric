<script setup lang="ts">
import { reactive } from "vue";

const form = reactive({ time: "" });
const assignWorkOrder = reactive([
	{ name: "报修工单", key: "repairWorkOrder", value: 2686.4 },
	{ name: "巡检工单", key: "checkWorkOrder", value: 15406.9 },
	{ name: "整改工单", key: "rectificationWorkOrder", value: 1.5 },
]);
const doneWorkOrder = reactive([
	{ name: "报修工单", key: "repairWorkOrder", value: 2686.4 },
	{ name: "巡检工单", key: "checkWorkOrder", value: 15406.9 },
	{ name: "整改工单", key: "rectificationWorkOrder", value: 1.5 },
]);
const totalWorkOrder = reactive([
	{ name: "报修工单", key: "repairWorkOrder", value: 2686.4 },
	{ name: "巡检工单", key: "checkWorkOrder", value: 15406.9 },
	{ name: "整改工单", key: "rectificationWorkOrder", value: 1.5 },
]);
</script>

<template>
	<div class="searchContainer">
		<el-form
			label-width="100px"
			:model="form"
		>
			<el-form-item label="创建时间">
				<el-date-picker
					v-model="form.time"
					type="date"
					placeholder="请选择时间"
					size="large"
				/>
			</el-form-item>
		</el-form>
		<div>
			<el-button type="primary">查询</el-button>
			<el-button>重置</el-button>
		</div>
	</div>
	<el-divider style="margin: 10px 0"/>
	<div class="useTimeContent">
		<el-card class="cardContainer">
			<template #header>
				<span>指派工单平均耗时(单位：分钟)</span>
			</template>
			<div class="cardContent">
				<div v-for="(item, index) in assignWorkOrder" :key="index" class="cardContentItem">
					<div>{{ item.name }}</div>
					<div>{{ item.value }}</div>
				</div>
			</div>
		</el-card>
		<el-card class="cardContainer">
			<template #header>
				<span>完成工单平均耗时(单位：分钟)</span>
			</template>
			<div class="cardContent">
				<div v-for="(item, index) in doneWorkOrder" :key="index" class="cardContentItem">
					<div>{{ item.name }}</div>
					<div>{{ item.value }}</div>
				</div>
			</div>
		</el-card>
		<el-card class="cardContainer">
			<template #header>
				<span>工单总耗时(单位：分钟)</span>
			</template>
			<div class="cardContent">
				<div v-for="(item, index) in totalWorkOrder" :key="index" class="cardContentItem">
					<div>{{ item.name }}</div>
					<div>{{ item.value }}</div>
				</div>
			</div>
		</el-card>
	</div>
</template>


<style scoped lang="less">
.searchContainer {
	width: 100%;
	box-sizing: border-box;
	height: 15%;
	display: flex;
	flex-wrap: wrap;
}

.useTimeContent {
	overflow: scroll;
	height: calc(100% - 15% - 22px);
	box-sizing: border-box;
	padding-top: 10px;
	
	.cardContainer {
		margin: 10px;
		
		.cardContent {
			display: grid;
			grid-template-columns: repeat(auto-fill, 30%);
			grid-row-gap: 1rem;
			grid-column-gap: 1rem;
			justify-content: center;
			
			.cardContentItem {
				div:first-child {
					font-size: 0.5rem;
					color: rgba(0, 0, 0, 0.6);
				}
				
				div:last-child {
					font-size: 1.5rem;
				}
			}
			
			
		}
	}
}

</style>
