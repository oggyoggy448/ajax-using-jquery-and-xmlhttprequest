var request ;
if(window.XMLHttpRequest){
    request= new XMLHttpRequest();
}
else {
    reques= new ActiveXObject("Microsoft.XMLHTTP");
}

//false parameter below shows that browser will wait until it gets all the request from the server, which is really really bad idea
request.open("GET","data.json",false);
request.onreadystatechange = function(){
    if(request.status == 200 && request.readyState == 4){
        //parse function does not work for most of web browser specially for IE, 
        //and eval method of javascript has also some security issue so it is better choice to 
        //use the jquery 
        var data = JSON.parse(request.responseText);
        // console.log(data.name);
        var d_data = document.getElementsByTagName("li");
        for (let index = 0; index < d_data.length; index++) {
            const element = d_data[index];
            element.innerHTML = data.name;
        }
        
        
    }
}
    request.send();
        