<script setup>
// 论文引用

//接收组件传参
const props = defineProps({
  subject: {
    type: String
  }
})

//化学学科
const option1 = {
  title: {
    text: 'CHEMISTRY 学科论文情况分析 - 平行坐标图',
    left: 'center', // 居中显示
    textStyle: {
      color: 'black', // 设置标题颜色
      fontWeight: 'bold', // 设置标题粗细
      fontFamily: 'sans-serif', // 设置标题字体
      fontSize: 20
    }
  },
  parallelAxis: [
    { dim: 0, name: '论文数', min: 6000, max: 6900 },
    { dim: 1, name: '被引频次', min: 170000, max: 210000 },
    { dim: 2, name: '高被引论文数', min: 240, max: 270 },
    { dim: 3, name: '热点论文数', min: 3, max: 14 }
  ],
  parallel: {
    left: '5%',
    right: '13%',
    bottom: '10%',
    top: '22%',
    parallelAxisDefault: {
      type: 'value'
    }
  },
  legend: {
    data: ['Jan-23', 'Mar-23', 'May-23', 'Jul-23', 'Sep-23', 'Nov-23'],
    // 设置图例的显示文本

    top: '7%',
    right: '5%',
    textStyle: {
      color: 'black', // 设置标题文字颜色为白色
      fontSize: 16
    }
  },
  series: [
    {
      name: 'Jan-23', // 设置第一个数据系列的名称
      type: 'parallel',
      data: [[6036, 173233, 243, 7]],
      lineStyle: {
        width: 4, // 调整折线的宽度
        color: '#8AB8C5'
      },
      label: {
        show: true,
        formatter: function (params) {
          return params.value
        },
        color: '#ffffff'
      }
    },
    {
      name: 'Mar-23', // 设置第二个数据系列的名称
      type: 'parallel',
      data: [[6215, 180485, 251, 6]],
      lineStyle: {
        width: 4, // 调整折线的宽度
        color: '#FFA500'
      },
      label: {
        show: true,
        formatter: function (params) {
          return params.value
        },
        color: '#ffffff'
      }
    },
    {
      name: 'May-23', // 设置第三个数据系列的名称
      type: 'parallel',
      data: [[6383, 188638, 248, 9]],
      lineStyle: {
        width: 4, // 调整折线的宽度
        color: '#90EE90'
      },
      label: {
        show: true,
        formatter: function (params) {
          return params.value
        },
        color: '#ffffff',
        fontSize: '15px'
      }
    },
    {
      name: 'Jul-23', // 设置第四个数据系列的名称
      type: 'parallel',
      data: [[6490, 193142, 251, 8]],
      lineStyle: {
        width: 4, // 调整折线的宽度
        color: '#FF4500'
      },
      label: {
        show: true,
        formatter: function (params) {
          return params.value
        },
        color: '#ffffff',
        fontSize: '15px'
      }
    },
    {
      name: 'Sep-23', // 设置第五个数据系列的名称
      type: 'parallel',
      data: [[6642, 200515, 251, 4]],
      lineStyle: {
        width: 4, // 调整折线的宽度
        color: '#008C8C'
      },
      label: {
        show: true,
        formatter: function (params) {
          return params.value
        },
        color: '#ffffff',
        fontSize: '15px'
      }
    },
    {
      name: 'Nov-23', // 设置第六个数据系列的名称
      type: 'parallel',
      data: [[6803, 208181, 265, 12]],
      lineStyle: {
        width: 4, // 调整折线的宽度
        color: '#000000'
      },
      label: {
        show: true,
        formatter: function (params) {
          return params.value
        },
        color: '#ffffff',
        fontSize: '15px'
      }
    }
  ]
}

//工程学科
//ENGINEERING
//ENGINEERING
const option2 = {
  title: {
    text: 'ENGINEERING 学科论文情况分析 - 平行坐标图',
    left: 'center', // 居中显示
    textStyle: {
      color: 'black', // 设置标题颜色
      fontWeight: 'bold', // 设置标题粗细
      fontFamily: 'sans-serif', // 设置标题字体
      fontSize: 20
    }
  },
  parallelAxis: [
    { dim: 0, name: '论文数', min: 3500, max: 4500 },
    { dim: 1, name: '被引频次', min: 40000, max: 60000 },
    { dim: 2, name: '高被引论文数', min: 65, max: 80 },
    { dim: 3, name: '热点论文数', min: 0, max: 4 }
  ],
  parallel: {
    left: '5%',
    right: '13%',
    bottom: '10%',
    top: '22%',
    parallelAxisDefault: {
      type: 'value'
    }
  },
  legend: {
    data: ['Jan-23', 'Mar-23', 'May-23', 'Jul-23', 'Sep-23', 'Nov-23'],
    // 设置图例的显示文本

    top: '7%',
    right: '5%',
    textStyle: {
      color: 'black', // 设置标题文字颜色为白色
      fontSize: 16
    }
  },
  series: [
    {
      name: 'Jan-23', // 设置第一个数据系列的名称
      type: 'parallel',
      data: [[3594, 41295, 66, 2]],
      lineStyle: {
        width: 4, // 调整折线的宽度
        color: '#8AB8C5'
      },
      label: {
        show: true,
        formatter: function (params) {
          return params.value
        },
        color: '#ffffff'
      }
    },
    {
      name: 'Mar-23', // 设置第二个数据系列的名称
      type: 'parallel',
      data: [[3742, 44142, 69, 2]],
      lineStyle: {
        width: 4, // 调整折线的宽度
        color: '#FFA500'
      },
      label: {
        show: true,
        formatter: function (params) {
          return params.value
        },
        color: '#ffffff'
      }
    },
    {
      name: 'May-23', // 设置第三个数据系列的名称
      type: 'parallel',
      data: [[3941, 47692, 75, 2]],
      lineStyle: {
        width: 4, // 调整折线的宽度
        color: '#90EE90'
      },
      label: {
        show: true,
        formatter: function (params) {
          return params.value
        },
        color: '#ffffff',
        fontSize: '15px'
      }
    },
    {
      name: 'Jul-23', // 设置第四个数据系列的名称
      type: 'parallel',
      data: [[4046, 49570, 74, 1]],
      lineStyle: {
        width: 4, // 调整折线的宽度
        color: '#FF4500'
      },
      label: {
        show: true,
        formatter: function (params) {
          return params.value
        },
        color: '#ffffff',
        fontSize: '15px'
      }
    },
    {
      name: 'Sep-23', // 设置第五个数据系列的名称
      type: 'parallel',
      data: [[4228, 52850, 76, 2]],
      lineStyle: {
        width: 4, // 调整折线的宽度
        color: '#008C8C'
      },
      label: {
        show: true,
        formatter: function (params) {
          return params.value
        },
        color: '#ffffff',
        fontSize: '15px'
      }
    },
    {
      name: 'Nov-23', // 设置第六个数据系列的名称
      type: 'parallel',
      data: [[4404, 56519, 79, 2]],
      lineStyle: {
        width: 4, // 调整折线的宽度
        color: '#000000'
      },
      label: {
        show: true,
        formatter: function (params) {
          return params.value
        },
        color: '#ffffff',
        fontSize: '15px'
      }
    }
  ]
}

