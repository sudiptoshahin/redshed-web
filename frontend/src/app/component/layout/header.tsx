"use client";
import Image from "next/image";
import HeaderMenu from '@/app/component/layout/header-menu';
import React, { useState, useRef } from "react";
import Link from "next/link";

export default function Header() {

    const [showHamburgerMenu, setShowHamburgerMenu] = useState<boolean>(false);
    const hamburgerSidepanelRef = useRef<HTMLDivElement>();

    const onHandleHamburgerMenu = () => {
        setShowHamburgerMenu(!showHamburgerMenu);
    }

    const setSidePanelRef = (sidePanel: HTMLDivElement) => {
        hamburgerSidepanelRef.current = sidePanel;
    }

    return (
        <section id="header">

            {
                showHamburgerMenu === true ? (
                    <div className="w-auto">
                        <HeaderMenu />
                    </div>
                ) : <></>
            }


            {/* tab starts */}
            <div className="w-full h-[70px] bg-[#EEEEEE] md:block xl:hidden relative">
                <div className="hamburger-center p-5 cursor-pointer" onClick={onHandleHamburgerMenu}>
                    <Image src={'/images/icons/hamburger.svg'} width={25} height={25} alt="menu" />
                </div>
                <div className="absolute left-[40%] top-1">
                    <Link href={'/'}>
                        <Image src={'/images/logo.svg'} height={52} width={196} alt="logo" />
                    </Link>
                </div>
            </div>
            {/* tab ends */}

            {/* desktop starts */}
            {/* navbar-fixed */}
            <div className="h-[80px] bg-[#EEEEEE] w-full xl:grid grid-cols-3 gap-3 hidden fixed z-10">
                <div className="flex items-center space-x-5 w-auto mx-auto font-lato:regular">
                    <Link href={'/'}>
                        <div className="w-auto font-sm cursor-pointer">Home</div>
                    </Link>
                    <Link href={'/shops'}>
                        <div className="w-auto font-sm cursor-pointer">Shop</div>
                    </Link>
                    <div className="w-auto font-sm cursor-pointer">Blog</div>
                    <div className="w-auto font-sm cursor-pointer">Style</div>
                </div>
                <div className="content-center mx-auto">
                    <Link href={'/'}>
                        <Image src={'/images/logo.svg'} height={52} width={196} alt="logo" />
                    </Link>
                </div>
                <div className="flex items-center space-x-5">
                    <Link href={'/refer-friends'}>
                        <div className="">
                            <span className="font-lato:regular font-sm">20$</span>
                            <span className="font-dancingScript font-semibold font-[5px] capitalize cursor-pointer"> refer a friend</span>
                        </div>
                    </Link>
                    <Link href={'/about'}>
                        <div className="font-lato:regular font-sm cursor-pointer">About us</div>
                    </Link>
                    <div>
                        <Image className="cursor-pointer" src={'/images/icons/user.svg'} width={25} height={25} alt="user" />
                    </div>
                    <div>
                        <Image className="cursor-pointer" src={'/images/icons/search.svg'} width={25} height={25} alt="user" />
                    </div>
                    <div>
                        <Image className="cursor-pointer" src={'/images/icons/cart.svg'} width={25} height={25} alt="user" />
                    </div>
                </div>
            </div>
            {/* desktop ends */}
        </section>
    );
}