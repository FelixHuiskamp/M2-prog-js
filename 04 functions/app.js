function heeftEenResultaat()
{
    let resultaat =1;
    return resultaat;
}

heeftEenResultaat();

let hetResultaat = heeftEenResultaat();
console.log(hetResultaat);
console.log(heeftEenResultaat());

let x = 9;
let a =3;
let b =4;
let c =89;

let y = (a*(x*x) )+ (b*x) +c;
console.log(y);

function ax2bcWiskunde(x,a,b,c)
{
    let y = (a*(x*x) )+ (b*x) +c;
    return y;
}
let y1 = ax2bcWiskunde(9,3,4,89);
console.log(y1);

let y2 = ax2bcWiskunde(3,6,5,45);
console.log(y2);

let y3 = ax2bcWiskunde(7,1,2,13);
console.log(y3);

function logYfunctie(u,h,l){
    let logY = Math.log(1) + h + Math.pow(u,2);
    console.log(logY);
    return logY;
}
let resultaatLogY = logYfunctie(98, 23, 1);
console.log(resultaatLogY);

function argumentAreHandy(shoutout)
{
    console.log("do you want to give a shoutout?");
    console.log(shoutout);
}
argumentAreHandy("Super Shout out");
argumentAreHandy("Hallo allemaal!");
argumentAreHandy("Vrijheid!");
function superMooieGlobalFunction()
{
    console.log("ik ben global");
    console.log("dus je mag mij overal aanroepen");
}
superMooieGlobalFunction();
superMooieGlobalFunction();
superMooieGlobalFunction();
class App
{

    runApplication()
    {
        console.log("hello world!");
        //code gaat hier!
        superMooieGlobalFunction();
        this.mario();
    let bowser = this.bowser();
console.log(bowser);
let duo = this.duo(6,6);
console.log(duo);
    }
    newClassFunction()
    {
        console.log("hello world in de newClassFunction");
    }
    anotherFunctionWithArguments(aArgument)
    {
        console.log("kom maar met je argument");
        console.log("hier:");
        console.log(aArgument);
    }

    mario()
    {
        console.log("MARIO!!")
    }

    bowser()
    {
        return "BWAHAHA!!"
    }

    duo(getal, getal2)
    {
        return getal + getal2
    }

    wario()
    {
        console.log("HOHO!!")
    }


}



let app = new App();
app.runApplication();
app.anotherFunctionWithArguments("mijn argument is frikandellen zijn lekker.");
app.newClassFunction();
app.mario();
let bowser = app.bowser();
console.log(bowser);
let duo = app.duo(6,6);
console.log(duo);
app.wario();
