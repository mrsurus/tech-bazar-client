import React from 'react';
import { Link } from 'react-router-dom';

const AdvertiseCard = ({ ad }) => {
    const { name, img, category } = ad
    return (
        <div>
            <div className="card card-compact lg:w-64  bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p> Try your best {name} now.</p>
                    <div className="card-actions justify-end">
                        <Link to={`category/${category}`}><button className="btn btn-primary">Buy Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdvertiseCard;