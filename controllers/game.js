"use strict";

import { allPatries, allResults } from "../models/index";
import { canPlay } from "../utils";

export const indexController = (req, res) => {

    allPatries().then(
        collection => {
            console.log(collection);
            const infoGame = {
                canPlay: canPlay(collection),
                isStart: false
            }
            res.render("pages/index", { data : collection , infoGame, dices: [1, 2, 3, 4, 5] , title: process.env.TITLE ?? "No Title" })
        }
    )
};

export const resultsController = (req, res) => {

    allResults().then(
        collection => {
            console.log(collection);
            res.render("pages/results", { data: collection });
        }
    )
}