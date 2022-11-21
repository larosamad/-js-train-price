/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). */


let km = prompt('Quanti chilometri vuoi percorrere?') 
// console.log(km);

let pricekm = 0.21

let price = pricekm * km
console.log(`${price} euro`);

let eta = prompt('Quanti anni hai?')
// console.log(eta);

if(eta < 18){
    pricemin = price - (price / 100 * 20)
    console.log(`${pricemin.toFixed(2)} euro`);
}else if(eta > 65){
    priceover65 = price - (price / 100 * 40)
    console.log(`${priceover65.toFixed(2)} euro`);
}else{
    console.log(`${price} euro`)
}