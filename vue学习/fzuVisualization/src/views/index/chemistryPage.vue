<script setup>
import router from '@/router'
import { ref } from 'vue'
import subjectRank from './components/subjectRank.vue'
import chemistryInf from './components/chemistryInf.vue'
import subjectQoute from './components/subjectQoute.vue'
import subjectThousand from './components/subjectThousand.vue'

const subject = ref('化学')

const onClickHeader = function () {
  router.push('visualization')
}
</script>

<template>
  <el-container style="position: relative">
    <div class="header" @click="onClickHeader">
      <img src="@/assets/school.png" alt="" class="img" />
      <div class="text">明德至诚 博学远志</div>
      <div class="title">福州大学学科情况可视化系统</div>
      <div class="subject">CHEMISTRY</div>
    </div>
    <chemistryInf class="subjectInf"></chemistryInf>
    <subjectRank class="subjectRank" :subject="subject"></subjectRank>
    <subjectQoute class="subjectQoute" :subject="subject"></subjectQoute>
    <subjectThousand
      class="subjectThousand"
      :subject="subject"
    ></subjectThousand>
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
  .subject {
    margin-left: 400px;
    font-size: 24px;
  }
}

.subjectInf {
  position: absolute;
  top: 120px;
}

.subjectRank {
  position: absolute;
  top: 450px;
}

.subjectQoute {
  position: absolute;
  top: 120px;
  left: 550px;
}

.subjectThousand {
  position: absolute;
  top: 120px;
  left: 1200px;
}
</style>
