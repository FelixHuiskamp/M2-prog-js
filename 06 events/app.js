class App
{

    runApplication()
    {
        console.log("hello world!");
        //code gaat hier!
        let uiButton = document.getElementById("myButton")
        let uiButton2 = document.getElementById("myButton2")

        let div = document.getElementById('ourdiv').addEventListener('click', ()=>{
            alert("div clicked");
            let header1 = document.createElement("h1");
            let node = document.createTextNode("This is new Header ")
            header1.appendChild(node);
            document.body.appendChild(header1);
        }
        )

        uiButton.addEventListener("click",(e)=>
        {
            let header1 = document.createElement("h1");
            let node = document.createTextNode("This is new Header ")
            header1.appendChild(node);

            let para = document.createElement("p");
             node = document.createTextNode("This is new. ")
            para.appendChild(node);

            let img = document.createElement("img");
            img.src = "./img/Leon.jpg";

            document.body.appendChild(header1);
            document.body.appendChild(para);
            document.body.appendChild(img);
        });

    }
}

let app = new App();
app.runApplication();