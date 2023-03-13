import { useQuery } from '@tanstack/react-query';
import React from 'react';
import CategoryCard from './CategoryCard';

const Category = () => {

    const { data: categories = [], refetch } = useQuery({
        queryKey: ['category'],
        queryFn: () =>
            fetch(`https://tech-bazar-server2.vercel.app/category`)
                .then(res => res.json())
    })

    return (
        <div className='md:mx-12  mt-16 '>
            <p className='text-xl bold my-3 font-bold'>Featured Collection</p>
            <div className='grid gap-6 bg-slate-400 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 px-7 '>
                {
                    categories.map(categori =>
                        <CategoryCard categori={categori} key={categori._id}>

                        </CategoryCard>)
                }
            </div>
        </div>
    );
};

export default Category;