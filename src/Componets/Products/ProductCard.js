import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const ProductCard = ({ data, setModalInfo }) => {
    const { name, img, location, price, used_year, seller, date, original_price, sellerStatus } = data;
    return (
        <div className=' '>
            <div className="card w-92 h-[600px] bg-base-100 shadow-xl my-5">
                <figure><img src={img} alt="Shoes" className='h-64' /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary">{price}$</div>

                    </h2>
                    <p>Location: {location}</p>
                    <div className='flex'>
                        <p>Seller: {seller}</p>
                        {sellerStatus && <p className='text-green-500 ml-[-80px] mt-1'><FaCheckCircle></FaCheckCircle> </p>}
                    </div>
                    <p>Used: {used_year} year</p>
                    <p>Original Price: {original_price} $</p>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline">{date}</div>
                            <label
                                htmlFor="booking-modal"
                                className="btn btn-primary text-white "
                                onClick={() => setModalInfo(data) }
                            >Buy now</label>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductCard;