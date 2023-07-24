"use client"
import { adminNavOptions, navOptions, styles } from '@/utils';
import React, { Fragment, useContext, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import NavButton from '../Button/NavButton';
import { GlobalContext } from '@/context';
import CommonModal from '../CommonModal';

const isAdminView = false;
const isAuthUser = true;
const user = {
    role: 'admin'
}


function NavItems({  isModalView=false }: {  isModalView: boolean }) {
    return (
        <div className={`items-center justify-between w-full md:flex md:w-auto ${isModalView ? "":"hidden"}`} id='nav-items'>
            <ul className='flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-white'>
                {
                    isAuthUser ? isAdminView ? adminNavOptions.map((item, index) => {
                        return (
                            <li className='cursor-pointer block py-2 pl-3 pr-4 text-gray-900 rounded md:p-0' key={index}>{item?.label}</li>
                        )
                    }) :
                        navOptions.map((item, index) => {
                            return (
                                <li className='cursor-pointer block py-2 pl-3 pr-4 text-gray-900 rounded md:p-0' key={index}>{item?.label}</li>
                            )
                        }) : null
                }
            </ul>

        </div>
    )
}
export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const { showNavModal, setShowNavModal } = useContext(GlobalContext);
    return (
        <>
            <nav className='md:px-8 bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200'>
                <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
                    <div className='flex items-center cursor-pointer'>
                        <span className='self-center text-2xl font-semibold whitespace-nowrap'>
                            Kankara
                        </span>
                    </div>

                    <div className='flex md:order-2 gap-2'>
                        {
                            !isAdminView && isAuthUser && (
                                <Fragment>
                                    <NavButton >Account</NavButton>
                                    <NavButton >Cart</NavButton>
                                </Fragment>
                            )
                        }
                        {
                            user?.role === 'admin' ? isAdminView
                                ? <NavButton>Client View</NavButton> : <NavButton >Admin View</NavButton> : null
                        }
                        {
                            isAuthUser ? <NavButton>Logout</NavButton> : <NavButton >Login</NavButton>
                        }
                        <button
                            type='button'
                            className='inline-flex md:hidden relative h-10 w-10'
                            onClick={() => setShowNavModal(!showNavModal)}
                        >
                            <span className='sr-only'>Open main menu</span>
                            <FiX className={` absolute top-0 right-0 h-10 w-10 transition-all duration-100 ${menuOpen ? "opacity-100" : "opacity-0"}`} />
                            <FiMenu className={`absolute top-0 right-0 h-10 w-10 transition-all duration-100 ${!menuOpen ? "opacity-100" : "opacity-0"}`} />
                        </button>
                    </div>
                    <NavItems isModalView={false} />

                </div>

            </nav>
            {
                <CommonModal
                    show={showNavModal}
                    modalTitle='Title'
                    mainContent={<NavItems isModalView={showNavModal}/>}
                    setShow={setShowNavModal}
                    showButtons
                    buttonComponent={<div>Hello</div>}
                />
            }
        </>
    )
}
