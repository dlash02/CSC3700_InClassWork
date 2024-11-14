import React from 'react';

function PurchasePrepV2(props) {
    // JS code her0e
    const heros = [
        { name : 'Hulk', alias: 'Green Guy', powers :["Smash", "Flu"]},
        { name: "Thor", alias: "God of Thunder", powers: ["Lightning", "Super Strength", "Flight"], weapons: ["Mjolnir", "Stormbreaker"] },
        { name: "Iron Man", alias: "Tony Stark", powers: ["Genius Intellect", "Powered Armor Suit", "Flight"],
            weapons: ["Repulsors", "Unibeam", "Missiles"] },
        { name: "Black Widow", alias: "Natasha Romanoff", powers: ["Expert Martial Artist", "Espionage", "Stealth"],
            weapons: ["Batons", "Guns", "Explosives"] },
        { name: "Spider-Man", alias: "Friendly Neighborhood Spider-Man", powers: ["Wall-Crawling", "Super Agility", "Spider-Sense"],
            weapons: ["Web Shooters"] }
    ];
    const [row, setRow] = React.useState(heros[0]);
    const handleHero = ( name ) => {
        let row = heros.find((hero) => hero.name === name);
        if ( row ){
            setRow(row);
        } else {
            row = {};
            row.name = "Not Found"
            setRow( row );
        }
    }
    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr><th>Name</th><th>Alias</th><th> Powers </th></tr>
                </thead>
                <tbody>
                    <tr><td>{row.name}</td><td>{row.alias}</td>
                        <td>
                            {/*{row.powers.length}*/}
                            {
                                // row.powers.map(( power ) =>   ( {power} ))
                            }
                            {/*{ row.powers.map(( power, index ) =>*/}
                            {/*    <span key={index}>{power} </span>)}*/}
                            {/*        { row.powers.map(( power, index ) => <span key={index}>{power}*/}
                            {/*        </span>)*/}
                            {/*        }*/}
                            {row.powers.map((power, index) => (
                                <span key={index}>
                                    {power}{index < row.powers.length - 1 ? ', ' : ''}
                                  </span>
                            ))}

                        </td>
                    </tr>
                </tbody>
            </table>

            <button className="btn btn-primary"
                    onClick={
                        () => {
                            handleHero("Iron Man");
                        }
                    }
            >
                Click For Iron Man
            </button>
            <button className="btn btn-danger"
                    onClick={
                        () => {
                            handleHero("Thor")
                        }
                    }
            >
                Click For Thor
            </button>
        </div>
    );
}

export default PurchasePrepV2;