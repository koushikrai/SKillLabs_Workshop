import React from 'react';
export default function Home(){
    return(
        <div>
           <nav className='flex flex-row bg-yellow-700 rounded space-x-8 justify-around'>
           <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"/>
           <div>
            <input
            className='w-[500px] border shadow rounded'
            placeholder='Search of the products'
            type='text'/>
            <button className='bg-purple-700 text-white rounded p-2 pb-5 pt-5 pr-5 pl-5' >Search</button>
            </div>
            <button className=' bg-green-700 text-white rounded p-2 pb-5 pt-5 pr-5 pl-5'>home</button>
            <button className=' bg-blue-700 text-white rounded p-2 pb-5 pt-5 pr-5 pl-5'>Support</button>
            <a href='/login' className=' bg-orange-700 text-white rounded p-2 pb-5 pt-5 pr-5 pl-5'>login</a>
           
           </nav>
           <div className='w-{500px} mx-auto'>
            <img src='https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/a1417d7367e71581.jpeg?q=20'></img>
           </div>
           <div className='flex flex-col m-4'>
            <div className='bg-grey-200 rounded shadow'>
              <img src="https://tse1.mm.bing.net/th?id=OIP.jkxxocyKh_-9PqKNNkVL4gHaHi&pid=Api&P=0&h=180"></img>
              <p>Best selling tv</p>
            </div>

           </div>
       </div>
    
    )        
}