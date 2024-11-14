import {Button} from "react-bootstrap";

const Home = () => {
    const handleClick = () => {
        console.log("That clicked me off")
    }
    return (
        <nav className='home'>
            <h2> Welcome Home Human</h2>
            <h2 style={{
                color: 'blue',
                backgroundColor: 'yellow',
                borderRadius: '8px'
            }}> An Inline Spec</h2>
            <Button onClick={handleClick} variant='primary'> Click To Start Me! </Button>
        </nav>
    )
}
export default Home;

