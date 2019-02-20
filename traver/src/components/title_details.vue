<template>
<div>
    <nav-header></nav-header>
    <nav-data></nav-data>
</div>
</template>
<script>
import navHeader from "@/views/header"
import navData from "@/views/shujuleixin"
export default {
    name:"myarticle",
    data(){
        return{
            msg:""
        }
    },
    methods:{

    },
    components:{
        navHeader:navHeader,
        navData:navData
    }
}
</script>
<style>

</style>
