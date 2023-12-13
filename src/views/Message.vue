<template id="temp">
  <!-- vue实例外创建 -->
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span class="span">我的信息</span>
      </div>
      <el-row>
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <span>用户账号</span> <span></span>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple-light">
            <span>用户名称</span><span></span>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <div class="grid-content bg-purple"><span>性别</span><span></span></div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple-light"><span>类型</span><span></span></div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <div class="grid-content bg-purple"><span>联系方式</span><span></span></div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple-light"><span>邮箱</span><span></span></div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <div class="grid-content bg-purple"><span>生效日期</span><span></span></div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple-light"><span>详细住址</span><span></span></div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <div class="grid-content bg-purple"><span>我的车位</span><span></span></div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple-light"><span>计费状态</span><span></span></div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>
<script>
import {GetUser} from '../api/user'
export default  {
  data(){
    return{

    }
  },
  methods:{
    async GetUsers(){
      let res = await GetUser()
      console.log(res);
    }
  },
  mounted(){
    this.GetUsers()
  }
};

</script>
<style scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}

.box-card {
  width: 100%;
}

.span {
  color: #409eff;
}
.grid-content {
  margin: 10px;
}
</style>