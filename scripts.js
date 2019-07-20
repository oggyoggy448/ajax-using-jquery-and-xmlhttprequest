// for (i=0;i<100;i++){
var request ;
if(window.XMLHttpRequest){
    request= new XMLHttpRequest();
}
else {
    reques= new ActiveXObject("Microsoft.XMLHTTP");
}

//false parameter below shows that browser will wait until it gets all the request from the server, which is really really bad idea
request.open("GET","data.txt",false);
request.onreadystatechange = function(){
    if(request.status == 200 && request.readyState == 4){
        console.log(request);
        // console.log(request.responseText);  
        // document.getElementsByClassName("output")[0].addEventListener('click',function(){
            //         this.innerHTML= "And the output is: "+request.responseText;
            //     });       
            
            // var list = document.getElementsByTagName("ul")[0].getElementsByTagName('li');
            // for (let index = 0; index < list.length; index++) {
                //     list[index].innerHTML= 
                //             "And the output is: "+request.responseText;
                // }
                // document.getElementsByTagName("li")[4].innerHTML= "And the output is: "+request.responseText;                      
        }
    }
    request.send();
        // }