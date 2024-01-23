import React from 'react'
import { FaPhone } from 'react-icons/fa';
import { FaEnvelope, FaFacebook, FaGithub, FaInstagram,FaMapLocationDot, FaQuoteLeft, FaQuoteRight, FaTwitter } from "react-icons/fa6";


const Footer = () => {
    return (
        <div className="bg-biruGelapLight text-white bottom-0 left-0 right-0 z-50">
            <div className='px-4 py-4 max-w-7xl mx-auto flex justify-between items-center'>
                <ul className="grid grid-cols-1 items-start gap-5 pb-5 md:grid-cols-2 lg:grid-cols-4">
                    <li>
                        <div className="space-y-3">
                            <a href="" className="text-4xl flex font-serif font-oswald font-extrabold uppercase">
                                <i className="text-4xl text-white ml-auto"></i><FaQuoteLeft className='text-biruTerangLight'/><span className='text-white'>PNM</span><span
                                    className="flex text-biruTerangLight">News<FaQuoteRight className='text-white'/></span><i
                                        className="text-4xl text-white ml-auto"></i>
                            </a>

                            <p className="text-xs font-medium text-center sm:items-center md:items-center mx-auto">
                                Menyediakan berita aktual dan terpercara. Update setiap hari tentang kejadian disekitar kita dan
                                informasi terbaru.
                            </p>
                        </div>
                    </li>

                    <li>
                        <div className="flex flex-col font-semibold gap-3">
                            <h3 className="text-lg uppercase font-oswald">SUPPORT</h3>
                            <a href="" className="text-xs hover:text-biruTerangLight">FAQ's</a>
                            <a href="" className="text-xs hover:text-biruTerangLight">Privacy Policy</a>
                            <a href="" className="text-xs hover:text-biruTerangLight">Term & Condition</a>
                            <a href="" className="text-xs hover:text-biruTerangLight">Contact</a>
                        </div>
                    </li>

                    <li className="space-y-8 font-semibold">
                        <div className="space-y-2">
                            <h3 className="text-lg uppercase font-oswald">phone</h3>

                            <p className="flex items-center gap-2 text-xs">
                                <i className="text-lg text-white"><FaPhone/></i>
                                +62 111 2222 333
                            </p>
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-lg uppercase font-oswald">email</h3>

                            <p className="flex items-center gap-2 text-xs">
                                <i className="text-lg text-white"><FaEnvelope/></i>
                                pnmnews@pnmnews.com
                            </p>
                        </div>
                    </li>

                    <li className="space-y-8 font-semibold">
                        <div className="space-y-2">
                            <h3 className="text-lg uppercase font-oswald">address</h3>

                            <p className="flex items-center gap-2 text-xs">
                                <i className="fa-solid fa-location-dot text-lg text-white"><FaMapLocationDot/></i>
                                Athanor No 32
                            </p>
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-lg uppercase font-oswald">follow us on</h3>

                            <div className="flex space-x-3 text-white">
                                <i
                                    className="fa-brands fa-facebook-f text-lg cursor-pointer  hover:-translate-y-1 ease-in duration-200"><FaFacebook /></i>
                                <i
                                    className="fa-brands fa-twitter text-lg cursor-pointer  hover:-translate-y-1 ease-in duration-200"><FaTwitter /></i>
                                <i
                                    className="fa-brands fa-square-instagram text-lg cursor-pointer  hover:-translate-y-1 ease-in duration-200"><FaInstagram /></i>
                                <i
                                    className="fa-brands fa-square-github text-lg cursor-pointer  hover:-translate-y-1 ease-in duration-200"><FaGithub /></i>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div
                className="flex font-semibold flex-col items-center border-t border-primaryColorLight dark:border-darkColorLight px-4 py-5 max-w-7xl mx-auto md:flex-row md:justify-between">
                <p className="paragraph">PNMNews</p>
                <p className="paragraph">Copyright © 2024. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer