const Square = () => {
    const handleClick = () => {
        
    }

    return(
        <button className="square" onClick={handleClick}></button>
    );
}

const Row = () => {
    return(
        <div className="row">
            <Square />
            <Square />
            <Square />
        </div>
    )
}

const GameArea = () => {
    return(
        <>
            <Row />
            <Row />
            <Row />
        </>
    )
};

export default GameArea;