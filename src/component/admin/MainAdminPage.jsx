import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import ClientsOrders from './ClientsOrders';
import CrudProducts from './CrudProducts';
import StoreGraphes from './StoreGraphes';
// here need to show the whole products with the search opion that under every card there is buttons edit and delete
// and on the right side there is create this will be open a form that on submit need to creat the element inside the mokeApi
function MainAdminPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const onClickGraphes = () => {
    const { pathname } = location;
    navigate(pathname + "/Store_graphes");
  }
  const onClickOrders = () => {
    const { pathname } = location;
    navigate(pathname + "/Client_orders");
  }

  return (
    <div>
      MainAdminPage




      <Routes>
        <Route path="/" element={<CrudProducts />} />
        <Route path="/Store_graphes" element={<StoreGraphes />} />
        <Route path="/Client_orders" element={<ClientsOrders />} />
      </Routes>
      <button onClick={onClickGraphes}> Data graphes</button>
      <button onClick={onClickOrders}> הזמנות</button>
    </div>
  )
}

export default MainAdminPage;