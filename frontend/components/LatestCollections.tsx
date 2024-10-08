import React from 'react'
import { Products } from '@/utils/datas'
import Title from './Title'
import { ProductItem } from './ProductItem'


const LatestCollections = () => {

    const latestproduct = Products.slice(0, 10);
    

  return (
    <div className='my-10'>
       <div className='text-center py-8 text-3xl'>
          <Title text1={'LATEST'} text2={'COLLECTIONS'}/>
          <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          Explore our latest collection of must-have dresses, curated to elevate your style and comfort.
          </p>
       </div>

         <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                latestproduct.map((item,index)=> (
                    <ProductItem id={item.id} image={item.image[0]} name={item.name} price={item.price} key={index}/>
                ))
            }
         </div>
    </div>
  )
}

export default LatestCollections