//REST COUNTRIES

//här får vi upp 24 objekt med egenskaper
$.get('https://restcountries.com/v3.1/lang/spa').then(countries =>{
    console.log(countries);

    //går igenom och plockar ut populationrna för de olika länderna i ländernas array
    const populationArray = _.pluck(countries, 'population');
    console.log(populationArray);

    //vi säger här "sortera länderna efter populationsvärdet"
    const sortedCountries = _.sortBy(countries, 'population');
    console.log(sortedCountries);


    //får ut länderna i bokstavsordning när vi använder landskoden "cioc"
    const sortedCountries2 = _.sortBy(countries, 'cioc');
    console.log(sortedCountries2);

    //returnerar det största värdet av alla populationerna
    const maxPopulation = _.max(populationArray);
    console.log(maxPopulation);

    //Tar fram det landet med störts 'population' som här var Mexico
    const maxPopulation2 = _.max(countries, country => country.population);
    console.log(maxPopulation2);

    //alternativt 2 går också att använda:
    const maxPopulation3 = _.max(countries,'population');
    console.log(maxPopulation3);

})

//--------------------------------------------------------------------------

//DECK OF CARDS

//vi skapar en tom array
const deck = [];
//deklarerar sutis och values i array:er
const suits = ['spades', 'hearts', 'clubs', 'diamonds'];
const values = [1, 2 ,3 ,4 , 5, 6, 7, 8, 9, 10,11, 12, 13];

//loopar igenom sutis och values
for(let i = 0; i<suits.length; i++){
    for(let j = 0; j<values.length; j++){
        deck.push(
            {
                suit: suits[i],
                value: values[j],
            }
        )
    }
}


//loggar den oblandade kortleken
console.log(deck);

//använder metoden _.shuffle() för att blanda kortleken
const shuffledDeck = _.shuffle(deck);
//loggar den blandade kortleken
console.log(shuffledDeck);

const randomCard = shuffledDeck[_.random(0, shuffledDeck.length-1)];
console.log(randomCard);