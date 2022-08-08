<script setup>
  import { SolutionOutlined } from '@ant-design/icons-vue'
  import {reactive, ref} from 'vue'

  const current = ref(0)
  const loading = ref(false)
  const selectedRowKeys = ref([])
  const steps = [
    {
      title: '新建',
    },
    {
      title: '指派',
    },
    {
      title: '接受',
    },
    {
      title: '开始',
    },
    {
      title: '完成',
    },
  ]
  const next = () => {
	  current.value++;
  }
  const prev = () => {
	  current.value--;
  };
  const form = reactive({
	  option1: '',
	  option2: '',
	  option3: '',
	  option4: '',
	  option5: '',
	  option6: '',
	  option7: '',
	  option8: '',
	  option9: '',
	  option10: '',
	  option11: '',
	  option12: '',
  })

  const columns = [
	  {
		  title: '员工',
		  dataIndex: 'option2',
	  },
	  {
		  title: '未完成工单',
		  dataIndex: 'option3',
	  },
	  {
		  title: '今日已完成',
		  dataIndex: 'option4',
	  },
	  {
		  title: '距离(km)',
		  dataIndex: 'option5',
	  },
	  {
		  title: '所在部门',
		  dataIndex: 'option6',
	  },
  ]

  const data = [
	  {option2: "name1", option3: 1, option4: 0, option5: "120km", option6: "成都xxx公司"},
	  {option2: "name2", option3: 7, option4: 3, option5: "4km", option6: "成都xxx公司"},
	  {option2: "name3", option3: 2, option4: 9, option5: "50km", option6: "成都xxx公司"},
  ]
</script>

<template>
  <div>
    <div>
      <a-space>
        <a-button>返回</a-button>
        <a-button type="primary">只保存</a-button>
        <a-button type="primary">保存并派单</a-button>
      </a-space>
      <a-divider />
    </div>
    <div>
      <a-steps :current="current">
        <a-step v-for="item in steps" :key="item.title" :title="item.title" />
      </a-steps>
    </div>
	  <div style="width: 100%; margin-top: 30px">
		  <div v-if="current === 0">
			  <a-form
				  ref="ruleFormRef"
				  :model="form"
				  :label-col="{ span: 4 }"
				  :wrapper-col="{ span: 16 }"
			  >
				  <a-form-item label="工单编号" prop="client_name">
					  <a-input v-model="form.option1" default-value="工单编号将在创建后由系统生成" disabled/>
				  </a-form-item>
				  <a-form-item label="工单类型">
					  <a-input v-model="form.option2"  placeholder="请输入"/>
				  </a-form-item>
				  <a-form-item label="客户">
					  <a-cascader
						  style="width: 100%"
						  v-model="form.option3"
						  placeholder="请选择"
					  />
				  </a-form-item>
				  <a-form-item label="联系人">
					  <a-input v-model="form.option4"  placeholder="请输入"/>
				  </a-form-item>
				  <a-form-item label="地址">
					  <a-input
						  v-model="form.option5"
						  type="textarea"
						  :autosize="{ minRows: 2, maxRows: 4 }"
						  placeholder="请输入"
					  />
				  </a-form-item>
				  <a-form-item label="产品">
					  <a-input v-model="form.option6"  placeholder="请输入"/>
				  </a-form-item>
				  <a-form-item label="客户级别">
					  <a-input v-model="form.option7"  placeholder="请输入"/>
				  </a-form-item>
				  <a-form-item label="购买日期">
					  <a-input v-model="form.option8"  placeholder="请输入"/>
				  </a-form-item>
				  <a-form-item label="优先级">
					  <a-input v-model="form.option9"  placeholder="请输入"/>
				  </a-form-item>
				  <a-form-item label="服务类型">
					  <a-input v-model="form.option10"  placeholder="请输入"/>
				  </a-form-item>
				  <a-form-item label="计划时间">
					  <a-input v-model="form.option11"  placeholder="请输入"/>
				  </a-form-item>
				  <a-form-item label="故障描述">
					  <a-input v-model="form.option12"  placeholder="请输入"/>
				  </a-form-item>
				  
			  </a-form>
		  </div>
		  <div v-else-if="current === 1">
			  <a-table
				  :row-selection="{ selectedRowKeys: selectedRowKeys}"
				  :scroll="{ x: 1500 }"
				  :columns="columns"
				  :row-key="(record) => record.uuid"
				  :data-source="data"
				  :loading="loading"
			  >
			  </a-table>
		  </div>
	  </div>
    <div style="margin-top: 10px">
      <a-button v-if="current < steps.length - 1" type="primary" @click="next">下一步</a-button>
      <a-button
        v-if="current == steps.length - 1"
        type="primary"
        @click="message.success('Processing complete!')"
      >
        完成
      </a-button>
      <a-button v-if="current > 0" style="margin-left: 8px" @click="prev">
        上一步
      </a-button>
    </div>
  </div>
</template>

<style scoped></style>
