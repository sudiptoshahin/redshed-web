import GalleryContent from "./gallery-content";
import Image from "next/image";

import casualShoes from '../../../../public/images/category/casual-shoes.jpg';
import formalShoes from '../../../../public/images/category/formal-shoes.jpg';
import bootShoes from '../../../../public/images/category/boots-shoes.jpg';
import sportsShoe from '../../../../public/images/category/sports-shoes.jpg';
import centerOfferImage from '../../../../public/images/category/sales-offer-img.jpg';

const offerGalleryData = [
    {
        id: 1,
        image: casualShoes,
        title: 'See offers on all Casual shoes'
    },
    {
        id: 2,
        image: formalShoes,
        title: 'See offers on all Formal shoes'
    },
    {
        id: 3,
        image: bootShoes,
        title: 'See offers on all Boots shoes'
    },
    {
        id: 4,
        image: sportsShoe,
        title: 'See offers on all Sports shoes'
    },
];

export default function OfferGallery() {

    return (
        <section id="offer-gallery" className="pb-6">
            <div className="grid grid-cols-4 gap-3 px-8">
                <div className="flex flex-col justify-around">
                    <div className="">
                        <GalleryContent image={casualShoes} title="casual shoes" />
                    </div>
                    <div className="mt-3">
                        <GalleryContent image={formalShoes} title="formal shoes" />
                    </div>
                </div>
                <div className="col-span-2">
                    <Image className="w-full" src={centerOfferImage} alt='center offer image' />
                </div>
                <div className="flex flex-col justify-around">
                    <div className="">
                        <GalleryContent image={bootShoes} title="boot shoes" />
                    </div>
                    <div className="mt-3">
                        <GalleryContent image={sportsShoe} title="sports shoes" />
                    </div>
                </div>
            </div>
        </section>
    );
}