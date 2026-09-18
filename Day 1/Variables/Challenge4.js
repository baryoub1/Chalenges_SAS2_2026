const prompt= require("prompt-sync")();

let Kilomètres = prompt(please enter your litters amount")
let Litres = 35
let Consomation = (Litres / Kilomètres) * 100
console.log("Distance : ",Kilomètres, "km")
console.log("Carburant : ",Litres,"litres")
console.log("Consomation : ",Consomation, "km")