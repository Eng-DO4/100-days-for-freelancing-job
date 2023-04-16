import logo from './logo.svg';
import './App.css';

import Card from './Card'

function App() {
  return (
    <div className="App">
      <Card h2="First Card's h2" h3="First Card's h3" />
      <Card h2="second Card's h2" h3="second Card's h3" />
      <Card h2="third Card's h2" h3="third Card's h3" />
    </div>
  );
}

export default App;