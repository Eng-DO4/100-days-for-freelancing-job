import './App.css';


function App() {
  const vari = 'a variable';
  // const obj = {name: 'dr4', age: 21} => will not work
  return (
    <div className="App">
      <h1>App Components</h1>
      <p>{5}</p>
      <p>{'also str val'}</p>
      <p>{[1, 2, 3, 4 ,['i1', 'i2'], ' arrys']}</p>
      <p>{vari}</p>
      <p>{/* <p>{obj}</p> => will not work */}</p>
      <p>{'JSCode '}{Math.random() * 100}</p>
    </div>
  );
}

export default App;
