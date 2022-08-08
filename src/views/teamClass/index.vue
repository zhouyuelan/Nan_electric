<template>
	<div style="display: flex; justify-content: end; margin-bottom: 10px">
		<a-button type="primary" >新增</a-button>
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
			<a-button type="primary" ghost >
				编辑
			</a-button>
		</template>
	</a-table>
</template>
<script>
import { getList } from '@/api/table'

const columns = [
	{
		title: '序号',
		dataIndex: 'index',
	},
	{
		title: '工作任务',
		dataIndex: 'contactName',
	},
	{
		title: '工作属性',
		dataIndex: 'contactPhone',
	},
	{
		title: '牵头人',
		dataIndex: 'province',
	},
	{
		title: '配合人员',
		dataIndex: 'client_origin',
	},
	{
		title: '当前办理情况',
		dataIndex: 'create_time',
	},
	{
		title: '本周工作举措',
		dataIndex: 'submit_person',
	},
	{
		title: '完成时限',
		dataIndex: 'submit_person',
	},
	{
		title: '完成情况',
		dataIndex: 'submit_person',
	},
	{
		title: '备注',
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
			this.$router.push('/clientDetails')
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
