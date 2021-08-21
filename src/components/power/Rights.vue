<template>
  <div>
    <el-card class="box-card">
      <el-breadcrumb separator-class="el-icon-arrow-right" class="text-base">
        <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>权限管理</el-breadcrumb-item>
        <el-breadcrumb-item>权限列表</el-breadcrumb-item>
      </el-breadcrumb>

      <el-table
        height="600"
        :data="rightsList"
        stripe
        border
        class="mt-8"
      >
        <el-table-column type="index" label="编号" width="80">
        </el-table-column>
        <el-table-column prop="authName" label="权限名称" width="500">
        </el-table-column>
        <el-table-column prop="path" label="路径" width="500"> </el-table-column>
        <el-table-column label="权限等级" width="500">
          <template slot-scope="scope">
            <el-tag v-if="scope.row.level === '0'">一级</el-tag>
            <el-tag type="success" v-else-if="scope.row.level === '1'"
              >二级</el-tag
            >
            <el-tag type="danger" v-else>三级</el-tag>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Rights',
  data() {
    return {
      rightsList: [],
    }
  },
  mounted() {
    this.getRightsList()
  },
  methods: {
    async getRightsList() {
      const { data: res } = await this.$http.get('rights/list')
      //console.log(res)
      if (res.meta.status !== 200)
        return this.$message.error('获取权限列表失败')
      this.$message.success(res.meta.msg)
      this.rightsList = res.data
    },
  },
}
</script>

<style>
</style>