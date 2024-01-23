import React, { useState } from 'react';

const LoginButton = ({ isOpen, onClose }) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${isOpen ? "" : "hidden"}`}>
            <div className='model-container'>
                <div className='bg-indigo-700 text-center p-5 h-auto lg:w-[500px] rounded-lg shadow-md'>
                    <h2 className='text-xl font-semibold mt-3 mb-5 uppercase'>Login</h2>
                    <form className='px-4' action="">
                        <p className='flex pb-1'>Email</p>
                        <div className='mb-3'>
                            <input
                                type="email"
                                name='email'
                                id='email'
                                placeholder='example@gmail.com'
                                className='w-full rounded-md border border-[#e0e0e0] bg-gray-300 focus:bg-white hover:bg-gray-200 py-3 px-6 text-base font-medium text-[#687280] outline-none focus:border-[#6a64f1] focus:shadow-md'
                            />
                        </div>
                        <p className='flex pb-1'>Password</p>
                        <div className='mb-3'>
                            <input
                                type={showPassword ? "text" : "password"}
                                name='password'
                                id='password'
                                placeholder='Enter Your Password'
                                autoComplete='off'
                                className='w-full rounded-md border border-[#e0e0e0] bg-gray-300 focus:bg-white hover:bg-gray-200 py-3 px-6 text-base font-medium text-[#687280] outline-none focus:border-[#6a64f1] focus:shadow-md'
                            />
                        </div>
                        <div className='flex items-center mb-3 pl-2'>
                            <input
                                type="checkbox"
                                id="showPassword"
                                className='mr-2 cursor-pointer'
                                onChange={handleTogglePassword}
                            />
                            <label htmlFor="showPassword" className='cursor-pointer hover:text-gray-200 active:underline'>Show Password</label>
                        </div>
                        <div>
                            <button className='hover:shadow-md rounded-md bg-[#6a64f1] hover:bg-green-600 py-3 px-8 text-base font-semibold text-white outline-none'>Login</button>
                        </div>
                    </form>
                    <button onClick={onClose} className='bg-red-600 hover:bg-red-400 text-gray-800 font-semibold py-2 px-6 rounded inline-flex items-center mt-5 mb-3'>
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginButton;
