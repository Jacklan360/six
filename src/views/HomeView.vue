<template>
  <div class="home">
    <el-container>
      <el-header class="top-box">
        <el-row :gutter="24">
          <el-col :span="18">
            <img src="../assets/logo.png" class="logo" alt="">
          </el-col>
          <el-col :span="6">
            <div class="info-box">
              <span>Jack</span>
              <el-botton class="out-btn" type="text">退出</el-botton>
            </div>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            router="true"
            class="el-menu-vertical-demo">
            <el-menu-item :route="i" v-for="i in tablist" :key="i.name" :index="i.name">
              <template #title>{{i.meta.title}}</template>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import router from "../router/index"
export default {
  name: 'HomeView',
  setup(){
    let tablist = router.options.routes[0].children
    return {
      tablist
    }
  }
}
</script>

<style lang="scss" scoped>
.top-box{
  background-color: #efefef;
  padding: 5px;
  .logo{
    width: 50px;
    display: flex;
    justify-items: left;
  }
  .info-box{
    text-align: right;
    line-height: 3;
  }
  .out-btn{
    margin-left: 10px;
    &:hover{
      cursor: pointer;
      color: #2b93d2;
    }

  }
  /*.out-btn:hover{*/
     /*cursor: pointer;*/
     /*color: #2b93d2;*/
   /*}*/
}
</style>
