// const product = [];
const fs = require('fs');   // new1
const path = require('path'); // new1b
const rootDir = path.dirname(process.mainModule.filename); // new2
const p = path.join( rootDir, 'data', 'products.json');
const getProductsFromFile = cb => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            console.log("ERROR!!!!! FLAG1")
            let ret = [
                {"title": "BLAH"}
            ];
            cb(ret);
        } else {
            console.log("Retuning cb");
            console.log(JSON.parse(fileContent));
            cb(JSON.parse(fileContent));
        }
    });
};
module.exports = class Product {
    constructor(title, author, description) {
        this.title = title;
        this.author = author;
        this.description = description;
    }

    save() {
        console.log("doing save -----p=" + p);
        fs.readFile(p, (err, data) => {
            let products = [];
            if (!err) {
                products = JSON.parse(data);
            } else {
                console.log("Something bad happened");
            }
            products.push(this);

            fs.writeFile(p, JSON.stringify(products), (err) => {
                if (err) {
                    console.log("Error on write file p=" + p);
                    console.error(err);
                }
            })
        });

    }



    static fetchAll(callB) {
        //     return products;
        //     fs.readFile(p, (err, fileContent) => {
        //         if ( err) {
        //             callB ( [] );
        //         }
        //         callB( JSON.parse(fileContent));
        //     })
        getProductsFromFile(callB);
    }
}
