import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import CheckOutForn from './CheckOutForn';
import Spinner from '../../Shared/Spinner/Spinner';


const stripePromise = loadStripe('pk_test_51MBZbQGWLIA8ie2k1cqg6qJbuPLFgaWHExKJorBsW2q3BiKSqHPJhV3YZ7zEFXsyWSMR0EucAjr8xZMqrWxK4fKu00BXFCh0nV');

const Payment = () => {
    const navigation = useNavigation()
    const data = useLoaderData()

    if(navigation.state === 'loading'){
        return <Spinner></Spinner>
    }
    return (
        <div>
            <p className='text-xl font-bold text-center mt-5'>Payment for {data.productName}</p>
            <p className='text-xl text-center'>Please pay <span className='text-xl font-bold'>${data.price}</span> for your wonderful order</p>
            <div className='w-96 mx-auto my-12 bg-base-100 p-10'>
                <Elements stripe={stripePromise}>
                    <CheckOutForn data={data}></CheckOutForn>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;