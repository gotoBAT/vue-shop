<template>
  <div>
    <el-button type="danger" @click="logout">退出</el-button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    logout() {
      this.$router.push('/login')
      window.sessionStorage.clear()
    },
  },
}
</script>

<style>
</style>