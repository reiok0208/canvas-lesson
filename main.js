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

    //文字
    var ctx2 = canvas.getContext("2d");
    ctx2.fillStyle = "#099";
    ctx2.strokeStyle = "#000";
    ctx2.lineWidth = 2;
    ctx2.font = "30px serif";
    ctx2.fillText("HELLO",100,50);
    ctx2.strokeText("HELLO",100,50);
  }
}