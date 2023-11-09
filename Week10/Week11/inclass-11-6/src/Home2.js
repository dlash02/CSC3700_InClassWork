import React, {useState} from 'react';
// import Books from "./Books";
import {Button} from "bootstrap-react";
import {Col, Row} from "react-bootstrap";

function Home2(props) {
    const[ name, setName] = useState('');
    const[ age, setAge] = useState('');
    const[ power, setPower] = useState('');
    const superHeros = [
        {'Hulk' : {Age: 135, Power: 'Smash'}},
        {'Spiderman' : {Age: 16, Power: 'Webs'}},
        {'IronMan' : {Age: 45, Power: 'The Suit'}}
    ]
    // Approximation
    // function findThisRow( inName ){
    //     for( let i=0; i<superHeros.length; i++){
    //         let k = superHeros[i].keys[0];
    //         if ( k == inName) return superHeros[i];
    //     }
    //     return null;
    // }
    const handleClick1 = ( inName ) => {
        console.log(`inName=${inName}`);
        let k = Object.keys( superHeros[0] );
        console.log( "k="); console.log( k );


        const row = superHeros.find( heroObj => {
             return Object.keys( heroObj)[0] === inName;
        })
        console.log( "row"); console.log( row );
        let r = Object.keys(row)[0];
        setName( r );
        setAge( row[r].Age );
        setPower( row[r].Power );
    }
    // const name="Hulk";
    // const age = 135;
    // const power = "Smash!"
    return (
        <div>
            <Row>
                <Col>
                    <h2> Welcome Human</h2>
                </Col>
            </Row>
            <Row>
                <Col sm={3}> </Col>
                <Col sm={4}> {name} is {age} years old and power is {power} </Col>
            </Row>
            <Row>
                <Col sm={4}>
                    <Button variant="danger" onClick={ () => handleClick1("IronMan")} > Ironman </Button>
                </Col>
                <Col sm={4}>
                    <Button variant="danger" onClick={ () => handleClick1("Spiderman")} > Spiderman </Button>

                </Col>
                <Col sm={4}>
                    <Button variant="danger" onClick={ () => handleClick1("Hulk")} > Hulk </Button>

                </Col>
            </Row>
        </div>
    );
}

export default Home2;