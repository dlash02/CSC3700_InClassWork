const db = require("../util/database")
module.exports = class Product {
    constructor(title, price, description) {
        this.title = title;
        this.price = price;
        this.description = description;
    }
    save() {
        return db.execute( 'insert into products (title, price, description)' +
                        'values ( ?,?,?)',
            [this.title, this.price, this.description]
        );
    }
    static fetchAll() {
        return db.execute( "select * from products");
    }
    updateItem( id ){
        // let gotItem = false;
        // let item = "";
        // for( let i=0; i<products.length; i++ ){
        //     if ( products[i].id == id ) {
        //         gotItem = true;
        //         products[i].title = this.title;
        //         products[i].price = this.price;
        //         products[i].description = this.description;
        //         break;
        //     } else {
        //         console.log( `No id:${id} not ${products[i].id} NO found`);
        //     }
        // }
        // console.log("----------Returning gotitem=" +gotItem);
        // return gotItem;
    }
    static delete(id) {
        return db.execute( 'delete from products where id= ?' ,
                    [id] );
    }
    static getItem( id ) {
      return db.execute( 'select * from products where id= ?',
          [id]);
    }
}
