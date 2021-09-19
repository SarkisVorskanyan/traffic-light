let colors = ["#FF4500", "#656565", "#656565", "#656565", "#DAA520", "#656565", "#656565", "#656565", " #ADFF2F", "#656565", "#DAA520", "#656565", "#FF4500", "#656565", "#656565"];
let a = 0;
function time() {
  red.style.backgroundColor = colors[a];
  orange.style.backgroundColor = colors[a + 1];
  green.style.backgroundColor = colors[a + 2];
  a += 3;
  if (a == 15){
    a = 3;
  }
}
setInterval(function(){
      time(); 
  }, 1000);


//red grey grey. grey orange grey. grey grey green
 
                
