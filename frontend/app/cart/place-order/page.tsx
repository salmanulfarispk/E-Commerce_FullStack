"use client"
import { CartTotal } from '@/components/CartTotal'
import Title from '@/components/Title'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const PlaceOrderpage = () => {

  const [selected,setSelected]=useState('cod')
    const router=useRouter()

  return (
    <div className='flex flex-col sm:flex-row justify-between  gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
          <div className='text-xl sm:text-2xl my-3'>
                <Title text1={'DELIVERY'} text2={'INFORMATION'}/>
          </div>
          <div className='flex gap-3'>
             <input type="text" placeholder='First name' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'/>
             <input type="text" placeholder='Last name' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'/>
          </div>

           <input type="email" placeholder='Email address' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'/>
            <input type="text" placeholder='Street' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'/>
        
            <div className='grid grid-cols-2 gap-3'>
             <input type="text" placeholder='City' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'/>
             <input type="text" placeholder='State' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'/>
             <input type="number" placeholder='Zipcode' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'/>
             <input type="text" placeholder='Country' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'/>
            </div>

            <input type="number" placeholder='Phone' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'/>
             
      </div>


      {/**-----------Right side------------ */}

        <div className='mt-8'>
          <div className='mt-8 min-w-80'>
            <CartTotal/>
          </div>

          <div className='mt-12'>
              <Title text1={'PAYMENT'} text2={'METHOD'}/>
              <div className='flex gap-3 flex-col lg:flex-row'>
                  <div className='flex items-center gap-3 border p-2 px-3 cursor-pointer' onClick={()=> setSelected('stripe')}>
                      <span className={`min-w-3.5 h-3.5 border rounded-full ${selected === "stripe"? "bg-green-500" : ""}`}></span>
                      <img src='/stripe.png'alt='stripe-img'className='h-5 mx-4'/>
                  </div>
                  <div className='flex items-center gap-3 border p-2 px-3 cursor-pointer' onClick={()=> setSelected('razor')}>
                      <span className={`min-w-3.5 h-3.5 border rounded-full ${selected === "razor" ? "bg-green-500" : ""}`}></span>
                      <img src='/razor.png'alt='razorpay-img'className='h-5 mx-4'/>
                  </div>
                  <div className='flex items-center gap-3 border p-2 px-3 cursor-pointer'onClick={()=> setSelected('cod')}>
                      <span className={`min-w-3.5 h-3.5 border rounded-full ${selected === "cod"? "bg-green-500" : ""}`} ></span>
                      <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
                  </div>
              </div>

                 <div className='w-full text-center md:text-end mt-8'>
                   <button className='w-full md:w-56 bg-black text-white px-16 py-3 text-sm' onClick={()=> router.push("/orders")}>
                        PLACE ORDER
                   </button>
                 </div>

          </div>
        </div>

    </div>
  )
}

export default PlaceOrderpage