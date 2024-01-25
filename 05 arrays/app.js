class App
{

    runApplication()
    {
        console.log("hello world!");
        //code gaat hier!
        let artiesten = ["Daft Punk", "Eminem", "Nirvana"]
        console.log(artiesten)

        for  (let i = 0; i < artiesten.length; i++) {
            const element = artiesten [i];
            console.log(i + ": "+ element)
        }
        let nummers = [2, 5, 7]
        console.log(nummers)    

        for  (let i = 0; i < nummers.length; i++) {
            const element = nummers [i];
            console.log(i + ":"+ element);
        }
    }

    
}

let app = new App();
app.runApplication();