<script setup>
//轮播图介绍学科情况
import { ref } from 'vue'
import computerImage from '@/assets/计算机.png'
import mathImage from '@/assets/数学.png'
import physicsImage from '@/assets/物理.png'
import mechanicalImage from '@/assets/机械.png'
import languageImage from '@/assets/外国语.png'
import router from '@/router'
const collegeData = ref([
  {
    name: '计算机与大数据学院/软件学院',
    img: computerImage
  },
  {
    name: '数学与统计学院',
    img: mathImage
  },
  {
    name: '物理与信息工程学院',
    img: physicsImage
  },
  {
    name: '机械工程及自动化学院',
    img: mechanicalImage
  },
  {
    name: '外国语学院',
    img: languageImage
  }
])

const onClickCollege = function () {
  router.push({ path: '/college' })
}
</script>

<template>
  <el-card class="performanceContainer">
    <el-carousel height="280px">
      <el-carousel-item
        v-for="item in collegeData"
        :key="item.name"
        @click="onClickCollege"
      >
        <div class="name">{{ item.name }}</div>
        <img :src="item.img" alt="" class="img" />
      </el-carousel-item>
    </el-carousel>
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

.name {
  font-size: 20px;
  font-weight: bold;
}

.img {
  margin-top: 5px;
  height: 220px;
  width: 500px;
  margin-left: 20px;
}
</style>
