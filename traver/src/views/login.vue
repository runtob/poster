<template>
    <div>
        <div class="login">
               <p class="login_for">登录</p>
               <el-input v-model="username" placeholder="请输入内容" style="margin-top:10px"></el-input>
               <el-input v-model="password" placeholder="请输入内容" style="margin-top:10px"></el-input>
               <el-button  style="margin-top:10px" @click="btn">成功按钮</el-button>
        </div>
    </div>
</template>
<script>
import index from "@/assets/ajax.js"
export default {
    name:"login",
    data() {
    return {
      username: '',
      password: '',
    }
  },
  methods:{
      btn:function(){
        //   var data="id="+this.username+"&"+"password="+this.password;
          var self=this
          var data={
              id:self.username,
              password:self.password
          }
            data=JSON.stringify(data)
            index.ajax("http://127.0.0.1:3000/login",data,"POST",function(result){
            self.$emit("handmsg",result.id)
         })
                    
          }
      }
}
</script>
<style>
.login{
    position: absolute;
    width: 15%;
    height: 200px;
    top:500px;
    left: 75%;
    border: 1px solid orange;
    text-align: center
}
.login_for{
    height: 20px;
    margin-top: 10px;
}
</style>

