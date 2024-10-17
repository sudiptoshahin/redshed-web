
import Image from "next/image";

import brandImage from '../../../../public/images/icons/big-logo.png';
import paymentOptionImage from '../../../../public/images/icons/payment-options.png';
import instagramIcon from '../../../../public/images/icons/social-instagram.svg';
import facebookIcon from '../../../../public/images/icons/social-facebook.svg';
import twitterIcon from '../../../../public/images/icons/social-twitter.svg';
import pinterestIcon from '../../../../public/images/icons/social-pinterest.svg';
import addressIcon from '../../../../public/images/icons/address.svg';
import emailIcon from '../../../../public/images/icons/email.svg';
import contactIcon from '../../../../public/images/icons/contact.svg';


export default function Footer() {

    return (
        <footer id="footer">
            <div className="w-full xl:grid xl:grid-cols-4 xl:gap-3 xl:px-4 
            xl:h-[300px] bg-[#F2F2F2] xl:bg-blue-300 z-20">
                <div className="w-full px-3 xl:px-0 xl:pt-5 bg-[#F2F2F2]">
                    <Image src={brandImage} className="mt-2 mb-5 h-[50px] w-[200px]" 
                    alt="logo" />
                    <div className="">
                        <h1 className="font-[600] text-[18px] opacity-75 font-lato:semibold 
                        pt-5 pb-2">
                            We support
                        </h1>
                        <Image src={paymentOptionImage} className="py-3 xl:py-0" alt="payment-option" />
                    </div>
                </div>
                <div className="pt-5 px-3 xl:px-0">
                    <h1 className="uppercase font-[600] text-black font-lato:bold">
                        customer service
                    </h1>
                    <ul className="">
                        <li className="capitalize font-lato:regular text-[#000000] opacity-50 
                        pt-[2px] xl:pt-3 text-[12px] md:text-[14px] xl:text-[16px]">about us</li>
                        <li className="capitalize font-lato:regular text-[#000000] opacity-50 
                        pt-[2px] xl:pt-3 text-[12px] md:text-[14px] xl:text-[16px]">faq</li>
                        <li className="capitalize font-lato:regular text-[#000000] opacity-50 
                        pt-[2px] xl:pt-3 text-[12px] md:text-[14px] xl:text-[16px]">my account</li>
                        <li className="capitalize font-lato:regular text-[#000000] opacity-50 
                        pt-[2px] xl:pt-3 text-[12px] md:text-[14px] xl:text-[16px]">contact us</li>
                    </ul>
                </div>
                <div className="pt-5 px-3 xl:px-0">
                    <h1 className="uppercase font-[600] text-black font-lato:bold">social</h1>
                    <ul className="">
                        <li className="flex items-center opacity-50 pt-3 space-x-[5px] xl:space-x-0" style={{ fontSize: '16px' }}>
                            <Image src={instagramIcon} alt="instagram" />
                            <span className="capitalize font-lato:regular text-[#000000] opacity-50 
                        pt-[2px] xl:pt-3 text-[12px] md:text-[14px] xl:text-[16px]">Instagram</span>
                        </li>
                        <li className="flex items-center opacity-50 pt-3 space-x-[5px] xl:space-x-0" style={{ fontSize: '16px' }}>
                            <Image src={facebookIcon} alt="instagram" />
                            <span className="capitalize font-lato:regular text-[#000000] opacity-50 
                        pt-[2px] xl:pt-3 text-[12px] md:text-[14px] xl:text-[16px]">facebook</span>
                        </li>
                        <li className="flex items-center opacity-50 pt-3 space-x-[5px] xl:space-x-0" style={{ fontSize: '16px' }}>
                            <Image src={twitterIcon} alt="instagram" />
                            <span className="capitalize font-lato:regular text-[#000000] opacity-50 
                        pt-[2px] xl:pt-3 text-[12px] md:text-[14px] xl:text-[16px]">twitter</span>
                        </li>
                        <li className="flex items-center opacity-50 pt-3 space-x-[5px] xl:space-x-0" style={{ fontSize: '16px' }}>
                            <Image src={pinterestIcon} alt="instagram" />
                            <span className="capitalize font-lato:regular text-[#000000] opacity-50 
                        pt-[2px] xl:pt-3 text-[12px] md:text-[14px] xl:text-[16px]">pinterest</span>
                        </li>
                    </ul>
                </div>
                <div className="pt-5">
                    <h1 className="uppercase text-black font-lato:bold" style={{ fontSize: 'x-large', fontWeight: '600' }}>social</h1>
                    <ul className="">
                        <li className="flex items-center opacity-50 pt-3" style={{ fontSize: '16px' }}>
                            <Image src={addressIcon} alt="instagram" />
                            <span className="capitalize font-lato:regular text-[#000000] px-2">Patricia C. Amedee 4401</span>
                        </li>
                        <li className="flex items-center opacity-50 pt-3" style={{ fontSize: '16px' }}>
                            <Image src={emailIcon} alt="instagram" />
                            <span className="lowercase font-lato:regular text-[#000000] px-2">info@yourdomain.com</span>
                        </li>
                        <li className="flex items-center opacity-50 pt-3" style={{ fontSize: '16px' }}>
                            <Image src={contactIcon} alt="instagram" />
                            <span className="capitalize font-lato:regular text-[#000000] px-2">+99 (0) 101 0000 888</span>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}