
import Image from "next/image";
import { GalleryContentProps } from "@/app/models/landing/offergallery";
import redirectIcon from '../../../../public/images/icons/redirect.svg';

export default function GalleryContent(props: GalleryContentProps) {

    return (
        <section id="gallery-content">
            <div className="w-full h-[266px] relative">
                <Image className='h-full' src={props.image} alt="offer-image" />
                <div className="cursor-pointer">
                    <div className="absolute bottom-0 bg-[#D50000] w-full py-5 opacity-70"></div>
                    <h2 className="absolute bottom-0 text-white font-lato:semibold text-md indent-5 py-2 capitalize">See all offer on {props.title}</h2>
                    <Image className="absolute bottom-0 right-0 py-2 mx-2" src={redirectIcon} alt="redirect-icon" />
                </div>
            </div>
        </section>
    );
}