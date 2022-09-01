import './App.css';
import Header from './components/Header';
import Products from './components/Products';
// import Test1 from './components/Test1';
import React, { useEffect, useState } from 'react'
import Loading from './components/Loading';

function App() {

  const [loading, setLoading] = useState(true);
  const [productsData, setProductData] = useState([])
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
    getApiProducts();
  }, [])

  useEffect(() => { setLoading(false) }, [productsData]);


  return (
    <div className="App">
      {/* <Loading /> */}
      {loading && <Loading />}
      <Header products={productsData} />
      <Products productsData={productsData} />
    </div>
  );
}

export default App;
