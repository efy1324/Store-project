import React from 'react'
import { useStore } from '../../context/store.provider'
// here need to show the whole information from the cartOrderForm on any client order
import './ClientsOrders.css'




function ClientsOrders() {
  const { clients, } = useStore()

  console.log(clients);

  return (
    <div className='clients-orders'>
      <div className='client-card'>
      <div className='client-details-card'>
      {clients.map(({ firstName, lastName, number, Email }, index) => (
        <div key={index}>
         <h3>client details</h3>
          <div>name:  {firstName}</div>
          <div>lastName:  {lastName}</div>
          <div> mail:   {Email}</div>
          <div>phone:  {number}</div>
        </div>
      ))}
      </div>
      <div className='client-order-details'>
        <h3>oreder-details</h3>
       <div>productName:</div> 
       <div>category:</div>   
       <div>total price:</div>
       <button className='btn-order-clients'>order completed</button>   
        </div>
        </div>
    </div>
  )
}

export default ClientsOrders