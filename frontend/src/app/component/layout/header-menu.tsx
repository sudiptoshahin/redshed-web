import { useEffect, useRef } from "react";
import Image from "next/image";
import blankUserSvg from "../../../../public/images/user.svg";
import aboutSvg from "../../../../public/images/icons/about.svg";
import blogSvg from "../../../../public/images/icons/blog.svg";
import shopSvg from "../../../../public/images/icons/shop.svg";
import supportSvg from "../../../../public/images/icons/support.svg";
import contactSvg from "../../../../public/images/icons/contact.svg";
import complainSvg from "../../../../public/images/icons/complain.svg";

type sidePanelRef = {
    setSidePanelRef: () => void
}

export default function HeaderMenu() {

    const sidepanelRef = useRef<HTMLDivElement>(null);

    // console.log('sidepanelRef: ', sidepanelRef);

    return (
        <section id="header-menu relative">
            <div className="z-20 w-[300px] h-[100vh] absolute top-[70px] bg-white-rbga hamburger-slide">
                {/* profile */}
                <div className="p-5 flex items-center space-x-[20px] bg-red-rgba rounded-r-[5px]">
                    <div className="">
                        <Image src={blankUserSvg} alt="user" className="h-[50px] w-[50px]" />
                    </div>
                    <div className="text-[18px] font-bold font-lato text-white">
                        John Doe
                    </div>
                </div>
                {/* feature */}
                <div className="px-[20px]">
                    <div className="py-3">
                        <span className="font-lato:regular font-sm">20$</span>
                        <span className="font-dancingScript font-semibold font-[5px] capitalize cursor-pointer"> refer a friend</span>
                    </div>

                    <div className="flex items-center space-x-[15px] py-3.5">
                        <div className="">
                            <Image src={aboutSvg} alt="about" />
                        </div>
                        <div className="text-[18px] font-lato font-bold">About</div>
                    </div>
                    <div className="flex items-center space-x-[15px] py-3.5">
                        <div className="">
                            <Image src={blogSvg} alt="about" />
                        </div>
                        <div className="text-[18px] font-lato font-bold">Blog</div>
                    </div>
                    <div className="flex items-center space-x-[15px] py-3.5">
                        <div className="">
                            <Image src={shopSvg} alt="about" />
                        </div>
                        <div className="text-[18px] font-lato font-bold">Shop</div>
                    </div>
                    <div className="w-full border border-[1px] border-black"></div>
                    <div className="flex items-center space-x-[15px] py-3.5">
                        <div className="">
                            <Image src={supportSvg} alt="about" />
                        </div>
                        <div className="text-[18px] font-lato font-bold">Support</div>
                    </div>
                    <div className="flex items-center space-x-[15px] py-3.5">
                        <div className="">
                            <Image src={contactSvg} alt="about" />
                        </div>
                        <div className="text-[18px] font-lato font-bold">Contact</div>
                    </div>
                    <div className="flex items-center space-x-[15px] py-3.5">
                        <div className="">
                            <Image src={complainSvg} alt="about" />
                        </div>
                        <div className="text-[18px] font-lato font-bold">Complain</div>
                    </div>
                </div>

                {/* menus */}
            </div>

            {/* \
            
            about
            blog
            shop
            Support
            contact
            Complain
            */}

            {/* <div className="hamburger-sidepanel" ref={sidepanelRef}>
                <a href="javascript:void(0)" className="closebtn" onClick={props.onHandleHamburgerMenu}>×</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Clients</a>
                <a href="#">Contact</a>
            </div>
            
            <button className="openbtn" onClick={() => {}}>☰ Toggle Sidepanel</button>
            <h2>Collapsed Sidepanel</h2>
            <p>Click on the hamburger menu/bar icon to open the sidepanel.</p> */}
        </section>
    );
}