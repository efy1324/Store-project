import React from 'react'
import { useStore } from '../../context/store.provider'
// here need to show the whole information from the cartOrderForm on any client order
import './ClientsOrders.css'
import emailjs from 'emailjs-com'



function ClientsOrders() {
  const { clients, } = useStore()

  console.log(clients);


  function sendEmail(e) {
    e.preventDefault()

    emailjs.sendForm('service_b5iiz0p', 'template_3qczj0s', e.target, 'Agk1F7ErqUg3L6lOM')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

  }

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
       <form onSubmit={sendEmail}>
      <textarea id='massage-to-client' name='massage'rows="2" cols="50" ></textarea>
       <button type='submit' className='btn-order-clients'>order completed</button>  
       </form> 
        </div>
        </div>
    </div>
  )
}

export default ClientsOrders