$('button').on("click",function(){
    // $("h1").load("data.txt");
    $.getJSON("data.json",function(data){
    // console.log(data);
    console.log(data.name);
    console.log(data.msg);
});
});
