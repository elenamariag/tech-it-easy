// Opdracht 1a: Gebruik een array-methode om een array te maken met alle tv-type namen. Log de uitkomst in de
//   console.
const tvName = inventory.map((tv) => {
    return tv.name;
})
console.log(tvName);

// Opdracht 1b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht
//   zijn. Log de uitkomst in de console.
const tvSoldOut = inventory.filter((sold) =>{
    return sold.originalStock === sold.sold;
})
console.log(tvSoldOut);

// Opdracht 1c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight
//   beschikken. Log de uitkomst in de console.
const ambiLightTvs = inventory.filter((ambiLightTv) => {
    return ambiLightTv.options.ambiLight === true;
})
console.log(ambiLightTvs);

// opdracht 1d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert. Log de uitkomst in de
//   console.
function sortArray (lowToHigh){
    return lowToHigh.sort ((a, b)=>{
        if (a.price - b.price > 0) {
            return 1;
        } else if (a.price - b.price < 0) {
            return -1;
        } else {
            return 0;
        }
    })
}
console.log(sortArray(inventory));