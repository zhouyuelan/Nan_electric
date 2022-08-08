<script setup>
  import { reactive, ref } from 'vue'

  const form = reactive({})
  const ruleFormRef = ref()
</script>

<template>
  <div>
    <a-form
      ref="ruleFormRef"
      :model="form"
      :label-col="{ span: 4 }"
      :wrapper-col="{ span: 16 }"
    >
      <a-form-item label="序号" >
	      <a-input  placeholder="系统自动生产" disabled />
      </a-form-item>
      <a-form-item label="物品名称">
        <a-input placeholder="请输入" />
      </a-form-item>
      <a-form-item label="品牌型号(参数)">
        <a-input placeholder="请输入" />
      </a-form-item>
      <a-form-item label="数量">
        <a-input  placeholder="请输入" />
      </a-form-item>
      <a-form-item label="品牌型号（参数）">
	      <a-input  placeholder="请输入" />
      </a-form-item>
      <a-form-item label="用途">
        <a-input  placeholder="请输入" />
      </a-form-item>
      <a-form-item label="领用部门">
        <a-input  placeholder="请输入" />
      </a-form-item>
      <a-form-item label="领用人姓名">
        <a-input placeholder="请输入" />
      </a-form-item>
      <a-form-item label="联系电话">
        <a-input placeholder="请输入" />
      </a-form-item>
      <a-form-item label="经手人">
        <a-input placeholder="请输入" />
      </a-form-item>
      <a-form-item label="时间">
        <a-input placeholder="请输入" />
      </a-form-item>
      <a-form-item label="备注">
	      <a-textarea
		      :autosize="{ minRows: 3, maxRows: 4 }"
		      placeholder="请输入"
	      />
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
