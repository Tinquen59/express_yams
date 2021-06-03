export const canPlay = (collection) => {
    for (const element of collection) {
        if (element.number > 0) return true;
    }
    if (collection[collection.length - 1] === 0) return false;
};


// Génére un nbre aléatoire arrondi.
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);

const resultCombination = setArr => {
    let resultCombination = [
        {
            value: 1,
            result: "yams"
        },
        {
            value: 2,
            result: "Carré"
        },
        {
            value: 3,
            result: "Double paires"
        }
    ]

    let result = [];
    result = resultCombination.filter((item) => item.value === setArr.size);

    if (result.length === 0) result.push( { result: "Loose" } );

    console.log('result :', result);
    return result[0].result ;
}

export const play = () => {
    let yamsCombination = [];
    const yamsCounter = 5;
    let min = 1;
    let max = 6;
  
    for (let i = 0; i < yamsCounter; i++) {
      yamsCombination.push(getRandomInt(min, max))
    }

    const setYamsCombination = new Set(yamsCombination);
    console.log(yamsCombination, setYamsCombination);
    const result = resultCombination(setYamsCombination); 
    return result;
}