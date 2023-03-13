import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (

        <div className='grid  mt-5 mx-3 md:mx-12 gap-10 grid-cols-12   '>
            <div className='  bg-no-repeat bg-cover col-span-12 md:col-span-6 rounded  ' style={{ backgroundImage: `url(https://media.istockphoto.com/id/1365310330/photo/excited-young-indian-man-winner-using-smartphone-isolated-on-yellow-background.jpg?s=612x612&w=0&k=20&c=mbCnh1Bd715P9JSdqrllYYmshIyfDkgafYPK53_S-m0=)` }}>
                <div className='ml-3 mt-5 w-36 my-20 bg-base-100 p-5 rounded'>
                    <p className='text-2xl font-bold my-4'>iPhone 13 Pro.</p>
                    <p className='text-md font-semibold mb-4 text-red-800'>From $999 or $41.62/mo <br></br> For 24 mo. footnote</p>
                    
                </div>
            </div>


            <div className='  col-span-6 md:col-span-3 grid grid-rows-6 gap-5 '>

                <div className=' row-span-3 h-full bg-no-repeat bg-cover' style={{ backgroundImage: `url(https://cdn.thewirecutter.com/wp-content/media/2021/04/wirelessheadsets-2048px-7353-2x1-1.jpg?auto=webp&quality=75&crop=2:1&width=1024)` }}>
                    <div className='ml-2 mt-3 w-24 my-5 bg-base-100 p-3  rounded'>
                        <p className='text-xl font-bold my-2'>Redmi 3x</p>
                        <p className='text-sm font-semibold mb-2 text-red-800'> $55 Only</p>
                    </div>
                </div>

                <div className='row-span-3 bg-no-repeat bg-cover  h-full' style={{ backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj-s1Ut-IAbvn0v0v0tWt4c1iMIG1kOo0yww&usqp=CAU)` }}>
                    <div className='ml-2 mt-3 w-24 my-5 bg-base-100 p-3  rounded'>
                        <p className='text-xl font-bold my-2'>Lenevo ideaPad</p>
                        <p className='text-sm font-semibold mb-2 text-red-800'> $550 Only</p>
                    </div>
                </div>
            </div>

            <div className='col-span-6 md:col-span-3 grid grid-rows-6 gap-5  '>
                <div className=' row-span-3 h-full'>
                    <img className='h-full w-full rounded' src="https://previews.123rf.com/images/rawpixel/rawpixel1810/rawpixel181004588/109572081-hand-holding-smartphone-and-bluetooth-speaker.jpg" alt="" />
                </div>
                <div className='row-span-3 h-full'>
                    <img className='h-full w-full rounded' src="https://cdn.thewirecutter.com/wp-content/media/2022/05/bluetoothheadphones-2048px-1151-3x2-1.jpg?auto=webp&quality=60&crop=1.91:1&width=1200" alt="" />
                </div>
            </div>

        </div>
    );
};

export default Banner;