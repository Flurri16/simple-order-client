import React from 'react'

export default function ItemPage() {
  return (
    <div className='flex bg-brown'>
        <div className="w-[40%]">
            <img src="./img/eu.jpg" alt="" className='w-full' />
        </div>
        <div className="flex flex-col w-[60%] px-8">
            <h1 className='text-4xl text-white font-semibold mb-4'>Mapa Europy</h1>
            <span className='text-xl text-white'>⭐ 4.5/5 <span className='pl-5'>🛒123 orders</span></span>
            <p className='text-white text-2xl py-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt debitis molestiae adipisci tempora, consequatur esse. Perferendis soluta reprehenderit veniam minima.</p>
            <ul className='list-disc pl-4'>
                <li className='text-white font-semibold'>Stylne</li>
                <li className='text-white font-semibold'>Kolory</li>
                <li className='text-white font-semibold'>Dla dzieci</li>
                <li className='text-white font-semibold'>Magnes (16 szt.)</li>
            </ul>
            <span className='text-4xl text-yellow-400 pt-8 font-bold'>34,66zł</span>
            <button className='bg-orange py-2 px-4 text-2xl text-slate-50 font-semibold mt-4'>Kupić</button>
        </div>
    </div>
  )
}
