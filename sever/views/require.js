var url=require("url")
function app(res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
}
exports.ajax=function(req,res,next){
    app(res);
    if(req.method == 'GET') {
        //让options请求快速返回
        var result=url.parse(req.url,true)
        var data=result.query;
        console.log(data)
        res.send(data) 
    }else if(req.method == "POST"){
        req.on("data",function(data){
              var obj=JSON.parse(data);
              console.log(obj);
              res.send(obj)
        })
    }
    else { 
        next(); 
    }
}