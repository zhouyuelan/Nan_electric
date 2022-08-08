<template>
	<div style="display: flex; justify-content: end; margin-bottom: 10px">
		<a-button type="primary" @click="handleAdd">新增</a-button>
	</div>
	<a-table
		:scroll="{ x: 1500 }"
		:columns="columns"
		:row-key="(record) => record.uuid"
		:data-source="data"
		:pagination="pagination"
		:loading="loading"
		@change="handleTableChange"
	>
		<template #actions="{ record }">
			<a-button type="primary" ghost @click="console.log(record)">
				编辑
			</a-button>
		</template>
	</a-table>
</template>
<script>
import { getList } from '@/api/table'

const columns = [
	{
		title: '工单编号',
		dataIndex: 'client_name',
	},
	{
		title: '工单类型',
		dataIndex: 'contactName',
	},
	{
		title: '客户',
		dataIndex: 'contactPhone',
	},
	{
		title: '联系人',
		dataIndex: 'province',
	},
	{
		title: '电话',
		dataIndex: 'client_origin',
	},
	{
		title: '客户地址',
		dataIndex: 'create_time',
	},
	{
		title: '产品',
		dataIndex: 'submit_person',
	},
	{
		title: '操作',
		dataIndex: 'actions',
		fixed: 'right',
		width: 100,
		slots: { customRender: 'actions' },
	},
]

export default {
	data() {
		return {
			data: [],
			pagination: {
				showLessItems: true,
				showQuickJumper: true,
				showSizeChanger: true,
			},
			query: {},
			loading: false,
			columns,
		}
	},
	mounted() {
		this.fetch()
	},
	methods: {
		handleAdd() {
			this.$router.push('/order/add_order')
		},
		handleTableChange(pagination) {
			const pager = { ...this.pagination }
			pager.current = pagination.current
			this.pagination = pager
			this.fetch()
		},
		fetch() {
			this.loading = true
			getList({
				pageSize: this.pagination.pageSize,
				current: this.pagination.current,
			}).then(({ data, total }) => {
				console.log(data, 'data')
				const pagination = { ...this.pagination }
				pagination.total = total
				this.loading = false
				this.data = data
				this.pagination = pagination
			})
		},
	},
}
</script>
