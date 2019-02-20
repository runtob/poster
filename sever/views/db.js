var MongoClient = require('mongodb').MongoClient;
function _connection(callback){
    var url = 'mongodb://localhost:27017/title';
    MongoClient.connect(url,function(err,db){
        callback(err,db)
    })
};
//插入数据
exports.insert=function(collectionname,json,callback){
   _connection(function(err,db){
       if(err){
           callback(err,db)
           return;
       }
       var dbo=db.db("title")
       dbo.collection(collectionname).insertOne(json,function(err,result){
           callback(err,result)
           db.close()
       })
   })
}
//查找数据
exports.find=function(collectionname,json,callback){
    var data=[];
    if(arguments.length!=3){
        callback("find函数接收三个参数",null)
    }
    _connection(function(err,db){
        if (err) throw err;
        var dbo = db.db("title");
        dbo.collection(collectionname). find(json).each(function(err, result) { // 返回集合中所有数据
            if (err) throw err;
            if(result != null){
                data.push(result);
            }else{
                callback(null,data)
                db.close();
            }
        });

    })

}
//删除数据
exports.delet=function(collectionname,json,callback){
    _connection(function(err,db){
        if(err){
            callback(err,db)
        }
        var dbo=db.db("title");
        dbo.collection(collectionname).deleteOne(json, function(err, obj) {
            if (err) throw err;
            console.log("文档删除成功");
            db.close();
        });
    })
}