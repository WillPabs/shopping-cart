const express = require("express");
const db = require("../db/conn");
const { default: product } = require("../model/product");

const cartRoutes = express.Router();

// const cartApi = () => {
    
    // create cart
    cartRoutes.get('/cart', async (req, res, next) => {
        // product.find({}).then((p) => {
        //     res.send(p);
        // }).catch(next);
        await db.connectToServer();
        const dbConnect = await db.getDb();
        console.log(await dbConnect.collection('sales'));
        await dbConnect.collection('sales').find()
        .toArray((err, result) => {
            if (err) {
                console.log(err);
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