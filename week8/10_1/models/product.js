const product = [];

module.exports = class Product {
    constructor(title, author, description) {
        this.title = title;
        this.author = author;
        this.description = description;
    }
    save() {
        product.push( {
            'title' : this.title,
            'author' : this.author,
            'description' : this.description,
        })
    }
    static fetchAll(){
        return product;
    }
}