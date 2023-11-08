import React from 'react';
import Books from "./Books";
import {Button} from "bootstrap-react";

function Home(props) {
    const likes = 500;
    const handleClick = () =>  {
        console.log( "Well that clicked my off")
    }
    const handleClick2 = ( name ) =>  {
        console.log( `Well ${name} that clicked my off`)
    }
    return (
        <div>
            <h2> Welcome Home </h2>
            <p> So far this many {likes} on my page  </p>
            <Button onClick={handleClick} variant="primary"> Click Me </Button>
            <Button onClick={ () => {
                handleClick2("Hulk")}} variant="primary"> Click Me2 </Button>
            <Books />
        </div>
    );
}

export default Home;