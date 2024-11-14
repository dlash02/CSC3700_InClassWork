import React from 'react';

function Purchase(props) {
    // JS code here
    // JS code her0e
    const heros = [
        { name : 'Hulk', alias: 'Green Guy', powers :["Smash", "Jumps good"], weapons: []},
        { name: "Thor", alias: "God of Thunder", powers: ["Lightning", "Super Strength", "Flight"], weapons: ["Mjolnir", "Stormbreaker"] },
        { name: "Iron Man", alias: "Tony Stark", powers: ["Genius Intellect", "Powered Armor Suit", "Flight"],
            weapons: ["Repulsors", "Unibeam", "Missiles"] },
        { name: "Black Widow", alias: "Natasha Romanoff", powers: ["Expert Martial Artist", "Espionage", "Stealth"],
            weapons: ["Batons", "Guns", "Explosives"] },
        { name: "Spider-Man", alias: "Friendly Neighborhood Spider-Man", powers: ["Wall-Crawling", "Super Agility", "Spider-Sense"],
            weapons: ["Web Shooters"] }
    ];
    const [ row, setRow ] = React.useState(heros[0]);

    const handleHero = ( name ) => {
      let row = heros.find((hero) => hero.name === name);
        if ( row ){
            setRow( row );
        } else {
            let bRow = {};
            bRow.name = "Name not found"
            setRow( bRow );
        }
    }

    return (
        <div>
            <h3> The Hero </h3>
            <table className="table-bordered">
                <tr>
                    <th> Name </th><th> Alias </th><th> Power </th>
                </tr>
                <tbody>
                <tr>
                    <td> {row.name}</td>
                    <td> {row.alias} </td>
                    <td> {row.powers.map(( power, index) => (
                        <span key={index}> {power}
                            {index < row.powers.length-1 ? ',' : "" }
                        </span>
                    ))} </td>
                </tr>
                </tbody>
            </table>
            <h2> Buy it Today </h2>
            <button className="btn btn-danger"
                    onClick={ () => {
                            handleHero("Thor")
                        }
                    }
            > Click to Thor
            </button>
            <button className="btn btn-primary"
                    onClick={ () => {
                            handleHero("Iron Man")
                        }
                    }
            > Click to Iron Man
            </button>
        </div>
    );
}

export default Purchase;