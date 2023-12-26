import './App.css';
import ProductsProvider from './context/ProductsContext';
import Navbar from './components/Navbar';
import ProductsList from './components/ProductsList';
function App() {
  return (
    <ProductsProvider > 
    <div className="App">
      <Navbar  />
      <ProductsList  />
    </div>
    </ProductsProvider>
  );
}

export default App;
