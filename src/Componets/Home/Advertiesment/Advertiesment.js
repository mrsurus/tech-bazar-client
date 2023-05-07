import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AdvertiseCard from './AdvertiseCard';

const Advertiesment = () => {

    const {data :adInfo=[]} = useQuery({
        queryKey : ['advertise'],
        queryFn: async ()=>{
            const res = await fetch(`https://tech-bazar2-server.vercel.app/advertise`)
            const data = await res.json()
            return data
        }
    })

    console.log(adInfo.length);

    if(adInfo.length===0){
        return;
    }
     return (
        <div className='md:mx-12 mt-12 '>
            <p className='text-xl font-bold pl-2'>Advertisement</p>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5 mx-auto p-10 mt-3 rounded-md bg-blue-300'>
            {
                adInfo.map(ad => <AdvertiseCard key={ad._id} ad={ad}></AdvertiseCard>)
            }
            </div>
        </div>
    );
};

export default Advertiesment;
