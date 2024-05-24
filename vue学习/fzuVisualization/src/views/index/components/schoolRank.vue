<script setup>
// 福州大学排名
const schoolRankOption = {
  title: {
    text: '福州大学排名变化（软科）',
    left: 'center', // 居中显示
    textStyle: {
      color: '#fff', // 设置标题颜色
      fontWeight: 'bold', // 设置标题粗细
      fontFamily: 'sans-serif' // 设置标题字体
    }
  },
  xAxis: {
    type: 'category',
    data: [2018, 2019, 2020, 2021, 2022, 2023],
    name: '年份',
    splitLine: {
      // 网格线
      show: false
    }
  },
  yAxis: {
    type: 'value',
    min: 60,
    max: 85
  },
  series: [
    {
      data: [67, 62, 76, 79, 72, 73],
      type: 'line', // 将图表类型设置为折线图
      symbol: 'circle', // 设置折线节点的样式
      symbolSize: 8, // 设置折线节点的大小
      lineStyle: {
        color: '#ff4500', // 设置折线颜色
        width: 2 // 设置折线宽度
      },
      itemStyle: {
        color: '#ff4500' // 设置折线节点的颜色
      },
      label: {
        show: true, // 显示数值标签
        position: 'top', // 数值标签位置,
        color: '#F6AD2E',
        fontWeight: 'bold',
        fontSize: '15px'
      }
    }
  ]
}
</script>

<template>
  <el-card class="performanceContainer">
    <div>
      <e-charts class="chart" :option="schoolRankOption" />
    </div>
  </el-card>
</template>

<style lang="scss" scoped>
.performanceContainer {
  height: 300px;
  width: 600px;
  color: #fff;
  margin: 20px;
  float: left;
  border: none;
  border-radius: 15px;
  box-sizing: border-box;
  background-color: #212130;
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
.chart {
  height: 300px;
}
</style>
