window.onload = function() {
  var canvas = document.getElementById("sketchbook");
  if(canvas && canvas.getContext){
    //円形
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.fillStyle = "#600";
    ctx.strokeStyle = "#300";
    ctx.lineWidth = 10;

    ctx.arc(100,150,30,0, 2 * Math.PI, false );

    ctx.stroke();
    ctx.fill();
  }
}