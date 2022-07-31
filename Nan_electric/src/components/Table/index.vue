<script setup lang="ts">
import { ref } from "vue";

const current = ref<Number>(1);
const pageSizes: Array<Number> = [10, 20, 30, 40];
const pageSize = ref<Number>(pageSizes[0]);
const props = defineProps<{
	title?: String
	data: []
	column: { lable: String, name: String, [key: string]: any }[]
	rightActions?: {}[]
}>();
/**
 *Author: Moki
 *Date: 2022-211-17
 *Todo: 切换每页条数
 **/
const handleSizeChange = (size): void => {
	pageSize.value = size;
};
/**
 *Author: Moki
 *Date: 2022-211-17
 *Todo: 分页
 **/
const handleCurrentChange = (currentValue): void => {
	current.value = currentValue;
};

console.log(props.column);

</script>

<template>
	<div style="height: 100%">
		<div class="titleContainer">{{ title }}</div>
		<div class="actionCaontainer">
			<slot name="addBtn"></slot>
		</div>
		<div class="tableContainer" style="width: 100%; height: calc(100% - 120px)">
			<el-table
				:data="data.slice((current-1)*pageSize,current*pageSize)" border
				style="width: 100%; height: calc(100% - 10px)">
				<el-table-column
					v-for="(item, index) in column"
					:key="index"
					:prop="item.prop"
					:label="item.label"
					:width="item.width"
					:min-width="item.minWidth"
					:fixed="item.fixed"
				>
					
					<template
						v-for="(btnSlot, index) in item.scopedSlots"
						v-if="item.prop === 'actions'"
						:key="index"
					>
						<el-space wrap>
							<el-button link :type="btnSlot.type" size="small">{{ btnSlot.name }}</el-button>
						</el-space>
					</template>
				</el-table-column>
			</el-table>
		</div>
		<el-pagination
			v-model:current-page="current"
			class="paginationClass"
			small
			:page-size="pageSize"
			:page-sizes="[10, 20, 30, 40]"
			background
			layout="sizes, prev, pager, next"
			:total="data.length"
			@size-change="handleSizeChange"
			@current-change="handleCurrentChange"
		/>
	</div>
</template>


<style scoped lang="less">
.titleContainer {
	height: 30px;
	line-height: 30px;
	font-size: 1.5rem;
	font-weight: bold;
}

.actionCaontainer {
	display: flex;
	flex-wrap: nowrap;
	justify-content: end;
	height: 50px;
	align-items: center;
}

.tableContainer {
	height: 100%;
}

.paginationClass {
	width: 100%;
	height: 40px;
	display: flex;
	justify-content: end;
}

</style>
