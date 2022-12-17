import NavBar from './NavBar';
import Home from './Home';

function App() {
  return (
    <div className="App">
      {/* <NavBar> => will not work */}
      <NavBar /> {/* <NavBar></NavBar> => also works */}
      <Home />
    </div>
  );
}

export default App;
