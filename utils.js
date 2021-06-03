// Génére un nbre aléatoire arrondi.
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function resultCombination(setArr) {
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
            result: "Double Carré"
        }
    ]

    const result = resultCombination.filter((item) => item.value === setArr.size);
    console.log('result :', result);
    return result.length >= 0 ? result[0].result : '';
}

const play = () => {
    let yamsCombination = []
    let min = 1;
    let max = 6;
  
    for (let i = 0; i < 5; i++) {
      yamsCombination.push(getRandomInt(min, max))
    }

    const setYamsCombination = new Set(yamsCombination);
    console.log(yamsCombination, setYamsCombination);
    const result = resultCombination(setYamsCombination); 
    return result;
}

export default play;