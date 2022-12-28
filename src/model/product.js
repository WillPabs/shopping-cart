const Product = (name, description, image, price, availableQuantity) => {
    let obj = Object.create(productFunctions);
    obj.id = crypto.randomUUID;
    obj.name = name;
    obj.description = description;
    obj.image = image;
    obj.price = price;
    obj.availableQuantity = availableQuantity;
    return obj;
}

const productFunctions = {
    deductQuantity(amount) {
        if (this.availableQuantity - amount >= 0) {
            this.availableQuantity -= amount;
        }
    }
};

export default Product;