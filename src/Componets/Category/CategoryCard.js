import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ categori }) => {
    const { id, category, img } = categori
    return (
        <Link to={`/category/${category}`}>
            <div className="card card-side w-full bg-base-100 shadow-xl">
                <figure className='w-3/4'><img alt='' className='w-full' src={img} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{category}</h2>
                    <p>Click the card to get the best {category}.</p>
                </div>
            </div>
        </Link>
    );
};

export default CategoryCard;