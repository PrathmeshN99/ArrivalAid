import React from 'react'
import houseimg from '../images/house.jpg'

export default function LocationCard(props) {
   
   const cluster=new Map([
    ["0","Most Likable"],
    ["1","Neutral"],
    ["2","Not Likable"]
   ])

//    console.log(cluster.get(String(props.data.Cluster)))
  return (
    <div className=' w-fit border border-gray-900 p-5 rounded-lg shadow-xl m-5 hover:cursor-pointer'>
        <div className=' flex flex-col justify-center'>
            <div className='flex flex-col'>
           <div className='font-bold text-2xl'>{props.data.Apartment_Name}
           </div>
           <div className='text-sm text-zinc-800 m-1'>{props.data.Apartment_Location}</div>
           </div>
           <div className='flex flex-row justity-around gap-20 items-center'>
        
            <div>
               <img src={houseimg} height={300} width={350}></img>
            </div>
            <div className='flex flex-col gap-7'>
                <div className='flex flex-row gap-3'>

                <span>
               <div className='flex flex-col'>
                <div className='font-bold text-md'>Deposit
               </div>
                 <div className='text-sm m-2'>{props.data.Apartment_Deposit}</div>
                     </div>
            </span>

                {/* rent  */}
          <span>
                <div className='flex flex-col'>
                    <div className='font-bold text-md'>Rent
                </div>
                    <div className='text-sm '>{props.data.Apartment_Rent}</div>
                    </div>
           </span>
          {/* Deposit  */}
           
                </div>
                
                <div className='flex flex-row gap-3'>
                    {/* Negotiable */}
               <span>
               <div className='flex flex-col'>
                <div className='font-bold text-md'>Negotiable
               </div>
                 <div className='text-sm'>{props.data.Apartment_Negotiable}</div>
                     </div>
              </span> 
              {/* Cluster */}
               <span>
               <div className='flex flex-col'>
                <div className='font-bold text-md'>Flat
               </div>
                 <div className='text-sm'>{cluster.get(String(props.data.Cluster))}</div>
                     </div>
                </span> 
                </div>
            </div>
            </div>
         
        </div>
    </div>
  )
}
