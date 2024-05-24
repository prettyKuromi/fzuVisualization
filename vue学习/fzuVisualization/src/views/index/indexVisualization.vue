<script setup>
//首页
import schoolRank from './components/schoolRank.vue'
import lunboTu from './components/lunboTu.vue'
import schoolSun from './components/schoolSun.vue'
</script>

<template>
  <el-container style="position: relative">
    <div class="header">
      <img src="@/assets/school.png" alt="" class="img" />
      <div class="text">福州大学学科情况可视化系统</div>
    </div>
    <schoolRank class="schoolRank"></schoolRank>
    <lunboTu class="lunboTu"></lunboTu>
    <schoolSun class="schoolSun"></schoolSun>
  </el-container>
</template>

<style lang="scss" scoped>
.header {
  width: 600px;
  position: absolute;
  top: 0;
  left: 20px;
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
}

.schoolRank {
  position: absolute;
  top: 140px;
  left: 0;
}

.lunboTu {
  position: absolute;
  top: 480px;
  left: 0;
}

.schoolSun {
  position: absolute;
  top: 0;
  left: 700px;
}
</style>
