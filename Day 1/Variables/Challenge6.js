const prompt = require('prompt-sync')();
let Sc1 = Number(prompt("Score partie 1 : "))
let Sc2 = Number(prompt("Score partie 2 : "))
let Sc3 = Number(prompt("Score partie 3 : "))
let Sc4 = Number(prompt("Score partie 4 : "))
console.log("Partie 1 : ", Sc1)
console.log("Partie 2 : ", Sc2)
console.log("Partie 3 : ", Sc3)
console.log("Partie 4 : ", Sc4)
let Stotale = Sc1 + Sc2 + Sc3 + Sc4
let Moyenne = Stotale / 4
console.log("Score total : ",Stotale )
console.log("Moyenne : ",Moyenne )