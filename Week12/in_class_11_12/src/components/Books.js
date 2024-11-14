import React from 'react';

function Books(props) {
    // This is the JS part
    const myFav = "Dune";
    const myFavAuthor = "F. Herbert";
    const sHero = {
        name : 'Hulk',
        power : 'Smash'
    }
    const mySchool = "http://www.aurora.edu"

    return (
        <div>
            <h2> Best Sellers </h2>
            <ol>
                <li> The Hobbit </li>
                <li> I Robot </li>
                <li> Book: {myFav} Author:{myFavAuthor} </li>
                <li>  {sHero.name} {sHero.power} </li>
            </ol>
            <p>
              Purchase at <a href={mySchool} > Bookstore </a>
            </p>
        </div>
    );
}

export default Books;