<template>
  <div>
    <el-row>
      <el-col :span="6" :offset="9" id="login-center">
        <el-card id="login-card">
          <el-col :span="20" :offset="2" id="login-col">
            <h2>后台管理系统</h2>

            <el-form :model="form" :rules="rules" ref="form">
              <el-form-item prop="username">
                <el-input
                  prefix-icon="el-icon-user-solid"
                  type="text"
                  v-model="form.username"
                  placeholder="请输入手机号码"
                ></el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input type="text" show-password v-model="form.password" placeholder="密码">
                  <i slot="prefix" class="icon iconfont icon-mima" style="padding-left:3px"></i>
                </el-input>
              </el-form-item>
              <el-button class="login-button" type="primary" @click="submitInfo">登录</el-button>
            </el-form>
          </el-col>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { validatePhone } from '@/regular/validate'
export default {
  name: 'Login',
  data () {
    return {
      form: { username: '', password: '' },
      rules: {
        username: [{required: true, message: '请输入手机号码', trigger: 'blur'}, {validator: validatePhone, trigger: 'blur'}]
      }
    }
  }
}
</script>

<style scoped>
#login-center {
  border-radius: 5px;
  padding: 20px 0 0 0;
  margin-top: 50px;
}
#login-card {
  height: 350px;
}
#login-col {
  margin-top: 10px;
}
.login-button {
  margin-bottom: 20px;
  width: 100%;
}
</style>
