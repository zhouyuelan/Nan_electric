<script setup>
  import { reactive, ref, onMounted, getCurrentInstance } from 'vue'

  const { proxy } = getCurrentInstance()

  const form = reactive({ time: '' })
  const myRef = ref(null)

  const initRepairsCharts = () => {
    const repairsCharts = proxy?.echarts.init(
      document.getElementById('repairsCharts')
    )
    repairsCharts.setOption({
      legend: {
        x: 'center',
        y: 'bottom',
      },
      tooltip: {},
      dataset: {
        source: [
          ['product', '2015', '2016'],
          ['Matcha Latte', 43.3, 85.8],
          ['Milk Tea', 83.1, 73.4],
          ['Cheese Cocoa', 86.4, 65.2],
          ['Walnut Brownie', 72.4, 53.9],
        ],
      },
      xAxis: { type: 'category' },
      yAxis: {},
      series: [{ type: 'bar' }, { type: 'bar' }],
    })
  }
  const initPollingCharts = () => {
    const pollingCharts = proxy.echarts.init(
      document.getElementById('pollingCharts')
    )
    pollingCharts.setOption({
      legend: {
        x: 'center',
        y: 'bottom',
      },
      tooltip: {},
      dataset: {
        source: [
          ['product', '2015', '2016'],
          ['Matcha Latte', 43.3, 85.8],
          ['Milk Tea', 83.1, 73.4],
          ['Cheese Cocoa', 86.4, 65.2],
          ['Walnut Brownie', 72.4, 53.9],
        ],
      },
      xAxis: { type: 'category' },
      yAxis: {},
      series: [{ type: 'bar' }, { type: 'bar' }],
    })
  }
  const initUpdateCharts = () => {
    const updateCharts = proxy.echarts.init(
      document.getElementById('updateCharts')
    )
    updateCharts.setOption({
      legend: {
        x: 'center',
        y: 'bottom',
      },
      tooltip: {},
      dataset: {
        source: [
          ['product', '2015', '2016'],
          ['Matcha Latte', 43.3, 85.8],
          ['Milk Tea', 83.1, 73.4],
          ['Cheese Cocoa', 86.4, 65.2],
          ['Walnut Brownie', 72.4, 53.9],
        ],
      },
      xAxis: { type: 'category' },
      yAxis: {},
      series: [{ type: 'bar' }, { type: 'bar' }],
    })
  }
  onMounted(() => {
    initRepairsCharts()
    initPollingCharts()
    initUpdateCharts()
  })
</script>

<template>
  <div class="searchContainer">
    <a-form label-width="100px" :model="form">
      <a-form-item label="创建时间">
        <a-date-picker
          v-model="form.time"
          type="date"
          placeholder="请选择时间"
          size="large"
        />
      </a-form-item>
    </a-form>
    <div style="margin-left: 10px">
      <a-space>
        <a-button type="primary">查询</a-button>
        <a-button>重置</a-button>
      </a-space>
    </div>
  </div>
  <a-divider style="margin: 10px 0" />
  <div class="useTimeContent">
    <a-card class="cardContainer">
      <template #header>
        <span>设备报修</span>
      </template>
      <div class="cardContent">
        <div id="repairsCharts" ref="myRef" class="chartsContainer"></div>
      </div>
    </a-card>
    <a-card class="cardContainer">
      <template #header>
        <span>设备巡检</span>
      </template>
      <div class="cardContent">
        <div id="pollingCharts" ref="myRef" class="chartsContainer"></div>
      </div>
    </a-card>
    <a-card class="cardContainer">
      <template #header>
        <span>设备整改</span>
      </template>
      <div class="cardContent">
        <div id="updateCharts" ref="myRef" class="chartsContainer"></div>
      </div>
    </a-card>
  </div>
</template>

<style scoped lang="less">
  .searchContainer {
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }

  .useTimeContent {
    box-sizing: border-box;
    height: calc(100% - 15% - 22px);
    padding-top: 10px;
    overflow: scroll;

    .cardContainer {
      margin: 10px;
    }

    .chartsContainer {
      width: 100%;
      height: 300px;
    }
  }
</style>
