console.log('Loaded!');
alert('Hi!');
var content = document.getElementById('main-text');
//Moving The Image
var move = document.getElementById('img');
move.onclick = function(){
   
 img.style.marginLeft = '100px';
} ;
var counter=0;
var button = doucument.getElementById("counter");
button.onclick = function ()
{
    counter= counter+1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
    
};