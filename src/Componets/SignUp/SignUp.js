import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Context/AuthProvider';

const SignUp = () => {
    const { handleSubmit, register, formState: { errors } } = useForm()
    const { createUser, updateUser, user } = useContext(AuthContext)
    const [signupError, setSignupError] = useState('')
    const location = useLocation()
    const navigate = useNavigate()
    const [checkvalue, setCheckvalue] = useState(false)
    const from = location.state?.from?.pathname || '/'

    const handleSignup = data => {

        createUser(data.email, data.password)
            .then(res => {
                console.log(res.user)

                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(res => {
                        const user = {
                            name: data.name,
                            email: data.email,
                            isSeller: checkvalue
                        }
                        fetch('https://tech-bazar2-server.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(user)
                        })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            navigate(from, { replace: true })
                            Swal.fire(
                                'Good job!',
                                'successfully signed up!',
                                'success'
                              )
                        })

                       
                    })
                    .catch(err => {
                        console.log(err)
                    })


            })
            .catch(err => {
                console.log(err)
                setSignupError(err.message)
            })

    }

    return (
        <div className='my-16   flex justify-center items-center  '>
            <div className='w-96  shadow-2xl p-7' >
                <h2 className='text-4xl font-semibold text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignup)}>
                    <div className="form-control w-full my-5">
                        <label className="label"><span className="label-text">Name</span></label>
                        <input {...register("name", { required: 'Name is required' })}
                            type="text" placeholder="Name" className="input input-bordered w-full " />
                        {errors.name && <p role='alert' className='text-red-500'>Name is required</p>}
                    </div>
                    <div className="form-control w-full my-5">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input {...register("email", { required: 'Email is required' })}
                            type="email" placeholder="Email" className="input input-bordered w-full " />
                        {errors.email && <p role='alert' className='text-red-500'>Email is required</p>}
                    </div>

                    <div className="form-control w-full mb-3">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input {...register("password",
                            { required: 'Password is required', minLength: { value: 6, message: 'password at lest 6 charecter' } })}
                            type="password" placeholder="Password" className="input input-bordered w-full " />
                        {errors.password && <p role='alert' className='text-red-500'>{errors.password?.message}</p>}

                    </div>
                    <div className="form-control">
                        <label className="cursor-pointer label">
                            <span className="label-text text-xl font-semibold">Seller?</span>
                            <input onChange={(e) => setCheckvalue(e.target.checked)} type="checkbox" className="checkbox checkbox-info" />
                        </label>
                    </div>
                    <input className='btn w-full' defaultValue='SignUp' type='Submit' />
                    {signupError && <p className='text-red-600'>{signupError}</p>}
                    <p className='text-center my-3'>Already have an account? <Link className='text-success' to='/login'>LogIn</Link> </p>
                    <div className="divider">OR</div>
                </form>
                <button className='btn btn-outline w-full'>SIGN IN WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;