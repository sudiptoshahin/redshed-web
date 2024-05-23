
import Image from "next/image";

import moneybackGurrantyIcon from '../../../../public/images/icons/money-back.svg';
import freeshippingIcon from '../../../../public/images/icons/free-shipping.svg';
import productQualityIcon from '../../../../public/images/icons/product-quality.svg';
import onlineSupportIcon from '../../../../public/images/icons/online-support.svg';
import complaintBoxIcon from '../../../../public/images/icons/complaint.png';

export default function OurSupports() {

    return (
        <section id="our-supports">
            <div className="px-8 grid grid-cols-5 gap-4 py-6">
                <div className="relative border border-px border-black h-[210px]">
                    <div className="absolute w-full h-full bg-[#C0C0C0] opacity-10"></div>
                    <Image className="absolute top-[20%] left-[30%]" height={100} width={100} src={moneybackGurrantyIcon} alt="moneyback-gurranty" />
                    <h3 className="absolute w-auto left-[15%] px-0 bottom-[10%] py-1 text-center uppercase bg-[#D50000] text-white font-lato:black">money back gurrantee</h3>
                </div>
                <div className="relative border border-px border-black h-[210px]">
                    <div className="absolute w-full h-full bg-[#C0C0C0] opacity-10"></div>
                    <Image className="absolute top-[20%] left-[30%]" height={100} width={100} src={freeshippingIcon} alt="freeshipping" />
                    <h3 className="absolute  w-auto left-[28%] px-2 bottom-[10%] py-1 text-center uppercase bg-[#D50000] text-white font-lato:black">free shipping</h3>
                </div>
                <div className="relative border border-px border-black h-[210px]">
                    <div className="absolute w-full h-full bg-[#C0C0C0] opacity-10"></div>
                    <Image className="absolute top-[20%] left-[30%]" height={100} width={100} src={productQualityIcon} alt="product-quality" />
                    <h3 className="absolute  w-auto left-[20%] px-2 bottom-[10%] py-1 text-center uppercase bg-[#D50000] text-white font-lato:black">product quality</h3>
                </div>
                <div className="relative border border-px border-black h-[210px]">
                    <div className="absolute w-full h-full bg-[#C0C0C0] opacity-10"></div>
                    <Image className="absolute top-[20%] left-[30%]" height={100} width={100} src={onlineSupportIcon} alt="online-support" />
                    <h3 className="absolute w-auto left-[25%] px-2 bottom-[10%]  py-1 text-center uppercase bg-[#D50000] text-white font-lato:black">online support</h3>
                </div>
                <div className="relative border border-px border-black h-[210px]">
                    <div className="absolute w-full h-full bg-[#C0C0C0] opacity-10"></div>
                    <Image className="absolute top-[20%] left-[35%]" height={100} width={100} src={complaintBoxIcon} alt="complaint-box" />
                    <h3 className="absolute w-auto left-[25%] px-2 bottom-[10%] py-1 text-center uppercase bg-[#D50000] text-white font-lato:black">complaint box</h3>
                </div>
            </div>
        </section>
    );
}