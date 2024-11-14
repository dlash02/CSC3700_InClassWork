import React from 'react';

function Purchase(props) {
    // JS code here
    const handleIt = () => {
        console.log( "Clicked the button")
    }
    const handleHero = ( name ) => {
        console.log( `Clicked name ${name}` );
    }
    let hero = "Spidey"
    return (
        <div>
            <h2> Buy it Today </h2>
            <button onClick={handleIt} className="btn btn-primary">
                Click to purchase
            </button>
            <button className="btn btn-danger"
                    onClick={
                        () => {
                            handleHero(hero)
                            console.log(" Sending hulk along")
                        }
                    }
            >
                Click to Hulk
            </button>
        </div>
    );
}

export default Purchase;