class App
{

    runApplication()
    {
        console.log("hello world!");
        //code gaat hier!
      let canvas = document.getElementById("canvasid");
      let g = canvas.getContext("2d");
      g.beginPath()
      g.fillStyle = "brown";
      g.moveTo(30,10);
      g.lineTo(20,30);
      g.lineTo(60,40);
      g.lineTo(70,20);
      g.closePath();
      g.stroke();
      g.fill()

      g.fillStyle = "grey";
      g.beginPath()
      g.moveTo(20,30);
      g.lineTo(20,50);
      g.lineTo(60,60);
      g.lineTo(60,40);
      g.closePath();
      g.stroke();
      g.fill();
      
      g.fillStyle = "grey";
      g.beginPath()
      g.moveTo(60,40);
      g.lineTo(70,20);
      g.lineTo(80,30);
      g.lineTo(60,40);
      g.closePath();
      g.stroke();
      g.fill();

      g.fillStyle = "grey";
      g.beginPath()
      g.moveTo(80,30);
      g.lineTo(80,50);
      g.lineTo(60,60);
      g.lineTo(60,40);
      g.closePath();
      g.stroke();
      g.fill();
      
      
      g.fillStyle = "yellow";
      g.beginPath()
      g.moveTo(25,35);
      g.lineTo(27,37);
      g.lineTo(27,47);
      g.lineTo(25,45);
      g.lineTo(25,35);
      g.closePath();
      g.stroke();
      g.fill();

      g.fillStyle = "yellow";
      g.beginPath()
      g.moveTo(35,37);
      g.lineTo(37,39);
      g.lineTo(37,49);
      g.lineTo(35,47);
      g.lineTo(35,37);
      g.closePath();
      g.stroke();
      g.fill();

      g.fillStyle = "yellow";
      g.beginPath()
      g.moveTo(45,39);
      g.lineTo(47,41);
      g.lineTo(47,51);
      g.lineTo(45,49);
      g.lineTo(45,39);
      g.closePath();
      g.stroke();
      g.fill();
      console.log(canvas);
    }

    runApplication()
    {
      console.log("hello world!");
      //code gaat hier!
      let canvas = document.getElementById("canvasid");

      let g = canvas.getContext("2d");
      g.fillrect(0,0,10,10);
    }
}

let app = new App();
app.runApplication();


console.log(app.greeting);
console.log("appNaam: " + app.appNaam);
console.log("versienummer: " + app.versienummer);