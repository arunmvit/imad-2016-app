console.log('Loaded!');
var counter = 0;
var but = document.getElementById("counter");
but.onClick = function(){
    counter=+1;
    var span = document.getElementById('count');
    span.innerHtml = counter;
};
