import './App.css';
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
      {/* <NavBar> => will not work */}
      <NavBar /> {/* <NavBar></NavBar> => also works */}
    </div>
  );
}

export default App;
