
var button = document.getElementById('counter');
button.onclick = function ()
{
    // create  request
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function(){
        if(request.readyState === XMLRequest.DONE){
            if(request.status===200){
                 var counter= request.responseText;
                 var span = document.getElementById('count');
                 span.innerHTML = counter.toString();
            }
            
        }
    };
    
    
   request.open('GET','http://sasankdevatha11.imad.hasura-app.io',true);
   request.send(null);
    
};