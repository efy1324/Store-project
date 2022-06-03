import React, { useContext, useEffect, useState } from 'react'
import { storeContext } from '../../context/context'
import './ProductCard.css'
import './GridCard.css';


function ProductCard() {
  const { setNumProducts, storeData, searchData, setSearchData, value, setChoosenProducts,choosenProducts } = useContext(storeContext)
  // const {  imgUrl, name, cattegory, price } = SearchData;

  const handleClickAddToCart = (e) => {
    setNumProducts(prev => prev + 1)
    const newProduct = [...choosenProducts]
    newProduct.push(e.target.parentElement.innerText)
    setChoosenProducts(newProduct)
    // set
  }
  useEffect(() => {

  }, [searchData])
  // const fillterData = searchData.filter((product) => {
  //   if (value === '') {
  //     return product
  //   }
  //   else {
  //     // console.log(product);
  //     setTimeout(() => {
  //       console.log((Object.values(product).includes(value))) 
  //     }, 500);
  //   }
  // })
  useEffect(() => {
    setTimeout(() => {
      const copiedData = [...storeData]
      setSearchData(copiedData)
    }, 500);
  }, [storeData])

  return (
    <div className='products-con'>
      {!searchData ? <h1>hello world</h1> : searchData.map(({ id, category, imgUrl, price, productName }) =>
        <div className="container" key={id}>
          <div className="card">
            <div className="imgBx">
              <img src={imgUrl} />
              <div className="contentBx">
                <h2>{productName}</h2>
                <div className="size">
                  <h3>{category}</h3>
                </div><br /><br /><br /><br />
                <div className="color">
                  <h3>{price}</h3>
                </div>
                <button onClick={handleClickAddToCart}>Add To Cart</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductCard;
  /* {!storeData ? <h1>hello world</h1> : storeData.map(({ id, category, imgUrl, price, productName }) => <ProductCard keyforProduct={id} name={productName} imgUrl={imgUrl} cattegory={category} price={price} id={id} />)*/