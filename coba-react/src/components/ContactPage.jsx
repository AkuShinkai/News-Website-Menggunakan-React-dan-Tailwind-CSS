import React from 'react'
import { useForm } from "react-hook-form";

const ContactPage = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({ mode: 'onChange' });

    const onSubmit = (data) => {
        console.log(data);

    };

    return (
        <div className='pb-6'>
            <h1 className='font-bold font-primary text-[24px] lg:text-3xl items-center text-center pt-20 pb-14'>Let's Start a Conversation</h1>
            <div className="py-6 px-10 grid grid-cols-1 lg:grid-cols-2 gap-8 pr-8 lg:gap-0">
                <div className="text-center">
                    <h1 className="relative inline uppercase font-bold text-[24px]">
                        Contact
                        <span className="absolute left-1/2 bg-gray-500 -bottom-2 -translate-x-1/2 h-[1px] w-[60px]"></span>
                    </h1>
                    <h2 className='py-8 text-xl text-start font-bold'>
                        Hubungi Kami Melalui Email dibawah ini
                    </h2>
                    <div className='text-start pb-8'>
                        <h3 className='font-semibold'>
                            Tim Marketing Kami:
                        </h3>
                        <span className='text-blue-700 hover:text-blue-400 cursor-pointer'>
                            marketingpartner@pnmnews.com
                        </span>
                    </div>

                    <div className='text-start pb-8'>
                        <h3 className='font-semibold'>
                            Support:
                        </h3>
                        <span className='text-blue-700 hover:text-blue-400 cursor-pointer'>
                            supportpnmnews@pnmnews.com
                        </span>
                    </div>

                    <div className='text-start pb-12'>
                        <h3 className='font-semibold'>
                            Office Number:
                        </h3>
                        <span className='text-gray-400 text-base hover:text-gray-800 cursor-pointer'>
                            (0881) - 212 - 094
                        </span>
                    </div>

                    <div className='text-start '>
                        <h2 className='font-bold text-xl'>
                            Atau Kunjungi Kami Pada Alamat Berikut
                        </h2>
                        <span className='font-semibold text-lg'>
                            Madiun
                        </span>
                        <div>
                            <a href='https://g.co/kgs/MrYts5W' className='text-gray-400 hover:text-gray-800 cursor-pointer'>
                            Jl. Serayu No.84, Pandean, Taman, Pandean, Kec. Taman, Kota Madiun,<br/> Jawa Timur 63133
                            </a>
                        </div>
                    </div>

                </div>
                <div className='pt-6'>
                    <h2 className='pb-4 font-semibold'>Please note: name and email fields are required.</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
                        <div className="flex flex-col">
                            <label>Your Name</label>
                            <input
                                {...register('name', {
                                    required: true,
                                    minLength: 3,
                                    maxLength: 100,
                                })}
                                className="p-2 outline-none border border-black hover:bg-gray-50 focus:border-gray-400 rounded-md"
                                placeholder='e.g: example@gmail.com'
                            />
                            {errors.name?.type === 'required' && (
                                <span className="text-red-500 mt-1">Your name is required</span>
                            )}
                            {errors.name?.type === 'minLength' && (
                                <span className="text-red-500 mt-1">Your name min length is 3</span>
                            )}
                            {errors.name?.type === 'maxLength' && (
                                <span className="text-red-500 mt-1">
                                    Your name max length is 100
                                </span>
                            )}
                        </div>
                        <div className="flex flex-col">
                            <label>Your Email</label>
                            <input
                                {...register('email', {
                                    required: true,
                                    minLength: 3,
                                    maxLength: 100,
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: 'invalid email address',
                                    },
                                })}
                                className="p-2 outline-none border border-black hover:bg-gray-50 focus:border-gray-400 rounded-md"
                                placeholder='e.g: Jhon Doe'
                            />
                            {errors.email?.type === 'pattern' && (
                                <span className="text-red-500 mt-1">Your email is invalid</span>
                            )}
                            {errors.email?.type === 'required' && (
                                <span className="text-red-500 mt-1">Your email is required</span>
                            )}
                            {errors.email?.type === 'minLength' && (
                                <span className="text-red-500 mt-1">
                                    Your email min length is 3
                                </span>
                            )}
                            {errors.email?.type === 'maxLength' && (
                                <span className="text-red-500 mt-1">
                                    Your email max length is 100
                                </span>
                            )}
                        </div>
                        <div className="flex flex-col">
                            <label>Subject</label>
                            <input
                                {...register('subject', {
                                    minLength: 3,
                                    maxLength: 500,
                                })}
                                className="p-2 outline-none border border-black hover:bg-gray-50 focus:border-gray-400 rounded-md"
                                placeholder='your subject goes here'
                            />
                            {errors.subject?.type === 'minLength' && (
                                <span className="text-red-500 mt-1">
                                    Your subject min length is 3
                                </span>
                            )}
                            {errors.subject?.type === 'maxLength' && (
                                <span className="text-red-500 mt-1">
                                    Your subject max length is 500
                                </span>
                            )}
                        </div>
                        <div className="flex flex-col">
                            <label>Your Message</label>
                            <textarea
                                {...register('message', {
                                    minLength: 3,
                                    maxLength: 500,
                                })}
                                cols="10"
                                rows="4"
                                className="resize-none border border-black hover:bg-gray-50 focus:border-gray-400 outline-none p-2 rounded-md"
                                placeholder='your massage goes here'
                            ></textarea>
                            {errors.message?.type === 'minLength' && (
                                <span className="text-red-500 mt-1">
                                    Your message min length is 3
                                </span>
                            )}
                            {errors.message?.type === 'maxLength' && (
                                <span className="text-red-500 mt-1">
                                    Your message max length is 500
                                </span>
                            )}
                        </div>
                        <button className="bg-biruGelapLight text-white font-semibold hover:bg-teal-600 hover:text-black uppercase duration-300 rounded-full p-2 pb">
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactPage