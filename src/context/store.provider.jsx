import axios from "axios";
import React, { useContext, useEffect, useState } from "react";


const StoreContextTemplate = {
  storeProducts: [],
  filteredStoreProducts: [],
  handleFilterKeyInput: () => { }
}

const StoreContext = React.createContext(StoreContextTemplate);


export const useStore = () => {
  return useContext(StoreContext);
};





export const StoreProvider = ({ children }) => {
  const [storeProducts, setStoreProducts] = useState([]);
  const [filteredStoreProducts, setFilteredStoreProducts] = useState([]);
  const [filterKey, setFilterKey] = useState("")
  const [EditProduct, setEditProduct] = useState([])
  const [clients, setClients] = useState([
    {
      firstName: 'אפרים',
      lastName: 'לוי',
      number: '404404',
      Email: 'leviefraim@gmail.com'
    }
  ])


  useEffect(() => {
    async function fetchStoreProducts() {
      const URL = 'https://cors-anywhere.herokuapp.com/https://apimocha.com/efy1324/store'
      const { data: storeProductsData } = await axios.get(URL)
      setStoreProducts(storeProductsData)
    }

    fetchStoreProducts();
  }, []);


  useEffect(() => {
    const id = setTimeout(() => {
      setFilteredStoreProducts(storeProducts.filter(product => product.productName.includes(filterKey) || product.category.includes(filterKey) || product.id === (filterKey)))
    }, 2000)

    return () => clearTimeout(id)
  }, [filterKey, storeProducts])



  const handleFilterKeyInput = ({ target: { value } }) => setFilterKey(value)


  return (
    <StoreContext.Provider value={{ storeProducts, filteredStoreProducts, handleFilterKeyInput, setClients, clients }} >
      {children}
    </StoreContext.Provider>
  )
}