module.exports.ajax=function(url,options,methods,callback){
        var URL=url+"?"+options;
        var xml="";
        var data="";
        if(window.XMLHttpRequest){
            xml=new XMLHttpRequest();
        }else{
            xml=new ActiveXObject("Microsoft.XMLHTTP");
        }
        xml.onreadystatechange=function(){
              if (xml.readyState==4 && xml.status==200){
                 
                    data=JSON.parse(xml.responseText) 
                    // data=xml.responseText;
                    // data=xml.responseText
                    callback(data)                        
                 };
             };
        if(methods=="GET"){
            xml.open("GET",URL,true)
            xml.send();
        }if(methods=="POST"){
            xml.open("POST",url,true);
            xml.setRequestHeader("Content-type","application/x-www-form-urlencoded")
            xml.send(options);
        }

}
// module.exports.ajax= function(opt) {
//              opt = opt || {};
//              opt.method = opt.method.toUpperCase() || 'POST';
//              opt.url = opt.url || '';
//              opt.async = opt.async || true;
//              opt.data = opt.data || null;
//              opt.success = opt.success || function () {};
//             var xmlHttp = null;
//             if (XMLHttpRequest) {
//                 xmlHttp = new XMLHttpRequest();
//             }
//             else {
//                 xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
//             }var params = [];
//             for (var key in opt.data){
//                 params.push(key + '=' + opt.data[key]);
//             }
//             var postData = params.join('&');
//             if (opt.method.toUpperCase() === 'POST') {
//                 xmlHttp.open(opt.method, opt.url, opt.async);
//                 xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
//                 xmlHttp.send(postData);
//             }
//            else if (opt.method.toUpperCase() === 'GET') {
//                 xmlHttp.open(opt.method, opt.url + '?' + postData, opt.async);
//                 xmlHttp.send(null);
//             } 
//             xmlHttp.onreadystatechange = function () {
//                 if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
//                     opt.success(xmlHttp.responseText);
//                 }
//             };
//         }