import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import OrderModal from './OrderModer';
import ProductCard from './ProductCard';

const Products = () => {
    const [modalInfo, setModalInfo] = useState(null)
    const data = useLoaderData()
    console.log(modalInfo);
    
    return (
        <div className=' bg-blue-300 p-7 my-7 rounded-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-5/6 mx-auto gap-5'>
            {data?.map(data => <ProductCard
            setModalInfo={setModalInfo}
             data={data }
             key={data._id}></ProductCard>)}

             
                {modalInfo && <OrderModal
                setModalInfo={setModalInfo}
                modalInfo={modalInfo}>
                    </OrderModal>}
             

        </div>
    );
};

export default Products;