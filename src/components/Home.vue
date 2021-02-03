<template>
  <div>
  <el-button type="danger" @click='logout' plain>退出</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    logout () {
      // 销毁token
      window.sessionStorage.clear()
      // 跳转到登录页面
      this.$router.push("/login")
      this.$message.success('退出登录')
    }
  }
}
</script>

<style lang='less' scoped>

</style>
