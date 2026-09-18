const prompt = require('prompt-sync')();
let kilomètres = +prompt("Give us the distance traveled in kilometers : ",)
let litres = +prompt("Give us the amount of fuel consumed in liters : ")
let Consommation = Math.floor((litres / kilomètres) * 100)
console.log(Consommation, "L/100 km")
