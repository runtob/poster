<template>
    <div class="fenlei">
           <el-container>
               <el-aside width="170px">
                    <el-button @click="typele">按文章类型进行分类</el-button> <br>
                     <el-button style="margin-top:5px" @click="time">按时间类型进行分类</el-button>
               </el-aside>
                <el-main class="main">
                     <table style="width:70%;height:80px;margin-top:-20px">
                         <tr style="height:30px">
                            <td style="width:10%" v-for="(item,index) in typedata.slice(0,6)" :key="index" @mouseover="yanshi($event)" class="td_form">{{item}}</td>
                         </tr>
                         <tr style="height:30px;margin-top:20px">
                            <td style="width:10%" v-for="(itam,index) in typedata.slice(6)" :key="index" @mouseover="yanshi($event)" class="td_form">{{itam}}</td>
                            
                         </tr>
                     </table>
                </el-main>
            </el-container>
    </div>
</template>
<script>
export default {
    name:"fenlen",
    data(){
        return{
            typedata:["Html","JS","Css","AjaX","Node.js","Vue","React.js","VueX","Express","Koa"],
        }
    },
    methods:{
        typele:function(){
            this.typedata=["Html","JS","Css","AjaX","Node.js","Vue","React.js","VueX","Express","Koa"];
        },
        time:function(){
               this.typedata=["2013","2014","2015","2016","2017","2018","2019","2020","2021","2022"];
        },
        yanshi:function(e){
            var obj=document.getElementsByClassName("td_form");
            for(var i=0;i<obj.length;i++){
                obj[i].style.color=""
            }
             e.target.style.color="orange";
             e.target.style.cursor="pointer"
        },
    }
}
</script>
<style>
.el-aside {
    color: #333;
    height: 85px;
  }  
  .el-main {
    color: #333;
    height: 85px;
    overflow-y: hidden;
  }
  .fenlei{
      width: 73.2%;
      margin-left: 13.4%;
  }
  .el-container{
      margin: 0 auto;
  }
  table{
    border: 1px solid black;
    border-color: rgba(0, 0, 0, 0.5);
    border-radius: 5px 5px 5px 5px;
  }
</style>


