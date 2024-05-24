<script setup>
// 学科排名

//排名数据
const rankData = [
  {
    subject: '化学',
    rank: [68, 70, 66, 65, 65, 64]
  },
  {
    subject: '工程',
    rank: [277, 279, 267, 262, 258, 249]
  },
  {
    subjct: '农学',
    rank: [589, 573, 555, 551, 542, 536]
  }
]

//接收组件传参
const props = defineProps({
  subject: {
    type: String
  }
})

var num = 0
var min = 0
var max = 0
if (props.subject == '化学') {
  num = 0
  min = 60
  max = 75
} else if (props.subject == '工程') {
  num = 1
  min = 245
  max = 280
} else {
  num = 2
  min = 530
  max = 590
}

const subjectRankOption = {
  title: {
    text: '学科国际排名变化',
    left: 'center', // 居中显示
    textStyle: {
      color: '#fff', // 设置标题颜色
      fontWeight: 'bold', // 设置标题粗细
      fontFamily: 'sans-serif' // 设置标题字体
    }
  },
  xAxis: {
    type: 'category',
    data: ['Jan-23', 'Mar-23', 'May-23', 'Jul-23', 'Sep-23', 'Nov-23'],
    name: '月份',
    splitLine: {
      // 网格线
      show: false
    }
  },
  yAxis: {
    type: 'value',
    min: min,
    max: max
  },
  series: [
    {
      data: rankData[num].rank,
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
      <e-charts class="chart" :option="subjectRankOption" />
    </div>
  </el-card>
</template>

<style lang="scss" scoped>
.performanceContainer {
  height: 300px;
  width: 500px;
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
