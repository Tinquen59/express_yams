"use strict";

import { run } from "../connect";

// all() est une promesse
export const all = async () => {
    const collection = await run();
    
    return collection.find({ }, { name : 1, number : 1, order : 1, _id : 0}).toArray();
}