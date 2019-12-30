const db = require('../util/database');
// const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');
const Cart = require('./cart');

const getProductsFromFile = () => {

}

module.exports = class Product {
    constructor(id, title, imageUrl, description, price) {
        this.id = id;
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price
    }
    save() {
       return db.execute('INSERT INTO products (title, price, imageUrl, description) VALUES (?, ?, ? ,?)',
            [this.title, this.price, this.imageUrl, this.description]);
    }
    static deleteById(id) {

    }
    static fetchAll() {
        return db.execute('SELECT * FROM products')
    }

    static findById(id) {

    }
}
