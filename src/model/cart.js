const Cart = () => {
    let obj = Object.create(cartFunctions);
    obj.id = crypto.randomUUID;
    obj.products = [];
    return obj;
};

const cartFunctions = {
    calculateTotal() {
        let total = 0;
        this.products.array.forEach(product => {
            total += product.price;
        });
        return total;
    },
    addItem(product) {
        this.products.add(product);
    },
    removeItem(product) {
        const index = this.products.indexOf(product);
        if (index > -1) {
            this.products.splice(index, 1);
        }
    },
    checkout() {
        console.log('Checking out cart!');
    }
};

export default Cart;