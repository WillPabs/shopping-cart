import express from "express";
import db from "../db/conn";

const cartRoutes = express.Router();

// const cartApi = () => {
    
    // create cart
    cartRoutes.get('/cart', (req, res) => {
        const dbConnect = db.getDb();
        dbConnect.collection('sales').find({}).limit(20)
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