"use strict";

import { all } from "../models/index";

export const indexController = (req, res) => {

    all().then(
        collection => {
            console.log(collection);
            res.render("pages/index", { data : collection , title: process.env.TITLE ?? "No Title" })
        }
    )

    
};