import React from 'react';

const AllproductCard = ({ allproduct, setModalInfo }) => {
    const { img, name, price, used_year } = allproduct
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>Used Year: {used_year}</p>
                <p>Price: <span className='font-bold'>${price}</span></p>
                <label
                    htmlFor="booking-modal"
                    className="btn btn-primary text-white "
                    onClick={() => setModalInfo(allproduct)}
                >Buy now</label>
            </div>
        </div>
    );
};

export default AllproductCard;