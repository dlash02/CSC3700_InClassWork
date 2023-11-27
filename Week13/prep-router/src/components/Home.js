import React from 'react';
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
function Home() {
    const navigate = useNavigate();
    return (
        <div>
            <h2> Welcome Home</h2>
            <Button onClick={ () => navigate('orderSummary')}> Place Order </Button>
        </div>
    );
}

export default Home;