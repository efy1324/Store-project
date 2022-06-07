import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from '../ProductCard'
import { storeContext } from '../../../context/context'
// import './GridCard.css';

function StoreData() {

  const { storeData, setStoreData} = useContext(storeContext)

  useEffect(() => {
    const gettingData = async () => {
      const response = await axios.get('https://cors-anywhere.herokuapp.com/https://apimocha.com/efy1324/store')
      console.log(response);
      const storeData1 = response.data
      // console.log(storeData1);
      setStoreData(storeData1)
    }
    gettingData()
  }, [])
  // useEffect(()=>{
  //   if(!storeData==[]){
  //     setSearchData([...storeData])
  //   }
  // },[storeData])

  return (
    < >
      {/* {!storeData ? <h1>hello world</h1> : storeData.map(({ id, category, imgUrl, price, productName }) => <ProductCard keyforProduct={id} name={productName} imgUrl={imgUrl} cattegory={category} price={price} id={id} />)} */}
      {/* { storeData?.map((product) => <ProductCard {product.id} />)} */}
    </>
  )
}

export default StoreData;