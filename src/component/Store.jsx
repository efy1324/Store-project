import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminInput from './admin/AdminInput'
import MainAdminPage from './admin/MainAdminPage'
import Cart from './user/Cart'
import CartOrderForm from './user/CartOrderForm'
import StoreData from './user/GettingData/StoreData'
// import productsDataForStore from './user/GettingData/productsDataExcel'
import ProductCard from './user/ProductCard'
import MainSearchBar from './user/Search/MainSearchBar'
function Store() {
  return (
    <div className='mainPage'>
        <Routes>
          <Route path="/" element={
            <>
              <AdminInput />
              <Cart />
              <MainSearchBar/>
              <StoreData />
              <ProductCard />
            </>
          } />
          <Route path="/order_form" element={<CartOrderForm />} />
          <Route path="/Admin_site//*" element={<MainAdminPage />} />
        </Routes>
        {/* {productsDataForStore.map(product => <ProductCard keyforProduct={product[0]} name={product[3]} imgUrl={product[5]} cattegory={product[2]} price={product[4]} id={product[0]} />)} */}
    </div>
  )
}

export default Store