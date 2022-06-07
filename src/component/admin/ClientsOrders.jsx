import React from 'react'
import { useStore } from '../../context/store.provider'
// here need to show the whole information from the cartOrderForm on any client order

function ClientsOrders() {
  const { clients } = useStore()

  console.log(clients);

  return (
    <div className='clients-orders'>
      ClientsOrders
      {clients.map(({ firstName, lastName, number, Email }, index) => (
        <div key={index}>
          details:
          <div>name:{firstName}</div>
          <div>lastName:{lastName}</div>
          <div> mail: {Email}</div>
          <div>phone:{number}</div>
        </div>
      ))}
      <div className='client-order-card'>
        one customer
        productName:
        category:
        id:
        total price:

      </div>
    </div>
  )
}

export default ClientsOrders