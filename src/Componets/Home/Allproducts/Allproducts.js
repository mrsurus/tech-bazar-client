import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import OrderModal from '../../Products/OrderModer';
import AllproductCard from './AllproductCard';

const Allproducts = () => {
    const [modalInfo, setModalInfo] = useState(null)
    console.log(modalInfo);

    const {data :allproducts=[]} = useQuery({
        queryKey : ['allproducts'],
        queryFn: async ()=>{
            const res = await fetch(`https://tech-bazar2-server.vercel.app/allproducts`)
            const data = await res.json()
            return data
        }
    })

    return (
        <div className='md:mx-12  mt-12 '>
            <p className='text-xl font-bold pl-2'>Our Products</p>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5 mx-auto p-10 mt-3 rounded-md bg-blue-300'>
                {
                    allproducts.map(allproduct => 
                    <AllproductCard key={allproduct._id}
                     allproduct={allproduct}
                     setModalInfo={setModalInfo}>

                    </AllproductCard>)
                }
                {modalInfo && <OrderModal
                setModalInfo={setModalInfo}
                modalInfo={modalInfo}>
                    </OrderModal>}
            </div>
        </div>
    );
};

export default Allproducts;