"use strict";

import { run } from "../connect";

// all() est une promesse
export const allPatries = async () => {
    const collection = await run("patries");
    
    return collection.find({ }, { name : 1, number : 1, order : 1, _id : 0}).toArray();
}

export const allResults = async () => {
    const collection = await run("results");

    return collection.find({}, { _id: 0, patriesName: 1, date: 1, isWin: 1 }).toArray();
}


// function qui retourne des patries pour les gagnants
export const winPatries = async (num) => {
    const collection = await run("patries");
    return collection.find({ }, { name : 1, number : 1, order : 1, _id : 0}).limit(num).toArray();
}


// function de test pour retourner une patries aleatoire
export const randomPatries = async() => {
    const collection = await run("patries");

    return collection.aggregate([
        { "$match": {"order": 5}}
    ]);
}

// Function décrémenter
/* export const decrementPatriesNumber = async(elem) => {
    const collection = await run("patries");

    return collection.updateOne({elem}, {})
} */