<script setup></script>

<template>
  <el-container class="layout-container">
    <el-container>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer
        >福州大学学科情况可视化系统 ©2024 Created by 陈的五次方</el-footer
      >
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
.layout-container {
  height: 100vh;
}

.el-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #666;
}
</style>
