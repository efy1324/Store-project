//showing num of products and total price, and icon of cart
// onClick need to route to CartOrderForm component
import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { storeContext } from '../../context/context';

function Cart() {
  const location = useLocation();
  const navigate = useNavigate();
  const {numProducts} = useContext(storeContext)

  const handleNavigation = () => {
    console.log("clicked")
    const { pathname } = location;
    navigate(pathname + "/order_form");
  }



  return (
    <button onClick={handleNavigation}>
      <i></i>
      <span>{numProducts}</span>
    </button>
  )
}

export default Cart