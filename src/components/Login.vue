<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头像 -->
      <div class="avatar_box">
        <img src="../assets/logo.png"
             alt=""/>
      </div>
      <!-- 表单 -->
      <el-form :model="loginForm"
               :rules="loginFormRules"
               label-width="80px"
               ref="loginRef"
               class="login_form">
        <el-form-item label="用户名" prop="username">
          <el-input placeholder="请输入用户名"
                    prefix-icon="el-icon-user"
                    v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码"
                      prop="password">
          <el-input placeholder="请输入密码"
                    prefix-icon="el-icon-lock"
                    v-model="loginForm.password"
                    show-password></el-input>
        </el-form-item>
        <el-form-item class="btns">
          <el-button type="primary" @click="loginSubmit">登录</el-button>
          <el-button type="info" @click="loginReset">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      loginFormRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    loginSubmit () {
      this.$refs.loginRef.validate(async valid => {
        if (!valid) return
        const { data: res } = await this.$http.post('login', this.loginForm)
        if (res.meta.status !== 200) return this.$message.error('登录失败:' + res.meta.msg)
        this.$message.success('登录成功！')
        console.log(res)
        window.sessionStorage.setItem('token', res.data.token)
        this.$router.push('/home')
      })
    },
    loginReset () {
      this.$refs.loginRef.resetFields()
    }
  }
}
</script>

<style scoped lang="less">
  .login_container {
    background-color: #2b4b6b;
    height: 100%;
  }

  .login_box {
    width: 450px;
    height: 300px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .avatar_box {
    height: 130px;
    width: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #eee;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;

    img {
      height: 100%;
      width: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }

  .login_form {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
    // border:2px solid red;
  }

  .btns {
    display: flex;
    justify-content: flex-end;
  }
</style>
