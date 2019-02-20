var express=require("express");
var url=require("url")
var db=require("./views/db.js")
var twb=require("./views/require.js")
var app=express();
app.get('/',function(req,res,next){
    db.insert("site",{"name":"xiaohong"},function(err,result){
        if(err){
            return
        }
        res.send("success")
    })
})
app.get("/form",function(req,res,next){
     var txt=url.parse(req.url,true);
     console.log(txt);
})
app.get("/du",function(req,res,next){
    db.find("title",{},function(err,result){
           if(err){
               return
           }
          console.log(result)
          res.send("success")
    })
})
// app.get("/login",function(req,res,next){
//     twb.ajax(req,res,next);
// })
app.post("/login",function(req,res,next){
    twb.ajax(req,res,next);
})
app.listen(3000,"127.0.0.1")