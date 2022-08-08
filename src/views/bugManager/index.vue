<template>
	<div style="display: flex; justify-content: start; margin-bottom: 10px">
		<a-tabs >
			<a-tab-pane key="1" tab="安全设备"></a-tab-pane>
			<a-tab-pane key="2" tab="服务器应用系统" ></a-tab-pane>
		</a-tabs>
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
		title: 'IP地址',
		dataIndex: 'index',
	},
	{
		title: '系统名称',
		dataIndex: 'contactName',
	},
	{
		title: '物理地址',
		dataIndex: 'contactPhone',
	},
	{
		title: '设备型号',
		dataIndex: 'province',
	},
	{
		title: '操作系统及版本',
		dataIndex: 'client_origin',
	},
	{
		title: '数据库版本',
		dataIndex: 'create_time',
	},
	{
		title: '中间件版本',
		dataIndex: 'submit_person',
	},
	{
		title: '用途',
		dataIndex: 'submit_person',
	},
	{
		title: '系统开发厂家',
		dataIndex: 'submit_person',
	},
	{
		title: '系统开发联系电话',
		dataIndex: 'submit_person',
	},
	{
		title: '管理部门',
		dataIndex: 'submit_person',
	},
	{
		title: '管理部门负责人',
		dataIndex: 'submit_person',
	},
	{
		title: '管理部门联系电话',
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
