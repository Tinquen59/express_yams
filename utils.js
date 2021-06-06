import { winPatries, randomPatries } from './models/index';

export const canPlay = (collection) => {
    for (const element of collection) {
        if (element.number > 0) return true;
    }
    if (collection[collection.length - 1] === 0) return false;
};

// Génére un nbre aléatoire arrondi.
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);

const resultCombination = async setArr => {
    let counters = [];
    let message = {
        combinationName: "",
        message: "",
        numPatriesWin: 0,
        namePatries: []
    };

    const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

    for (let i = 1; i <= 6; i++) {
        counters.push(countOccurrences(setArr, i));
    }

    let occurencesFilter = counters.filter(
        item => item === 2 
        || item === 4 
        || item === 5
    ); 

    function occurenceCheck(occValue) {
        if ( occValue.length === 1 ) {
            // Si on a une occurence de 5 ou 4 (yams ou carré)
            if (occValue[0] === 5) {
                message.combinationName = "Yams";
                message.message = "Bravo vous gagnez 3 pâtisseries !";
                message.numPatriesWin = 3;
            } else if (occValue[0] === 4) {
                message.combinationName = "Carré";
                message.message = "Bravo vous gagnez 2 pâtisseries !";
                message.numPatriesWin = 2;
            } else {
                message.combinationName = "";
                message.message = "Perdu !";
            }
        // Si on a une double paire ([2,2])
        } else if (occValue.length === 2) {
          message.combinationName = "Double Paire";
          message.message = "Bravo vous gagnez 1 pâtisserie !";
          message.numPatriesWin = 1;
        } else {
            message.combinationName = "";
            message.message = "Perdu !";
        }
    }

    occurenceCheck(occurencesFilter);
    //console.log('message.numPatriesWin :', message.numPatriesWin);

    if (message.numPatriesWin > 0) {

        const returnPatries = await winPatries(message.numPatriesWin)
            .then((res) => {
                console.log('res winpatries :', ...res);
                message.numPatriesWin > 0 ? message.namePatries.push(...res) : '';
                return message;
            })
            .catch((error) => {
                console.log('error return patries :', error);
            });
        
        return returnPatries;
    } else {
        return message;
    }
}

export const play = async () => {
    let yamsCombination = [];
    let resultYams = {dices: [], message: {}};
    const yamsCounter = 5;
    let min = 1;
    let max = 6;
  
    for (let i = 0; i < yamsCounter; i++) {
      yamsCombination.push(getRandomInt(min, max))
    }

    //console.log(await randomPatries());
    //console.log(randomPatry);

    const resultAll = await resultCombination(yamsCombination).then((res) => {
        resultYams = {
            dices: yamsCombination,
            message: res
        }
        return resultYams;
    });
    
    return resultAll;
}
