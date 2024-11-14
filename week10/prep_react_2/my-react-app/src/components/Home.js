import { useState } from "react";
const Home = () => {
    const [name, setName] = useState("Hulk");
    const [age, setAge] = useState(135);
    const handleClickHome = ( inName ) => {
        console.log("(Home) That clicked me off inName:" + {inName});
        setName(inName);
        setAge( 18 )
    }

    return (
        <nav className='home'>
            <h2> Welcome Home Human</h2>
            <p> I am:{name} Age:{age}</p>
            <h2 style={{
                color: 'blue',
                backgroundColor: 'yellow',
                borderRadius: '8px'
            }}> An Inline Spec</h2>
            <button  className='btn btn-primary' onClick={() =>
                handleClickHome("Spiderman")}> Click To Start Me! </button>
        </nav>
    )
}
export default Home;

