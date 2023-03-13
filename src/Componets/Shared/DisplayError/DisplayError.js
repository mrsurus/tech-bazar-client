import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const DisplayError = () => {
    const {logOut} = useContext(AuthContext)
    const error = useRouteError()
    const navigate = useNavigate()

    const handleLogOut =()=>{
        logOut()
        .then(()=>{
            navigate('/login')
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <p className='text-red-500 text-center mt-24'>Somthing went wrong !!!</p>
            <p className='text-red-400 text-4xl text-center'>{error.statusText}</p>
            <p>Please <span onClick={handleLogOut}>Login</span> again.</p>
        </div>
    );
};

export default DisplayError;