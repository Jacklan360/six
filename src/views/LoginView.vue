<template>
  <div class="login">
    <h2>系统管理登录</h2>
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      status-icon
      :rules="rules"
      label-width="70px"
      class="demo-ruleForm"
    >
      <el-form-item label="账号" prop="pass">
        <el-input v-model="loginData.name" type="password" placeholder="输入账号" />
      </el-form-item>
      <el-form-item label="密码" prop="checkPass">
        <el-input
          v-model="loginData.password"
          type="password"
          placeholder="请输入密码"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)"
        >Submit</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  import { reactive } from 'vue'
  import { getData } from "../http/aip"
  import { ElMessage } from 'element-plus'
  import router from "../router/index.js";
  export default {
    name: 'LoginView',
    setup() {
      let loginData = reactive({
        name: '',
        password: ''
      })

      let submitForm = () => {
        if(!loginData.name || !loginData.password){
          ElMessage.error('请输入账号和密码')
        } else {
          getData.then(res => {
            if(res.result){
              router.push('/home')
            }
          })
        }
      }
      return {
        loginData,
        submitForm
      }
    }
  }
</script>
<style>
  .login{
    width: 500px;
    border: 1px solid #ddd;
    padding: 30px;
    margin: 0 auto;
    margin-top: 15%;
  }
</style>
