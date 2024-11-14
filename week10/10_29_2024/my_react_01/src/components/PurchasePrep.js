import React from 'react';

function PurchasePrep(props) {
    // JS code her0e
    const heros = [
        { name : 'Hulk', alias: 'Green Guy', power :["Smash", "Flu"]},
        { name: "Thor", alias: "God of Thunder", powers: ["Lightning", "Super Strength", "Flight"], weapons: ["Mjolnir", "Stormbreaker"] },
        { name: "Iron Man", alias: "Tony Stark", powers: ["Genius Intellect", "Powered Armor Suit", "Flight"],
            weapons: ["Repulsors", "Unibeam", "Missiles"] },
        { name: "Black Widow", alias: "Natasha Romanoff", powers: ["Expert Martial Artist", "Espionage", "Stealth"],
            weapons: ["Batons", "Guns", "Explosives"] },
        { name: "Spider-Man", alias: "Friendly Neighborhood Spider-Man", powers: ["Wall-Crawling", "Super Agility", "Spider-Sense"],
            weapons: ["Web Shooters"] }
    ];
    const [name, setName] = React.useState("Hulk");
    const [alias, setAlias] = React.useState("Green Guy");
    const handleHero = ( name ) => {
        setName(name);
        const row = heros.find((hero) => hero.name === name);
        if ( row ){
            setAlias(row.alias);
        } else {
            setAlias("Name Not fount");
        }
    }
    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr><th>Name</th><th>Alias</th><th> Powers </th></tr>
                </thead>
                <tbody>
                    <tr><td>{name}</td><td>{alias}</td>

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

export default PurchasePrep;