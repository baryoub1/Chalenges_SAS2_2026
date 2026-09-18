const prompt = require('prompt-sync')();
let Duree = prompt("the film's duration in minutes : ")
if (Duree < 60){
    console.log("Catégorie : Court métrage")
}
else if (Duree >= 60 && Duree <= 120){
    console.log("Catégorie : Film standard")
}
else if (Duree > 120 ){
    console.log("Catégorie : Film long")
}