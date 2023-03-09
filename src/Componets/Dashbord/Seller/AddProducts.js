import React, { useContext,  } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Context/AuthProvider';
import useSeller from '../../../Hooks/useSeller'

const AddProducts = () => {
    const {user} = useContext(AuthContext)
    const navigate= useNavigate()
    const [isVerified] = useSeller(user?.email)
    console.log(isVerified);
    const handleAddProducts = (e) => {
        e.preventDefault()
        const form = e.target
        const productName = form.name.value;
        const brand = form.brand.value;
        const price = form.price.value;
        const location = form.location.value;
        const number = form.number.value;
        const orginalPrice = form.originalPrice.value;
        const condition = form.condition.value
        const usedYear = form.usedYear.value;
        const img = form.img.value
        const todayDate = new Date().getDate()
        const month = new Date().getMonth()
        const year = new Date().getFullYear()
        const date = `${todayDate}/${month}/${year}`
        let sellerStatus = ''
        if(isVerified){
            sellerStatus = 'verified'
        }

        console.log('seller status ', sellerStatus);

        const products = {
            name: productName,
            category:brand,
            img:img,
            location:location,
            seller:user?.displayName,
            email: user?.email,
            number: number,
            condition:condition,
            price:price,
            original_price:orginalPrice,
            used_year: usedYear,
            date:date,
            sellerStatus: sellerStatus
        }
        
        fetch(`http://localhost:5000/products`,{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(products)

        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.acknowledged){
                form.reset()
                navigate('/dashboard/myproducts')
                Swal.fire(
                    'Good job!',
                    'Product Added Successfully!',
                    'success'
                  )
            }
            
        })

    }

    return (
        <div>
            <div className='w-2/3 mx-auto'>
                <p className='text-center text-3xl my-5'>Add A Product</p>
                <form onSubmit={handleAddProducts}>
                    <p className='text-xl'>Product Name:</p>
                    <input type="text" className='input input-bordered w-full mb-3 ' placeholder='Name' name="name" id="" required />
                    <p className='text-xl'>Select a Category</p>
                    <select name="brand" className="select select-bordered w-full" required>
                        <option>Laptop</option>
                        <option>Mobile</option>
                        <option>iPad</option>
                        <option>Camera</option>
                        <option>Headphone</option>
                        <option>Watch</option>
                    </select>
                    <p className='text-xl'>Price:</p>
                    <input type="text" className='input input-bordered w-full mb-3 ' placeholder='Price' name="price" id="" required />
                    <p className='text-xl'>Location:</p>
                    <input type="text" className='input input-bordered w-full mb-3 ' placeholder='Location' name="location" id="" required />
                    <p className='text-xl'>Number:</p>
                    <input type="text" className='input input-bordered w-full mb-3 ' placeholder='Number' name="number" id="" required />
                    <p className='text-xl'>Original Price:</p>
                    <input type="text" className='input input-bordered w-full mb-3 ' placeholder='Original Price' name="originalPrice" id="" required />
                    <p className='text-xl'>Select Condition</p>
                    <select name="condition" className="select select-bordered w-full" required>
                        <option>Excellent</option>
                        <option>Good</option>
                        <option>Fair</option>
                    </select>
                    <p className='text-xl'>Used of Year:</p>
                    <input type="text" className='input input-bordered w-full mb-3 ' placeholder='Used of year' name="usedYear" id="" required />
                    <p className='text-xl'>Image URL</p>
                    <input type="text" className='input input-bordered w-full mb-3 ' placeholder='Image URL' name="img" id="" required />
                    <input type="submit" name="" className='btn btn-primary my-10' value='Add Product' id="" />
                </form>
            </div>
        </div>
    );
};

export default AddProducts;