class App
{

    runApplication()
    {
        console.log("hello world!");
        //code gaat hier!
        let lightmode =true 
        let jsversie ="up-to-date"
        let getal =17
        this.lightmode =true
        this.jsversie="up-to-date"
        this.getal =17
        this.greeting ="Starting - up";
        this.appNaam ="HelloWeb"
        this.versienummer ="0.1"
        this.versiedatum ="21-11-2023"
        this.autheur ="Felix Huiskamp"
        this.copyright ="FelixHuiskamp"
        this.distributeur ="Microsoft"
        this.darkmode =false 
        // console.log(this.greeting)
        // console.log(this.appNaam)
        // console.log(versienummer)
        // console.log(versiedatum)
        // console.log(autheur)
        // console.log(copyright)
        // console.log(distributeur)
        // console.log(darkmode)
        console.log("localbool: "+ lightmode)
        console.log("localstring"+ jsversie)
        console.log("localgetal: " + getal)
    }
}

let app = new App();
app.runApplication();


console.log(app.greeting);
console.log("appNaam: " + app.appNaam);
console.log("versienummer: " + app.versienummer);