<script setup lang="ts">
import Table from "@/components/Table/index.vue";
import Mock from "mockjs";
import { useRouter } from "vue-router";

const router = useRouter();

const column: { label: String, prop: String, width?: String, [key: string]: any }[] = [
	{ label: "客户名称", prop: "client_name", minWidth: 100 },
	{ label: "联系人姓名", prop: "contactName", minWidth: 100 },
	{ label: "联系人电话", prop: "contactPhone", minWidth: 100 },
	{ label: "省市区", prop: "province", minWidth: 100 },
	{ label: "客户来源", prop: "client_origin", minWidth: 100 },
	{ label: "创建时间", prop: "create_time", minWidth: 100 },
	{ label: "提交人", prop: "submit_person", minWidth: 100 },
	{
		label: "操作",
		prop: "actions",
		fixed: "right",
		scopedSlots: [{ type: "primary", name: "详情" }, { type: "danger", name: "删除" }],
	},
];

const { list } = Mock.mock({
	"list|20-60": [
		{
			"client_name": "@cname",
			"contactName": "@cname",
			"contactPhone": /^1[385][1-9]\d{8}/,
			"province": "@city(true)",
			"client_origin": "@city(true)",
			"create_time": "@date(yyyy-MM-dd hh:mm)",
			"submit_person": "@cname",
		}
	]
});

/**
 *Author: Moki
 *Date: 2022-211-28
 *Todo: 跳转到详情页
 **/
const goDetails = () => {
	router.push("/ClientDetails");
};


</script>

<template>
	<div class="ClientContainer">
		<Table
			title="客户"
			:column="column"
			:data="list"
		>
			<template #addBtn>
				<el-button type="primary" @click="goDetails">新增</el-button>
			</template>
		</Table>
	</div>
</template>


<style scoped lang="less">
.ClientContainer {
	width: 100%;
	height: 100%;
	box-sizing: border-box;
}
</style>
