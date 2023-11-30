class App
{

    runApplication()
    {
        console.log("hello world!");
        //code gaat hier!
      let canvas = document.getElementById("canvasid");
      let g = canvas.getContext("2d");
      g.fillStyle = "brown";
      g.fillRect(0,0,canvas.width,canvas.height);
      
      console.log(canvas);
    }
}

let app = new App();
app.runApplication();


console.log(app.greeting);
console.log("appNaam: " + app.appNaam);
console.log("versienummer: " + app.versienummer);