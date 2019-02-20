<template>
    <div class="lunbo">
      <div class="picture">
           <div class="picture-form1" :style="comstyle">
               <ul>
                  <li><img src="/static/destination-1.jpg"></li>
                  <li><img src="/static/destination-2.jpg"></li>
                  <li><img src="/static/destination-4.jpg"></li>
                  <li><img src="/static/destination-5.jpg"></li>
               </ul>
           </div>
      </div>
      <div class="title">
               <span class="dotted"></span>
               <span class="dotted"></span>
               <span class="dotted"></span>
               <span class="dotted"></span>
    </div>
</div>
</template>
<script>
function add(n){
    var obj=document.getElementsByTagName("span");
    for(var i=0;i<obj.length;i++){
        obj[i].style.backgroundColor="";
    }
     obj[n].style.backgroundColor="yellow";
}
export default {
    name:"hello",
    data(){
        return{
          index:false,
          time:0,
          distance:0,
          kuang:{
              width:'3200px',
              marginLeft:'0px'
          },
          clear:''
        }
    },
   computed:{
       comstyle(){
           return {
               width:"4000px",
               marginLeft:this.distance*this.time+"px",
               transition:'all 0.5s'
           }
       },
       comtitle(){
           return {
               width: "20px",
               height: "20px",
               borderRadius:"50%",
               float: "left",
               backgroundColor:"white",
               listStyle: "none",
               marginLeft: "10px",
           }
       }
   },
   mounted:function(){
       var self=this;
       add(0);
         self.clear=setInterval(function(){
           if(self.index==false){  
            //    add(self.time)            
               self.distance=-1000;
               self.time++;
               if(self.time==3){
                   self.index=true
               }
               add(self.time)
           }else{
               self.time--;
               if(self.time==0){
                   self.index=false
               }
            add(self.time)
           }
        },2000)
   },
   methods:{
       left:function(){
           clearInterval(this.clear)
           this.time--;
           if(this.time==0){
               this.time=3
           }
       }
   }

}
</script>
<style>
*{
    margin: 0;
    padding: 0;
}
.picture-form1 ul li{
   list-style: none;
   float: left;
}
.picture-form1 ul li img{
    width: 1000px;
    height: 350px;
}
.picture{
    width: 1000px;
    overflow: hidden;
    margin: 0 auto;
    position: relative;
}
.dotted{
    width: 20px; 
    height: 20px;
    border-radius:50%;
    float:left;
    background-color:white;
    list-style: none;
    margin-left:10px;
}
.title{
    margin-left: 45%;
    position: absolute;
    top: 370px
}
.left{
    position:absolute;
    width: 50px;
    height: 350px;
    left: 0px;
    background-color: gray;
    font-size: 30px;
    text-align: center;
    line-height: 350px
}
.shuju{
    margin-top: 10px;
}
.article{
    width: 73%;
    height: 50px;
    font-size: 20px;
    margin: 15px auto;
    border-radius:3px 3px 3px 3px; 
    color: orange;
}
</style>
