<script setup>
import router from '@/router'
import collegeMap from './components/collegeMap.vue'

const onClickHeader = function () {
  router.push('visualization')
}

const option = {
  title: {
    text: '计算机与大数据学院师资力量',
    left: 'center', // 居中显示
    textStyle: {
      color: '#fff', // 设置标题颜色
      fontWeight: 'bold', // 设置标题粗细
      fontFamily: 'sans-serif' // 设置标题字体
    }
  },
  xAxis: {
    type: 'category',
    data: ['教授', '副教授', '其他职称'],
    name: '职称',
    splitLine: {
      // 网格线
      show: false
    }
  },
  yAxis: {
    type: 'value',
    min: 10,
    max: 90
  },
  series: [
    {
      data: [28, 29, 81],
      type: 'bar', // 将图表类型设置为柱状图
      barMaxWidth: '50%', // 设置柱状图的最大宽度
      itemStyle: {
        color: '#ff4500', // 设置柱状图的颜色
        opacity: 0.8 // 设置柱状图的透明度
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

const option1 = {
  title: {
    text: '计算机与大数据学院学术报告情况统计',
    left: 'center', // 居中显示
    textStyle: {
      color: '#fff', // 设置标题颜色
      fontWeight: 'bold', // 设置标题粗细
      fontFamily: 'sans-serif' // 设置标题字体
    }
  },
  xAxis: {
    type: 'category',
    data: [
      '2021上半年',
      '2021下半年',
      '2022上半年',
      '2022下半年',
      '2023上半年',
      '2023下半年',
      '2024至今'
    ],
    name: '日期',
    splitLine: {
      // 网格线
      show: false
    }
  },
  yAxis: {
    type: 'value',
    min: 10,
    max: 40
  },
  series: [
    {
      data: [20, 16, 36, 33, 26, 24, 13],
      type: 'bar', // 将图表类型设置为柱状图
      barMaxWidth: '50%', // 设置柱状图的最大宽度
      itemStyle: {
        color: '#ff4500', // 设置柱状图的颜色
        opacity: 0.8 // 设置柱状图的透明度
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
  <el-container style="position: relative">
    <div class="header" @click="onClickHeader">
      <img src="@/assets/school.png" alt="" class="img" />
      <div class="text">明德至诚 博学远志</div>
      <div class="title">福州大学学科情况可视化系统</div>
      <div class="college">计算机与大数据学院/软件学院</div>
    </div>

    <!-- 学院简介 -->
    <el-card class="introduction">
      <img src="@/assets/计算机与大数据学院.jpg" alt="" class="img" />
      <div class="text">
        福州大学计算机与大数据学院/软件学院的前身为福州大学数学力学系，成立于1958年福州大学创建之时。1962年改名数学系。1977年设置应用数学、计算数学、计算机软件、计算机技术专业。1982年成立计算机科学系。2003年6月，为进一步秉承理工结合的办学特色，促进基础学科和应用学科互动发展，两系合并成立了数学与计算机科学学院。2009年10月，数学与计算机科学学院和软件学院进行实质性整合。2021年5月，为了适应当前学科发展的需求，撤销数学与计算机科学学院，成立了计算机与大数据学院。六十多来，学院为国家和地区输送了大量专业人才，涌现了以中国科学院软件研究所林惠民院士等为代表的一批国内外知名学者。
      </div>
    </el-card>

    <!-- 师资力量 -->
    <el-card class="teacher">
      <div>
        <e-charts class="chart" :option="option" />
      </div>
    </el-card>
    <!-- 学术报告 -->
    <el-card class="report">
      <div>
        <e-charts class="chart" :option="option1" />
      </div>
    </el-card>
    <collegeMap class="collegeMap"></collegeMap>
  </el-container>
</template>

<style lang="scss" scoped>
.header {
  width: 1600px;
  position: absolute;
  top: 0;
  left: 60px;
  background-color: #212130;
  display: flex;
  align-items: center;
  height: 120px;
  color: #fff;
  border-radius: 10px;
  border: 2px solid #f6ad2e;
  box-sizing: border-box;
  .img {
    height: 100px;
    width: 100px;
    margin-left: 60px;
  }
  .text {
    font-size: 24px;
    margin-left: 30px;
    font-weight: bold;
  }
  .title {
    font-size: 24px;
    margin-left: 250px;
    font-weight: bold;
  }
  .college {
    margin-left: 200px;
    font-size: 24px;
  }
}

.introduction {
  height: 600px;
  width: 500px;
  color: #fff;
  margin: 20px;
  float: left;
  border: none;
  border-radius: 15px;
  box-sizing: border-box;
  position: absolute;
  top: 120px;
  background-color: #212130;
  .img {
    height: 220px;
    width: 500px;
  }
  .text {
    margin-top: 20px;
    font-size: 18px;
  }
}

.teacher {
  height: 300px;
  width: 500px;
  color: #fff;
  margin: 20px;
  float: left;
  border: none;
  border-radius: 15px;
  box-sizing: border-box;
  position: absolute;
  left: 550px;
  position: absolute;
  top: 120px;
  background-color: #212130;
  .chart {
    height: 300px;
  }
}

.report {
  height: 300px;
  width: 500px;
  color: #fff;
  margin: 20px;
  float: left;
  border: none;
  border-radius: 15px;
  box-sizing: border-box;
  position: absolute;
  left: 550px;
  position: absolute;
  top: 430px;
  background-color: #212130;
  .chart {
    height: 300px;
  }
}

.collegeMap {
  position: absolute;
  top: 300px;
  left: 1100px;
}
</style>
