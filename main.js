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

    //影
    var ctx3 = canvas.getContext("2d");
    ctx3.shadowColor = "#333";
    ctx3.shadowOffsetX = -2;
    ctx3.shadowOffsetY = 3;
    ctx3.shadowBlur = 5;
    ctx3.fillRect(200,100,100,100);
    ctx3.beginPath();
    ctx3.arc(300, 200, 50, 0, 2 * Math.PI, false);
    ctx3.fill();
    ctx3.fillText("TEST", 220, 50);

    //要素を動かす
    function move(){
      x += 3;
      y += 2;
      //ctx4.fillStyle = "#FFF";
      //ctx4.fillRect(0,0,500,300);
      ctx4.fillStyle = "#F00";
      ctx4.fillRect(x,y,30,30);
    }

    var ctx4 = canvas.getContext("2d");
    var x = 0, y = 0;
    ctx4.fillStyle = "#F00";
    setInterval(move,50);
  }
}