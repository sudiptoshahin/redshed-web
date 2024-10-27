
import Image from "next/image";

import brandImage from '../../../../public/images/icons/big-logo.png';
// import paymentOptionImage from '../../../../public/images/icons/payment-options.png';
import instagramIcon from '../../../../public/images/icons/social-instagram.svg';
import facebookIcon from '../../../../public/images/icons/social-facebook.svg';
import twitterIcon from '../../../../public/images/icons/social-twitter.svg';
import pinterestIcon from '../../../../public/images/icons/social-pinterest.svg';
import addressIcon from '../../../../public/images/icons/address.svg';
import emailIcon from '../../../../public/images/icons/email.svg';
import contactIcon from '../../../../public/images/icons/contact.svg';

import masterCardLogo from "../../../../public/images/mastercard.svg";
import visaLogo from "../../../../public/images/visa.svg";
import paypalLogo from "../../../../public/images/paypal.svg";


export default function Footer() {

    return (
        <footer id="footer">
            <div className="w-full p-5 xl:p-0 grid 2xs:grid-cols-2 gap-[40px] 2xs:gap-[30px] xl:grid-cols-4 xl:gap-3 xl:px-4 
            xl:h-[300px] bg-[#F2F2F2] z-20">
                <div className="w-full px-3 xl:px-0 xl:pt-5 bg-[#F2F2F2]">
                    <Image src={brandImage} className="mt-2 mb-5 h-[50px] w-[200px]" 
                    alt="logo" />
                    <div className="">
                        <h1 className="font-[600] text-[18px] font-lato font-bold 
                        pt-5 pb-2 text-black">
                            We support
                        </h1>
                        {/* <Image src={paymentOptionImage} className="py-3 xl:py-0" alt="payment-option" /> */}
                        <div className="flex w-full space-x-[20px] mt-2">
                            <Image src={masterCardLogo} className="h-[30px] w-[50px]" alt="master-card" />
                            <Image src={visaLogo} className="h-[30px] w-[50px]" alt="visa-card" />
                            <Image src={paypalLogo} className="h-[30px] w-[50px]" alt="paypal-card" />
                        </div>
                    </div>
                </div>
                <div className="pt-5 px-3 xl:px-0">
                    <h1 className="uppercase font-[600] text-black font-lato:bold">
                        customer service
                    </h1>
                    <ul className="">
                        <li className="capitalize font-lato:regular text-[#000000] 
                        pt-[2px] xl:pt-3 text-[12px] md:text-[14px] xl:text-[16px]">about us</li>
                        <li className="capitalize font-lato:regular text-[#000000] 
                        pt-[2px] xl:pt-3 text-[12px] md:text-[14px] xl:text-[16px]">faq</li>
                        <li className="capitalize font-lato:regular text-[#000000] 
                        pt-[2px] xl:pt-3 text-[12px] md:text-[14px] xl:text-[16px]">my account</li>
                        <li className="capitalize font-lato:regular text-[#000000] 
                        pt-[2px] xl:pt-3 text-[12px] md:text-[14px] xl:text-[16px]">contact us</li>
                    </ul>
                </div>
                <div className="pt-5 px-3 xl:px-0">
                    <h1 className="uppercase font-[600] text-black font-lato:bold">social</h1>
                    <ul className="">
                        <li className="flex items-center pt-3 space-x-[5px] xl:space-x-0" style={{ fontSize: '16px' }}>
                            <Image src={instagramIcon} alt="instagram" />
                            <span className="capitalize font-lato:regular text-[#000000] 
                        pt-[2px] px-2 text-[12px] md:text-[14px] xl:text-[16px]">Instagram</span>
                        </li>
                        <li className="flex items-center pt-3 space-x-[5px] xl:space-x-0" style={{ fontSize: '16px' }}>
                            <Image src={facebookIcon} alt="instagram" />
                            <span className="capitalize font-lato:regular text-[#000000] 
                        pt-[2px] px-2 text-[12px] md:text-[14px] xl:text-[16px]">facebook</span>
                        </li>
                        <li className="flex items-center pt-3 space-x-[5px] xl:space-x-0" style={{ fontSize: '16px' }}>
                            <Image src={twitterIcon} alt="instagram" />
                            <span className="capitalize font-lato:regular text-[#000000] 
                        pt-[2px] px-2 text-[12px] md:text-[14px] xl:text-[16px]">twitter</span>
                        </li>
                        <li className="flex items-center pt-3 space-x-[5px] xl:space-x-0" style={{ fontSize: '16px' }}>
                            <Image src={pinterestIcon} alt="instagram" />
                            <span className="capitalize font-lato:regular text-[#000000] 
                        pt-[2px] px-2 text-[12px] md:text-[14px] xl:text-[16px]">pinterest</span>
                        </li>
                    </ul>
                </div>
                <div className="pt-5 px-3 xl:px-0">
                    <h1 className="uppercase font-[600] text-black font-lato:bold">Contacts</h1>
                    <ul className="">
                        <li className="flex items-center opacity-50 pt-3" style={{ fontSize: '16px' }}>
                            <Image src={addressIcon} alt="instagram" />
                            <span className="capitalize font-lato:regular text-[#000000] 
                        pt-[2px] xl:pt-3 text-[12px] md:text-[14px] xl:text-[16px] px-2">Patricia C. Amedee 4401</span>
                        </li>
                        <li className="flex items-center opacity-50 pt-3" style={{ fontSize: '16px' }}>
                            <Image src={emailIcon} alt="instagram" />
                            <span className="lowercase font-lato:regular text-[#000000] 
                        pt-[2px] xl:pt-3 text-[12px] md:text-[14px] xl:text-[16px] px-2">info@yourdomain.com</span>
                        </li>
                        <li className="flex items-center opacity-50 pt-3" style={{ fontSize: '16px' }}>
                            <Image src={contactIcon} alt="instagram" />
                            <span className="capitalize font-lato:regular text-[#000000] 
                        pt-[2px] xl:pt-3 text-[12px] md:text-[14px] xl:text-[16px] px-2">+99 (0) 101 0000 888</span>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}