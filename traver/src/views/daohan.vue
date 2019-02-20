<template>
<div id="bbb">
     <div class="back">
         <div class="mark">
          <i class="tubiao" style="color:orange">Pre</i>
          <i class="son" style="color:orange">son</i>
          <i class="tubiao">blog</i>
        </div>
         <div class="title_b">
             <p  :class="title_form" @click="dian($event)" v-on:click="urlt($event,0)">{{title.id}}</p>
             <p  :class="title_form" @click="dian($event)" v-on:click="urlt($event,1)">{{title.id1}}</p>
             <p  :class="title_form" @click="dian($event)">{{title.id3}}</p>
             <p  :class="title_form" @click="dian($event)">{{title.id5}}</p>
         </div>
         <div class="loginuser">
             <img class="userimg" src="/static/destination-1.jpg"/>
             <p class="username">{{id}}</p>
         </div>
     </div>
     <router-view/>
</div>  
</template>
<script>
window.onscroll=function(){
     var obj=document.getElementsByClassName("back")[0];
     var mark=document.getElementsByClassName("mark")[0];
     var username=document.getElementsByClassName("username")[0];
     var img=document.getElementsByClassName("userimg")[0];
     var scrolltop=document.documentElement.scrollTop;
     obj.style.position="fixed";
     img.style.marginTop=5+"px";
     mark.style.marginTop=5+"px";
     obj.style.top=-10+"px";
     if(scrolltop==0){
       obj.style.position="static";
       obj.style.top="";
       mark.style.marginTop=""
     }
}
export default {
    name:"daohan",
    data(){
        return{
            title:{
                "id":"首页",
                "id1":"发表文章",
                "id3":"关于我",
                "id4":"登陆者",
                "id5":"文章详情"
            },
            title_form:"title_form",
            id:"",
        }  
    },
    mounted:function(){
            var url=window.location;
            var p="one"
            var data=JSON.stringify(url).indexOf(p)
             if(data!=-1){
                  document.getElementsByClassName("title_form")[1].style.color="orange";
                  document.getElementsByClassName("title_form")[1].style.borderBottom="2px solid orange";
             }else{
                document.getElementsByClassName("title_form")[0].style.color="orange";
                document.getElementsByClassName("title_form")[0].style.borderBottom="2px solid orange";
             }
    },
    methods:{
        dian:function(event,n){
            var obj=document.getElementsByClassName("title_form");
            for(var i=0;i<obj.length;i++){
                obj[i].style.color="";
                obj[i].style.borderBottom="";
            }
           event.target.style.color="orange";
           event.target.style.borderBottom="2px solid orange"
        },
        urlt:function(event,n){
             if(n==0){
                 window.location="/";
             }if(n==1){
                 window.location="http://localhost:8080/#/one";
             }
        },
    }
}
</script>
<style>
*{
    margin: 0;
    padding: 0;
}
.back{
    background-color:white;
    width: 100%;
    height: 60px;
    box-shadow: 0 0 2px 0 gray;
    /* position: fixed;
    top:-10px */
}
 .tubiao{
     font-size: 20px;
    line-height: 50px;
 }
 .son{
       font-size: 20px;
    line-height: 50px;
    margin-left: -5px
 }
 .mark{
     margin-left: 13%;
 }
 .title_form{
     display: inline-block;
     height: 30px;
     height: 30px;
     margin-left: 12%;     
 }
 .title_b{
   width: 60%;
   position: absolute;
   top:20px;
   left: 22%;
 }
 .loginuser{
     position: absolute;
     width: 100px;
     margin-top: -45px;
     left: 76%;
 }
 .loginuser .userimg{
     width: 40px;
     height: 40px;
     margin-top: 5px;
     border-radius: 50%;
 }
 .loginuser .username{
     display: inline-block;
     position: absolute;
     top: 20px
 }
</style>

