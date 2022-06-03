// an input and button 
// inputs of password that need to be === 55abre33
// button if(password) route to the admin component of main page admin
// main page need to have crud products with search and  ( order details) (showing Data by graph)(list without pictures and with all categorry code)

import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

function AdminInput() {

  const [value, setValue] = useState("")
  const password = '55abre33'
  const location = useLocation();
  const navigate = useNavigate();
  const onInputChange = ({ target: { value } }) => {
    console.log(value);
    setValue(value)
  }
  const onAdminClick = () => {
    if (value === password) {
    console.log("clicked")
    const { pathname } = location;
    navigate(pathname + "/Admin_site//*");
    }
    else{
      setValue("")
    }
  }

  return (
    <div className='adminEntry'>
      <input onChange={onInputChange} type="password" value={value} />
      <button onClick={onAdminClick}>entry</button>
    </div>
  )
}

export default AdminInput;