const products = [];
products.push( {
    id:0,
    title: "The FellowShip of the Ring",
    price: 12.99,
    description: "The first LOTR Book"
})
products.push( {
    id:1,
    title: "The Two Towers",
    price: 13.99,
    description: "The Second LOTR Book"
})
products.push( {
    id:2,
    price: 13.99,
    title: "Return of the king",
    description: "The third LOTR Book"
})
module.exports = class Product {
    constructor(title, price, description) {
        this.title = title;
        this.price = price;
        this.description = description;
    }
    save() {
        let id = products.length;
        products.push({
            id: id,
            title: this.title,
            price: this.price,
            description: this.description
        });
    }
    static fetchAll() {
        return products;
    }
}
