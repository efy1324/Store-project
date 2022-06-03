//showing the products and option to increase ot decrease the amount
//
//form for the user to add his detailsand cradit card to do it in deferent component?

//on click submit: showing to the user a massage, sending to the admin order details as one order maby to study about some Api that sending mail to the user and the admin.
import React, { useContext } from 'react'
import { storeContext } from '../../context/context'


function CartOrderForm() {
  const { choosenProducts } = useContext(storeContext)

  const handleClickAdd = () => {
    // adding numProduct  + 1 and adding the price number to the total price
  }
  // after submit set the num of product inside cart to 0
  return (
    <div>
      <div className='oneOrder' >
        <span>product: {choosenProducts.map(product => <h4>{product}</h4> )}</span><br/>
        <button onClick={handleClickAdd}> + הוסף כמות</button><br/>
        <span>total price</span>
        <form>
          <label htmlFor="firstName">שם פרטי</label>
          <input type="text" value={"firstName"} /><br/>
          <label htmlFor="firstName">שם משפחה</label>
          <input type="text" value= {"lastName"}/><br/>
          <label htmlFor="Mail"> מייל</label>
          <input type="email" value={"lasdlfkdsa@gamil.com"} /><br/>
          <button>הזמן</button>
        </form>

      </div>
    </div>
  )
}

export default CartOrderForm