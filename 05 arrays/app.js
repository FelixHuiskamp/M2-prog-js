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

        artiesten.push("bob dylan")
        console.log(artiesten)

        artiesten.push("prince")
        console.log(artiesten)

        for  (let i = 0; i < artiesten.length; i++) {
            const element = artiesten [i];
            console.log(i + ":"+ element);
        }

        let indexToRemove = artiesten.indexOf("bob dylan")
        artiesten.splice(indexToRemove,1)
        console.log(artiesten)

        let indexToRemove2 = artiesten.indexOf("prince")
        artiesten.splice(indexToRemove2,1)
        console.log(artiesten)

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