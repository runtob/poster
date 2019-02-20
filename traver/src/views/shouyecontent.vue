<template>
    <div>
        <div style="margin:0 17%;width:80%;
                 overflow:hidden" class="first">
            <p>文章类型</p>
            <div style="margin-top:10px">
            <!-- 面包学导航 -->
            <el-breadcrumb separator="/" class="el-breadcrumb">
                   <el-breadcrumb-item>Html</el-breadcrumb-item>
                   <el-breadcrumb-item>Css</el-breadcrumb-item>
                   <el-breadcrumb-item>JS</el-breadcrumb-item>
                   <el-breadcrumb-item>Vue.js</el-breadcrumb-item>
                   <el-breadcrumb-item>React.js</el-breadcrumb-item>
                   <el-breadcrumb-item>...</el-breadcrumb-item>
              </el-breadcrumb>
             </div>
              <hr style="margin-top:10px;width:80%">
        </div>
        <div class="contentfirst">
            <!-- 内容 -->
            <div class="content" v-for="item in article" :key="item.id">
                <div class="content_form">
                   <p style="font-size:20px;" @mouseover="changecolor(item.id)" :class="{red:changeorange == item.id}">{{item.title}}</p>
                   <p style="font-size:16px;color:rgba(0,0,0,0.5);margin-top:10px">{{item.xuyan}}...</p>
                   <p style="font-size:13px; color:rgba(144,144,144,0.5);margin-top:10px">作者:{{item.ausor}}  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;时间:{{item.time}}        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;浏览次数:{{item.liulan}}</p>
                </div>
            </div>
            <!-- 分页 -->
            <div class="block">
                   <el-pagination
                    :pager-count="11"
                    layout="prev, pager, next"
                    :total="200"
                    @current-change="nextPage"
                   >
                   </el-pagination>
            </div>
            <!-- 数据动态· -->
            <div style="margin-top:10px;width:90%">
                <p style="color:orange;font-style:italic;font-size:20px">数据动态</p>
                <hr style="width:100%;margin-top:10px">
                <!-- 数据进度条 -->
                <div style="margin-top:10px;width:90%">
                    <div v-for="(item,i) in datatype" :key="i" class="btn">
                    <el-progress type="circle" :percentage="datanum[i]"></el-progress>
                    <p style="margin-left:45px;margin-top:10px">{{item}}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="componentlogin">
            <component :is="'login'"></component>
        </div>
        <div class="footer">
        </div>
    </div>
</template>
<script>
export default {
    name:"shouye",
    data(){
        return{
            msg:"",
            changeorange:-1,
            datatype:["Html","JS","Css","AjaX","Node.js","Vue",],
            datanum:[10,20,30,40,50,60],
            article:[
                {   
                    id:1,
                    title:"Jquery全屏动画触摸滑动焦点图片",
                     xuyan:"摘要: Jquery全屏动画触摸滑动焦点图片，带图片、标题、文字说明，全程动画，让你的网站不再单调。效果演示图演示地址http://www.devdo.net/jqueryquanpingjiaodian.html",
                     ausor:"张国开",
                     time:new Date(),
                     liulan:25
                },
                 {  
                     id:2,
                    title:"vue 系列文章----简单介绍",
                     xuyan:"vue之前学习过一遍，但没有记录博客，工作中也只是用vue进行一些页面的渲染，今天开始把Vue复习一下，同时进阶一下",
                     ausor:"张国开",
                     time:new Date(),
                     liulan:25
                },
                {   
                    id:3,
                    title:"React Native不同设备分辨率适配和设计稿尺寸单位px的适配",
                     xuyan:"React Native不同设备分辨率适配和设计稿尺寸单位px的适配，设计师给的稿子都是按照px像素单位设计的，这个时候我们怎么快速还原设计稿那？下面代码实现React Native设计稿尺寸单位px与pt单位的自动转换适配。",
                     ausor:"张国开",
                     time:new Date(),
                     liulan:25
                },
                 {  id:4,
                    title:"reactjs+webpack的ie8兼容问题解决方案",
                     xuyan:"reactjs+webpack的ie8兼容问题解决方案，webpack 进行babel对ES6，7语法的转码。 webpack 引用es3ify-loader 解决es3语法兼容问题。 全局引用babel-polyfill,es5-shim/es5-sham,console-polyfill,JSON的polyfill等 不要",
                     ausor:"张国开",
                     time:new Date(),
                     liulan:25
                }
            ]
        }
    },
    methods:{
        changecolor:function(i){
              this.changeorange=i
        },
        nextPage(val) {
               alert(val)
            },
    },
    components:{
        login:{
            template:"#login"
        }
    }
}
</script>
<style>
.first{
    margin-top:20px;
    font-size: 20px;
    font-family:inherit;
    font-style: italic;
    color: orange;
}
.contentfirst{
    margin-left:17%;
    width: 64%;
}
.content{
    width: 80%;
    height: 110px;
    box-shadow: 2px 3px 3px 2px rgba(144, 144,144, 0.5);
    margin-top: 20px;
    padding: 20px
}
.content_form{
    margin-left: 20px;
    height: 100%;
}
.red{
    color: orange;
}
.block{
    margin-top: 10px;
    margin-left: 12%
}
.btn{
    display: inline-block;
    margin-left: 50px;
    padding: 20px
}
.footer{
    width: 100%;
    height: 50px;
    background-color: black;
}
.componentlogin{
    position: absolute;
    top:500px;
    left: 73%;
    z-index: -1;
}
.componentlogin{
    width: 250px;
    height: 200px;
    border: 1px solid black;
}
.componentlogin p{
    font-size: 20px;
    color: goldenrod;
    text-align:center
    
}
</style>
