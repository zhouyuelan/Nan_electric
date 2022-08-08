<script setup>
  import { reactive, ref } from 'vue'

  const form = reactive({})
  const ruleFormRef = ref()
  const options = [
	  {value: "备份数据"},
	  {value: "IE安装"},
	  {value: "输入法"},
	  {value: "备份数据"},
	  {value: "打印机安装"},
	  {value: "重装系统"},
	  {value: "软视频维护"},
	  {value: "OFFICE"},
	  {value: "扫描仪安装"},
  ]
</script>

<template>
  <div>
    <a-form
      ref="ruleFormRef"
      :model="form"
      :label-col="{ span: 4 }"
      :wrapper-col="{ span: 16 }"
    >
      <a-form-item label="维护部门">
        <a-input placeholder="请输入" />
      </a-form-item>
      <a-form-item label="联系人">
        <a-input placeholder="请输入" />
      </a-form-item>
      <a-form-item label="电话">
        <a-input placeholder="请输入" />
      </a-form-item>
      <a-form-item label="门牌号">
        <a-input placeholder="请输入" />
      </a-form-item>
      <a-form-item label="报修时间">
        <a-input placeholder="请输入" />
      </a-form-item>
      <a-form-item label="故障情况">
        <a-textarea
          :autosize="{ minRows: 3, maxRows: 4 }"
          placeholder="请输入"
        />
      </a-form-item>
	    <a-form-item label="维修内容">
		    <a-select
			    mode="tags"
			    style="width: 100%"
			    placeholder="请选择"
			    :options="options"
		    ></a-select>
	    </a-form-item>
      <a-form-item label="完成时间">
        <a-input placeholder="请输入" />
      </a-form-item>
      <a-form-item label="服务态度">
        <a-input placeholder="请输入" />
      </a-form-item>
      <a-form-item label="工作质量">
        <a-input placeholder="请输入" />
      </a-form-item>
      <a-form-item>
        <div style="display: flex; justify-content: end">
          <a-space>
            <a-button type="primary">提交</a-button>
          </a-space>
        </div>
      </a-form-item>
    </a-form>
  </div>
</template>

<style scoped></style>
