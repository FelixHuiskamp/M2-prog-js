class App
{

    runApplication()
    {
        console.log("hello world!");
        //code gaat hier!
        let appNaam ="HelloWeb"
        let versienummer ="0.1"
        let versiedatum ="21-11-2023"
        let autheur ="Felix Huiskamp"
        let copyright ="FelixHuiskamp"
        let distributeur ="Microsoft"
        let darkmode =false 
        console.log(appNaam)
        console.log(versienummer)
        console.log(versiedatum)
        console.log(autheur)
        console.log(copyright)
        console.log(distributeur)
        console.log(darkmode)
    }
}

let app = new App();
app.runApplication();