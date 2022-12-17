const Home = () => {

    function handleClick (e) {
        console.log('Hello', e);
    }

    const handleClickAgain = (name) => {
        console.log(`Hello, ${name}`);
    }

    return (
        <div className="content">
            <h2>Home Page</h2>
            <button onClick={ handleClick }>Click me</button>
            <button onClick={ handleClickAgain }>Click me again</button> {/* but I want to pass args */}
            {/* <button onClick={ handleClickAgain() }>Click me again</button> => will invoke the func automatically and return undefined*/}
            <button onClick={ _ => handleClickAgain('dr4') }>The soln</button>
        </div>
    );
}

export default Home;