//农学学科

//AGRICULTURAL SCIENCES
const option3 = {
  title: {
    text: 'AGRICULTURAL SCIENCES 学科论文情况分析 - 平行坐标图',
    left: 'center', // 居中显示
    textStyle: {
      color: 'black', // 设置标题颜色
      fontWeight: 'bold', // 设置标题粗细
      fontFamily: 'sans-serif', // 设置标题字体
      fontSize: 20
    }
  },
  parallelAxis: [
    { dim: 0, name: '论文数', min: 400, max: 500 },
    { dim: 1, name: '被引频次', min: 6500, max: 10000 },
    { dim: 2, name: '高被引论文数', min: 8, max: 18 },
    { dim: 3, name: '热点论文数', min: 0, max: 3 }
  ],
  parallel: {
    left: '5%',
    right: '13%',
    bottom: '10%',
    top: '22%',
    parallelAxisDefault: {
      type: 'value'
    }
  },
  legend: {
    data: ['Jan-23', 'Mar-23', 'May-23', 'Jul-23', 'Sep-23', 'Nov-23'],
    // 设置图例的显示文本

    top: '7%',
    right: '5%',
    textStyle: {
      color: 'black', // 设置标题文字颜色为白色
      fontSize: 16
    }
  },
  series: [
    {
      name: 'Jan-23', // 设置第一个数据系列的名称
      type: 'parallel',
      data: [[413, 6910, 11, 0]],
      lineStyle: {
        width: 4, // 调整折线的宽度
        color: '#8AB8C5'
      },
      label: {
        show: true,
        formatter: function (params) {
          return params.value
        },
        color: '#ffffff'
      }
    },
    {
      name: 'Mar-23', // 设置第二个数据系列的名称
      type: 'parallel',
      data: [[430, 7494, 12, 1]],
      lineStyle: {
        width: 4, // 调整折线的宽度
        color: '#FFA500'
      },
      label: {
        show: true,
        formatter: function (params) {
          return params.value
        },
        color: '#ffffff'
      }
    },
    {
      name: 'May-23', // 设置第三个数据系列的名称
      type: 'parallel',
      data: [[439, 7989, 9, 0]],
      lineStyle: {
        width: 4, // 调整折线的宽度
        color: '#90EE90'
      },
      label: {
        show: true,
        formatter: function (params) {
          return params.value
        },
        color: '#ffffff',
        fontSize: '15px'
      }
    },
    {
      name: 'Jul-23', // 设置第四个数据系列的名称
      type: 'parallel',
      data: [[447, 8322, 11, 1]],
      lineStyle: {
        width: 4, // 调整折线的宽度
        color: '#FF4500'
      },
      label: {
        show: true,
        formatter: function (params) {
          return params.value
        },
        color: '#ffffff',
        fontSize: '15px'
      }
    },
    {
      name: 'Sep-23', // 设置第五个数据系列的名称
      type: 'parallel',
      data: [[465, 8862, 14, 2]],
      lineStyle: {
        width: 4, // 调整折线的宽度
        color: '#008C8C'
      },
      label: {
        show: true,
        formatter: function (params) {
          return params.value
        },
        color: '#ffffff',
        fontSize: '15px'
      }
    },
    {
      name: 'Nov-23', // 设置第六个数据系列的名称
      type: 'parallel',
      data: [[485, 9406, 16, 2]],
      lineStyle: {
        width: 4, // 调整折线的宽度
        color: '#000000'
      },
      label: {
        show: true,
        formatter: function (params) {
          return params.value
        },
        color: '#ffffff',
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
  width: 600px;
  color: #fff;
  margin: 20px;
  float: left;
  border: none;
  border-radius: 15px;
  box-sizing: border-box;
  background-color: #ededed;
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
