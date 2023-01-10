const express = require("express");
const { connectToServer, getDb } = require("../db/conn");
const { default: product } = require("../model/product");

const cartRoutes = express.Router();

// const cartApi = () => {
    
    // create cart
    cartRoutes.get('/cart', async (req, res, next) => {
        // product.find({}).then((p) => {
        //     res.send(p);
        // }).catch(next);
        connectToServer();
        const dbConnect = getDb();
        console.log(dbConnect);
        dbConnect.sales.find({}).limit(20)
        .toArray((err, result) => {
            if (err) {
                res.status(400).send('Error fetching sales!');
            } else {
                res.json(result);
            }
        });
    });

    // add to cart

    // delete from cart

    // checkout
// }

module.exports = cartRoutes;