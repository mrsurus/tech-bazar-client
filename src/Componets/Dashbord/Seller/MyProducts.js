import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Context/AuthProvider';

const MyProducts = () => {
    const { user } = useContext(AuthContext)

    const { data: myproducts = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(`https://tech-bazar2-server.vercel.app/products?email=${user?.email}`)
            const data = await res.json()
            return data
        }
    })

    const handleAdvertise = data =>{

       const adDataInfo = {
        name: data.name,
        category: data.category,
        img:  data.img,
        location: data.location,
        seller: user?.displayName,
        email: user?.email,
        number: data.number,
        condition: data.condition,
        price: data.price,
        original_price: data.original_price,
        used_year: data.used_year,
        date: data.date,
        sellerStatus: data.sellerStatus
        }
        console.log(adDataInfo)

        fetch(`https://tech-bazar2-server.vercel.app/advertise`,{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(adDataInfo)

        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.acknowledged){
                Swal.fire(
                    'Good job!',
                    ' Advertisment added Successfully!',
                    'success'
                  )
            }    
        })
    }
    
    return (
        <div className='mx-3 '>
             <h3 className="text-center text-3xl my-5 ">You Have {myproducts.length} Products</h3>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
               
                {
                    myproducts.map(myproduct =>
                        <div key={myproduct._id} className="card card-side bg-base-100 shadow-2xl my-5">
                            <div className='w-1/2'>
                                <figure><img src={myproduct.img} alt="Movie" /></figure>
                            </div>
                            <div className="card-body">
                                <h2 className="card-title">{myproduct.name}</h2>
                                <p>Brand: {myproduct.brand}</p>
                                <p>Price: {myproduct.price}$</p>
                                <p>Original Price: {myproduct.original_price}$</p>
                                <p>Used: {myproduct.used_year} year</p>
                                <button className='btn btn-success '>Avilable</button>
                                <button onClick={()=>handleAdvertise(myproduct)} className='btn  '>Ad</button>
                            </div>
                        </div>)
                }
            </div>

        </div>
    );
};

export default MyProducts;