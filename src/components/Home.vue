<template>
  <el-container>
    <el-header class="bg-white flex justify-between items-center">
      <div class="flex item-center justify-between">
        <img src="../assets/logo.png" class="w-16 h-16 rounded p-1" />
        <span class="text-3xl mx-8 my-auto text-opacity-50">后台管理系统</span>
      </div>
      <el-button type="danger" @click="logout">退出</el-button>
    </el-header>
    <el-container class="h-screen">
      <el-aside
        :width="isCollapse ? '64px' : '220px'"
        style="background-color: #304156"
      >
        <div class="text-lg text-center cursor-pointer" @click="toggleCollapse">
          <i class="fa fa-align-justify"></i>
        </div>
        <el-menu
          background-color="#304156"
          text-color="#fff"
          active-text-color="#409EFF"
          unique-opened
          class="border-r-0"
          :collapse="isCollapse"
          :collapse-transition="false"
          :router="true"
          :default-active="activePath"
        >
          <!--一级菜单-->
          <el-submenu
            show-time="500"
            :index="'/' + menu.path"
            v-for="menu in menuList"
            :key="menu.id"
          >
            <!--一级菜单模板区-->
            <template slot="title">
              <i :class="iconsObj[menu.id]" class="ml-1"></i>
              <span class="ml-4">{{ menu.authName }}</span>
            </template>
            <!--二级菜单-->
            <el-menu-item
              @click="saveNavState('/' + secondMenu.path)"
              :index="'/' + secondMenu.path"
              v-for="secondMenu in menu.children"
              :key="secondMenu.id"
            >
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>{{ secondMenu.authName }}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main class="bg-gray-100">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      menuList: [],
      iconsObj: {
        125: 'fa fa-users',
        103: 'fa fa-unlock-alt',
        101: 'fa fa-shopping-bag',
        102: 'fa fa-shopping-cart',
        145: 'fa fa-line-chart',
      },
      isCollapse: false,
      activePath: '',
    }
  },
  created() {
    this.getMenuList()
    this.activePath = sessionStorage.getItem('activePath')
  },
  name: 'Home',
  methods: {
    logout() {
      this.$router.push('/login')
      window.sessionStorage.clear()
      
    },
    async getMenuList() {
      const { data: res } = await this.$http.get('menus')
      if (res.meta.status !== 200) return this.$message.error(res.meta.msg)
      this.menuList = res.data
      //console.log(res)
    },
    toggleCollapse() {
      this.isCollapse = !this.isCollapse
    },
    saveNavState(activePath) {
      sessionStorage.setItem('activePath', activePath)
      this.activePath = activePath
    },
  },
}
</script>

<style>
</style>