window.onload = load_data; 

function load_data(){
$("#search").keyup(search_data);
}
function search_data(){
    $.getJSON("json/data.json",function(data){
        // console.log(typeof(data));
        var u_data = document.getElementById("search").value;
            var d_data = "<ul>";
            $.each(data,function(k,v){
                if(v.data.search(u_data) != -1 && v.text.search(u_data)){
                    // console.log(v.data);
                    d_data+="<h1>"+v.data+"</h1>";
                    d_data+="<li>"+v.text+"</li>";
                    d_data+='</ul>';
                }
            });
            $('body').append(d_data);
        });
}
