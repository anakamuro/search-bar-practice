import logo from './logo.svg';
import './App.css';
import Searchbar from "./Searchbar"

const products = [
  "tooth paste",
  "tooth brush",
  "mouth wash",
  "dental floss",
  "mouth guard"
] 

function App() {
  return (
    <div className="App">
      <Searchbar products={products}/>
    </div>
  );
}

export default App;
