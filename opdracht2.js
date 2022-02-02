// Opdracht 2a: Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.
let result = 0;
for (let i = 0; i < inventory.length; i++) {
    result = result + inventory[i].sold;
}

console.log(result);

// Opdracht 2b: Zorg ervoor dat dit aantal _in het groen_ wordt weergegeven op de pagina.
const tvsSoldOut = document.getElementById("container");

const soldTvsTitle = document.createElement("h3");
soldTvsTitle.textContent = "Hoeveel tv's zijn er verkocht?";


const allSoldTvs = document.createElement("h4");
allSoldTvs.textContent = result;
allSoldTvs.setAttribute('class', 'sold-out-tag');

tvsSoldOut.appendChild(soldTvsTitle);
tvsSoldOut.appendChild(allSoldTvs);

// Opdracht 2c: Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent. Log de uitkomst in de
//   console.
let purchased = 0;

for (let i = 0; i < inventory.length; i++) {
    purchased = purchased + inventory[i].originalStock;
}
console.log(purchased);

// Opdracht 2d: Zorg ervoor dat dit aantal _in het blauw_ wordt weergegeven op de pagina.
const totalPurchased = document.getElementById("container2");

const tvsInStock = document.createElement("h3");
tvsInStock.textContent = "Hoeveel tv's zijn er ingekocht?";

const allPurchasedStock = document.createElement("h3");
allPurchasedStock.textContent = purchased;
allPurchasedStock.setAttribute('class', 'purchased-tv-tag');

totalPurchased.appendChild(tvsInStock);
totalPurchased.appendChild(allPurchasedStock);


// Opdracht 2e: Geef _in het rood_ weer hoeveel tv's er nog verkocht moeten worden.
const totalNeedToSell = document.getElementById("container3");

const allNeedsToSell = document.createElement("h3");
allNeedsToSell.textContent = 'Hoeveel moeten we er nog verkopen?';

const toSell = document.createElement("h3");
toSell.textContent = purchased - result;
toSell.setAttribute('class', 'to-sell-tag');

totalNeedToSell.appendChild(allNeedsToSell);
totalNeedToSell.appendChild(toSell);