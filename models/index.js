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


/**
 * retourne des pastries aléatoirement
 * @param {*} num nombre de pastries retourner
 * @returns 
 */
export const winPatries = async (num) => {
    const collection = await run("patries");

    return collection.aggregate([
        { $match: { number: { $gt: 0 } } },
        { $sample: { size: num}}
    ]);
}


// Function décrémenter
export const decreaseNumber = async(id, numInc = -1) => {
    const collection = await run("patries");

    return collection.updateOne(
        { _id: id },
        {
            $inc: { number: numInc }
        }
    )
}