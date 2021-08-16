<template>
  <div
    class="
      bg-blue-300
      text-xl text-center
      h-screen
      flex flex-col
      items-center
      justify-center
    "
  >
    <div
      class="
        flex flex-col
        sm:w-3/4
        sm:mx-0
        md:w-3/4
        lg:w-1/4
        bg-white
        rounded-lg
        p-4
      "
      style="height: 400px"
    >
      <!--头像区域-->
      <div class="avatar_box mx-auto -my-20 shadow-md">
        <img src="../assets/logo.png" />
      </div>
      <div class="w-full mt-32">
        <el-form
          class="form-horizontal w-3/4 mx-auto"
          :model="loginForm"
          :rules="rules"
          ref="loginFormRef"
        >
          <!--用户名-->
          <div class="mt-4">
            <el-form-item prop="username">
              <el-input
                prefix-icon="fa fa-user fa-lg"
                v-model="loginForm.username"
              ></el-input>
            </el-form-item>
          </div>

          <!--密码-->
          <div class="mt-8">
            <el-form-item prop="password">
              <el-input
                prefix-icon="fa fa-lock fa-lg"
                v-model="loginForm.password"
                type="password"
              ></el-input>
            </el-form-item>
          </div>

          <div class="mt-8">
            <el-form-item>
              <el-button type="primary" @click="submitForm">登录</el-button>
              <el-button type="info" @click="resetForm">重置</el-button>
            </el-form-item>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        username: 'admin',
        password: '123456',
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          {
            min: 2,
            max: 10,
            message: '长度在 2 到 10 个字符',
            trigger: 'blur',
          },
        ],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
      },
    }
  },
  methods: {
    submitForm() {
      // 表单预验证
      // valid：bool类型
      this.$refs.loginFormRef.validate(async (valid) => {
        // console.log(valid)
        if (!valid) return false
        // this.$http.post('login', this.loginForm): 返回值为promise
        // 返回值为promise，可加await简化操作 相应的也要加async
        const { data: res } = await this.$http.post('login', this.loginForm)
        // console.log(res)
        if (res.meta.status !== 200) return this.$message.error('登录失败')
        this.$message.success('登录成功')
        // 1、将登陆成功之后的token, 保存到客户端的sessionStorage中; localStorage中是持久化的保存
        //   1.1 项目中出现了登录之外的其他API接口，必须在登陆之后才能访问
        //   1.2 token 只应在当前网站打开期间生效，所以将token保存在sessionStorage中
        window.sessionStorage.setItem('token', res.data.token)
        // 2、通过编程式导航跳转到后台主页, 路由地址为：/home
        this.$router.push('/home')
      })
    },
    resetForm() {
      this.$refs.loginFormRef.resetFields()
    },
  },
  mounted() {
    console.log(this.$router)
  },
}
</script>

<style lang="less" scoped>
.avatar_box {
  height: 160px;
  width: 160px;
  border: 1px solid #eee;
  border-radius: 50%;
  padding: 10px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #eee;
  }
}
</style>