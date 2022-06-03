import React, { useContext, useEffect, useState } from 'react'
import { storeContext } from '../../../context/context'
import StoreData from '../GettingData/StoreData'
// need to be able to free search from the whole storeData and display it, need to remember to clear after that in any change after 0.5 seccond will show the resault (if fillter so to do another state and not touching the main storeData)

function MainSearchBar() {
  const { StoreData, searchData, setSearchData, value, setValue } = useContext(storeContext)


  const onInputChange = ({ target: { value } }) => {
    console.log(value);
    setValue(value)

      const searchByProductName = searchData.filter((product) => {
          if (product.productName.includes(value)) {
            return product
          }
      });
      setSearchData(searchByProductName)
      // const searchByCategory = searchData.filter((product) => {
      //     if (product.category.includes(value)) {
      //       return product
      //     }
      // });
      // setSearchData(searchByCategory)
      // const searchById = searchData.filter((product) => {
      //   //this need to be in setTimeout to wait untill the user will type the whole search
      //     if (product.id === value) {
      //       return product
      //     }
      // });
      // setSearchData(searchById)
  }

  // need to do some loop that checking insid the whole data if this input inside and the same time deleting from the screen the just the includes ones


  return (
    <div>
      <label htmlFor="search">search:</label>
      <input onChange={onInputChange} type="text" value={value} />
    </div>
  )
}

export default MainSearchBar