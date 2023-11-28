class App
{

    runApplication()
    {
        console.log("hello world!");
        //code gaat hier!
       //Je past de code aan met "Hidden" en "Style"
       //Je gaat de code dan weer opvragen met "Id" en "Class"

       let title = document.getElementById("newstitle");
       console.log(title);

       let random = Math.random();
       console.log(random);
       if(random < 0.2)
       {
        title.style.backgroundColor = "#FF0000";
       }
       else if(random >= 0.2 && random <= 0.6)
       {
        title.style.backgroundColor = "#000FF0";
       }
       else if(random >= 0.6 && random <= 0.75)
       {
        title.style.backgroundColor = "#0FF000";
       }
       else
       {
        title.style.backgroundColor = "#00FF00";
       }
       let newsitem1 = document.getElementsByClassName("gamenews")[0]
        random = Math.random();
       if(random < 0.2)
       {
        newsitem1.style.backgroundColor ="#0FF000";
       }
       else
       {
        newsitem1.style.backgroundColor = "00FF00";
       }
       let newsitem2 = document.getElementsByClassName("gamenews")[1]
        random = Math.random();
       if(random < 0.2)
       {
        newsitem2.style.backgroundColor ="#000FF0";
       }
       else
       {
        newsitem2.style.backgroundColor = "FF0000";
       }
    }
}

let app = new App();
app.runApplication();