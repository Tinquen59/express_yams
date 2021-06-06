"use strict";

import { allPatries, allResults } from "../models/index";
import { canPlay, play } from "../utils";

export const indexController = (req, res) => {
    const game = req.session;
    game.party = null;

    allPatries().then(
        collection => {
            const infoGame = {
                canPlay: canPlay(collection),
                isStart: true // valeur à modifier (false par defaut)
            }

            game.party = play();

            game.party.then((result) => {
                
                console.log('controller :', game.party);
                
                res.render("pages/index", { 
                    data : collection,
                    infoGame,
                    dices: result.dices, // array in utils.js 
                    title: process.env.TITLE ?? "No Title",
                    combinationName: result.message.combinationName,
                    message: result.message.message, // message in utils.js
                    patries: result.message.namePatries
                })
            });
        }
    )
};

export const resultsController = (req, res) => {

    allResults().then(
        collection => {
            res.render("pages/results", { data: collection });
        }
    )
}