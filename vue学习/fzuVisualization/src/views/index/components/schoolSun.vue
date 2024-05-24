<script setup>
import router from '@/router'

const subjects = [
  {
    name: 'CHEMISTRY',
    category: '理学'
  },
  {
    name: 'ENGINEERING',
    category: '工学'
  },
  {
    name: 'MATERIALS\nSCIENCE',
    category: '工学'
  },
  {
    name: 'COMPUTER\nSCIENCE',
    category: '工学'
  },
  {
    name: 'AGRICULTURAL\nSCIENCES',
    category: '农学'
  },
  {
    name: 'ENVIRONMENT/\nECOLOGY',
    category: '农学'
  },
  {
    name: 'PHYSICS',
    category: '理学'
  }
]

const categories = {
  理学: {
    name: '理学',
    children: []
  },
  工学: {
    name: '工学',
    children: []
  },
  农学: {
    name: '农学',
    children: []
  }
}

subjects.forEach((subject) => {
  categories[subject.category].children.push({ name: subject.name, value: 1 })
})

const sunburstData = Object.values(categories)

var option = {
  title: {
    text: '部分学科领域分类旭日图', // 设置标题内容
    textStyle: {
      fontSize: 30, // 标题字体大小
      fontWeight: 'bold', // 标题字体粗细
      color: '#fff'
    },
    left: 'center', // 标题水平居中
    top: '5%'
  },
  series: [
    {
      type: 'sunburst',
      data: sunburstData,
      label: {
        fontSize: 16 // 调整字体大小
      },
      color: ['#FFB6C1', '#90EE90', '#ADD8E6'] // 设置三个类别的颜色
    }
  ]
}

//点击旭日图
const onClickSun = function (params) {
  setTimeout(() => {
    // router.push(`/indexSubject?subject=${params.data.name}`)
    if (params.data.name == 'CHEMISTRY') {
      router.push({ path: '/chemistry' })
    } else if (params.data.name == 'ENGINEERING') {
      router.push({ path: '/engineer' })
    } else {
      router.push({ path: '/agricultuary' })
    }
  }, 500)
}
</script>

<template>
  <el-card class="performanceContainer">
    <div>
      <e-charts class="chart" :option="option" @click="onClickSun" />
    </div>
  </el-card>
</template>

<style lang="scss" scoped>
.performanceContainer {
  height: 780px;
  width: 860px;
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
  height: 800px;
}
</style>
