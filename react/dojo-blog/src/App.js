import NavBar from './NavBar';
import Home from './Home';

function App() {
  return (
    <div className="App">
      {/* <NavBar> => will not work */}
      <NavBar /> {/* <NavBar></NavBar> => also works */}
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
