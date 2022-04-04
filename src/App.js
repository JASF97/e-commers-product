import { CartProvider } from './context/Context'
import './App.css';
import Header from './components/Header'
import ProductItem from './containers/ProductItem';
import CardShop from './containers/CardShop';




function App() {
  

  return (
    <CartProvider>
      <Header />
      <ProductItem />
    </CartProvider>
    
  );
}

export default App;
