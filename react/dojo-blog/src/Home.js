import { useState } from 'react'

const Home = () => {

    const [name, setName] = useState('dr4');
    const [age, setAge] = useState(20);

    const handleclick = _ => {
        setName('DO4');
        setAge(21);
    }

    return (
        <div className="content">
            <h2>Home Page</h2>
            <br />
            <button onClick={handleclick}>Click me</button>
            <br /><br />
            <p>Hello my name is {name}, {age} years old.</p>
        </div>
    );
}

export default Home;