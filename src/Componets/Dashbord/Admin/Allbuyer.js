import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Swal from 'sweetalert2';

const AllBuyer = () => {
    const {data:buyers=[],refetch} =useQuery({
        queryKey: ['users'],
        queryFn: async()=> {
            const res= await fetch('https://tech-bazar2-server.vercel.app/users/allbuyer')
            const data = await res.json()
            return data
        }
    })

    console.log(buyers);

    const handleDeleteBuyer=(id)=>{
        fetch(`https://tech-bazar2-server.vercel.app/users/${id}`,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            refetch()
            Swal.fire({
              icon: 'error',
              title: 'Deleted',
              text: 'Buyer deleted Successfully!',
              
            })
        })
    }

    return (
        <div className='mx-24'>
        <h1 className='text-center text-2xl my-5'>There is {buyers.length} Buyers</h1>
        <div className="overflow-x-auto">
            <table className="table w-full bg-base-200">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Delete</th>
                </tr>
              </thead>
        {
            buyers.map((buyer, i) => 
              <tbody key={buyer._id}>
                <tr>
                  <th>{i+1}</th>
                  <td>{buyer.name}</td>
                  <td>{buyer.email}</td>
                  <td onClick={()=>handleDeleteBuyer(buyer._id)} className='btn btn-error'>X</td>
                </tr>
              </tbody>
            )
        }
        </table>
          </div>
    </div>
    );
};

export default AllBuyer;