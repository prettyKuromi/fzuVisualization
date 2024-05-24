<script setup>
import router from '@/router'
import { ref, onMounted } from 'vue'
import subjectRank from './components/subjectRank.vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const subject = ref('')
onMounted(() => {
  // 在组件创建时获取参数值
  subject.value = route.params.subject
  console.log(subject.value)
  console.log(router.params)
})

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
    <subjectRank class="subjectRank"></subjectRank>
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

.subjectRank {
  position: absolute;
  top: 140px;
}
</style>
