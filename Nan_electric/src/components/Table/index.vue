<script setup lang="ts">
import { ref } from "vue";

let current = ref(1);
const props = defineProps<{
	title?: String
	data: []
	column: { lable: String, name: String, [key: string]: any }[]
	rightActions: {}[]
}>();
const handleSizeChange = () => {
};
const handleCurrentChange = (current) => {
	current.value = current;
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
			<el-table :data="data" border style="width: 100%; height: calc(100% - 10px)">
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
			class="paginationClass"
			:current-page="current"
			page-size="pageSize2"
			page-sizes="[10, 20, 30, 40]"
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
