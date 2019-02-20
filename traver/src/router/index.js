import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import navTitle from  "@/components/title_details"
import NavHeader from "@/views/daohan"

Vue.use(Router)

export default new Router({
  hash:history,
  routes: [
    {
      path: '/',
      name:"Myshowtime",
      component:NavHeader,
      children:[
        {path:"",component:HelloWorld},
        {path:"one",component:navTitle}
      ]
    },
  ]
})
