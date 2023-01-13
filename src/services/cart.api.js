const express = require("express");
const db = require("../db/conn");

const cartRoutes = express.Router();

// const cartApi = () => {
    
    // create cart
    cartRoutes.get('/cart', async (req, res, next) => {
        try {
            await db.connectToServer();
            const dbConnect = await db.getDb();
    
            const cart = await dbConnect.collection('cart').find({}).toArray();
            res.json(cart);
        } catch (error) {
            console.log(error);
            res.json(error);
        }
    });

    // add to cart
    cartRoutes.post('/cart', async (req, res) => {
        try {
            await db.connectToServer();
            const dbConnect = await db.getDb();
    
            const item = req.body;
    
            const insertRes = await dbConnect.collection('cart').insertOne(item);
            console.log(item);
            res.json(insertRes);
        } catch (error) {
            console.log(error);
            res.json(error);
        }
    })

    // delete from cart
    cartRoutes.patch('/cart', async (req, res) => {
        try {
            await db.connectToServer();
            const dbConnect = await db.getDb();

            const item = req.body;

            const cart = await dbConnect.collection('cart');

            const deleteRes = await cart.deleteOne(item);
            
            console.log(deleteRes);
            res.json(deleteRes);
        } catch (error) {
            console.log(error);
            res.json(error);
        }
    });

    // clear cart
    cartRoutes.delete('/cart', async (req, res) => {
        try {
            await db.connectToServer();
            const dbConnect = await db.getDb();

            const cart = await dbConnect.collection('cart');

            const deletedRes = await cart.drop();
            console.log(deletedRes);
            res.json(deletedRes);

        } catch (error) {
            console.log(error);
            res.json(error);
        }
    })

    // checkout
// }

module.exports = cartRoutes;