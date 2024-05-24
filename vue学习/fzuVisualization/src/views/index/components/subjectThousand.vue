<script setup>
// 论文引用

//接收组件传参
const props = defineProps({
  subject: {
    type: String
  }
})

const option1 = {
  title: {
    text: 'CHEMISTRY 学科千分位变化',
    left: 'center', // 居中显示
    textStyle: {
      color: '#fff', // 设置标题颜色
      fontWeight: 'bold', // 设置标题粗细
      fontFamily: 'sans-serif' // 设置标题字体
    }
  },
  xAxis: {
    type: 'value',
    name: '',
    splitLine: {
      // 网格线
      show: false
    },
    min: 0.3,
    max: 0.4
  },
  yAxis: {
    type: 'category',
    data: ['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Nov'],
    name: '月份'
  },
  series: [
    {
      data: [0.39, 0.39, 0.36, 0.35, 0.34, 0.33],
      type: 'bar', // 将图表类型设置为柱状图
      barWidth: 20, // 设置柱状图的宽度
      itemStyle: {
        color: '#ff4500' // 设置柱状图的颜色
      },
      label: {
        show: true, // 显示数值标签
        position: 'right', // 数值标签位置,
        color: '#F6AD2E',
        fontWeight: 'bold',
        fontSize: '15px'
      }
    }
  ]
}

const option2 = {
  title: {
    text: 'ENGINEERING 学科千分位变化',
    left: 'center', // 居中显示
    textStyle: {
      color: '#fff', // 设置标题颜色
      fontWeight: 'bold', // 设置标题粗细
      fontFamily: 'sans-serif' // 设置标题字体
    }
  },
  xAxis: {
    type: 'value',
    name: '',
    splitLine: {
      // 网格线
      show: false
    },
    min: 1,
    max: 1.3
  },
  yAxis: {
    type: 'category',
    data: ['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Nov'],
    name: '月份'
  },
  series: [
    {
      data: [1.27, 1.24, 1.16, 1.12, 1.08, 1.02],
      type: 'bar', // 将图表类型设置为柱状图
      barWidth: 20, // 设置柱状图的宽度
      itemStyle: {
        color: '#ff4500' // 设置柱状图的颜色
      },
      label: {
        show: true, // 显示数值标签
        position: 'right', // 数值标签位置,
        color: '#F6AD2E',
        fontWeight: 'bold',
        fontSize: '15px'
      }
    }
  ]
}

const option3 = {
  title: {
    text: 'AGRICULTURAL SCIENCES 学科千分位变化',
    left: 'center', // 居中显示
    textStyle: {
      color: '#fff', // 设置标题颜色
      fontWeight: 'bold', // 设置标题粗细
      fontFamily: 'sans-serif' // 设置标题字体
    }
  },
  xAxis: {
    type: 'value',
    name: '',
    splitLine: {
      // 网格线
      show: false
    },
    min: 4,
    max: 5.5
  },
  yAxis: {
    type: 'category',
    data: ['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Nov'],
    name: '月份'
  },
  series: [
    {
      data: [5.23, 4.97, 4.71, 4.6, 4.44, 4.3],
      type: 'bar', // 将图表类型设置为柱状图
      barWidth: 20, // 设置柱状图的宽度
      itemStyle: {
        color: '#ff4500' // 设置柱状图的颜色
      },
      label: {
        show: true, // 显示数值标签
        position: 'right', // 数值标签位置,
        color: '#F6AD2E',
        fontWeight: 'bold',
        fontSize: '15px'
      }
    }
  ]
}

var option = {}
if (props.subject == '化学') {
  option = option1
} else if (props.subject == '工程') {
  option = option2
} else {
  option = option3
}
</script>

<template>
  <el-card class="performanceContainer">
    <div>
      <e-charts class="chart" :option="option" />
    </div>
  </el-card>
</template>

<style lang="scss" scoped>
.performanceContainer {
  height: 640px;
  width: 400px;
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
  height: 600px;
}
</style>
