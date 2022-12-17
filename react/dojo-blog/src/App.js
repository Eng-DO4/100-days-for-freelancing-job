import NavBar from './NavBar';
import Home from './Home';

function App() {
  return (
    <div className="App">
      {/* <NavBar> => will not work */}
      <NavBar /> {/* <NavBar></NavBar> => also works */}
      <div className="content">
        <Home />
        <footer style={{
          position: 'fixed',
          bottom: 0,
          backgroundColor: '#333',
          color: '#ddd'
        }}>Moustafa Yasser &copy; 2022</footer>
      </div>
    </div>
  );
}

export default App;
