import './App.css';
import Header from './components/Header';
import Products from './components/Products';
// import Test1 from './components/Test1';
import React, { useEffect, useState } from 'react'
import Loading from './components/Loading';
import MyContext from './MyContext';

function App() {

  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([])
  const [productsData, setProductData] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const getApiProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products')
      const dataFromResponse = await response.json()
      setProductData(dataFromResponse);
      setLoading(false);
      // console.log(dataFromResponse);
    } catch (e) {
      console.log("Error getting" + e);
    }
  }
  useEffect(() => {
    // console.log(productsData)
  }, [productsData]);

  useEffect(() => {
    getApiProducts();
  }, [])

  useEffect(() => { setLoading(false) }, [productsData]);

  const addProductToCart = (product) => {
    const productInCart = cart.findIndex(p => p.id === product.id);
    if (productInCart === -1) {
      const newProductToCart = { ...product, amount: 1 }
      setCart(prev => [newProductToCart, prev])
    } else {
      const newCart = [...cart];
      newCart[productInCart].amount++;
      setCart(newCart);
    }
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const filterProductsByCategory = (category) => {
    if (category === '/') {
      setFilteredProducts(productsData)
      return
    }
    const filteredItems = productsData.filter(p => p.category === category);
    setFilteredProducts(filteredItems);
  }

  return (
    <MyContext.Provider value={{ productsData, filterProductsByCategory, filteredProducts }}  >
      <div className="App">
        {/* <Loading /> */}
        {loading && <Loading />}

        <Header />
        <Products addProductToCart={addProductToCart} />
      </div>
    </MyContext.Provider>
  );
}

export default App;
