<script setup>
import router from '@/router'
import collegeMap from './components/collegeMap.vue'
import { ref } from 'vue'

const onClickHeader = function () {
  router.push('visualization')
}

const option = {
  title: {
    text: '物理与信息工程学院师资力量',
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
    min: 30,
    max: 90
  },
  series: [
    {
      data: [42, 83, 86],
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
    min: 0,
    max: 30
  },
  series: [
    {
      data: [5, 8, 7, 10, 24, 27, 11],
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
      <div class="college">物理与信息工程学院</div>
    </div>

    <!-- 学院简介 -->
    <el-card class="introduction">
      <img
        src="@/assets/物信.jpg"
        alt=""
        style="height: 200px; margin-left: 70px"
      />
      <div class="text">
        学院成立于2003年，由原信息与通信工程系和电子科学与应用物理系合并而成。两个系的前身分别为无线电工程系和物理学系，均为福州大学建校初期设立，已有60多年办学历史。
      </div>
      <div class="text">
        学院现有7个系（通信工程系、电子信息工程系、电子科学与技术系、光电信息工程系、微电子系、物理学系、数字媒体与网络工程系），9个本科专业（通信工程、电子信息工程、电子科学与技术、光电信息工程、微电子、应用物理学、数字媒体技术、物联网工程专业和集成电路设计与系统集成专业）和1个数理综合班，其中国家一流建设专业5个（电子科学与技术、应用物理学、微电子科学与工程、通信工程、物联网工程），福建省一流建设专业2个（数字媒体技术、集成电路与系统集成），通过教育部工程教育专业认证专业1个（电子科学与技术）；
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
