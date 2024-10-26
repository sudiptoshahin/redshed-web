"use client";
import Image from "next/image";
import HeaderMenu from '@/app/component/layout/header-menu';
import React, { useState, useRef } from "react";
import Link from "next/link";
import logoImg from "../../../../public/images/logo.svg";

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
        <section className="z-50">
            {
                showHamburgerMenu === true ? (
                    <div className="w-auto">
                        <HeaderMenu />
                    </div>
                ) : <></>
            }
            {/* tab starts */}
            <div className="z-50 w-full flex items-center justify-between xl:hidden h-[70px] 
            bg-[#EEEEEE] relative">
                <div className="p-5 cursor-pointer z-10" onClick={onHandleHamburgerMenu}>
                    <Image src={'/images/icons/hamburger.svg'} 
                    width={24} height={24} alt="menu" />
                </div>
                <div className="w-full absolute flex items-center justify-center">
                    <Link href={'/'}>
                        <Image src={logoImg} alt="logo" className="w-[150px] h-[70px]" />
                    </Link>
                </div>
            </div>
            {/* tab ends */}

            {/* desktop starts */}
            {/* navbar-fixed */}
            <div className="hidden xl:grid xl:grid-cols-3 xl:gap-0 xl:z-10 xl:fixed h-[80px] w-full bg-[#EEEEEE]">
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