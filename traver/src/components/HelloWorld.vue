<template>
  <div class="hello">
     <div style="margin:10px 17%;width:80%;
                 height: 400px;">
          <img src="/static/article.jpg" class="img" />
     </div>
     <nav-firstcontent></nav-firstcontent>
    <router-view/>
  </div>
</template>
<script>
// import navDaohan from "@/views/daohan"
import navFirstcontent from "@/views/shouyecontent"
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: ''
    }
  },
  components:{
    navFirstcontent:navFirstcontent
  }
}
</script>
<style scoped>
.img{
  width:80%;
  height: 400px;
  margin: 0 auto;
}
</style>
