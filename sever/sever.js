var express=require("express")
var url=require("url");
var fs=require("fs");
var app=express();
app.post("/",function(req,res,next){
    var data={
        log:{
            path:"/data/log",
            datalist:[]
        }
    }
    var result="";
    req.on("data",function(data){
        JSON.parse(data);
        result=data
    })
    data.log.datalist.push(result);
    fs.mkdirSync(file_path,{recursive:true},function(err){
        if(err){
            return;
        }
    })
    fs.appendFile(file_path+file_name,result,function(err){
        if(err){
            return
        }
    })
    //存储数据
    function storeage(type,log){
        if(data[type]){
            data[type].datalist.push(log)
            
        }
    }
})
app.listen(3000,"127.0.0.1")