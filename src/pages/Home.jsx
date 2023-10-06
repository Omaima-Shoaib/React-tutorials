import React from 'react'
import './style.css'
import { storeData } from '../Data'
import Product from '../components/Product'
const Home = () => {
  return (
    <div className=''> 
    <p className='text-center font-extrabold text-xl text-slate-800'>Glasses store</p>
    {/* <p className='text-2xl tracking-tighter font-semibold'>New In</p> */}
    <div className='flex flex-col  m-auto w-4/5  md:w-full  py-3 md:grid grid-cols-3 gap-4 px-5'>
    {storeData.map((item,i)=>{
        return <Product item={item} key={i}></Product>
    })}
    </div>
    </div>
  )
}

export default Home