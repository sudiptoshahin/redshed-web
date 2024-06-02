import { ProductCardProps, ProductCardType } from "@/app/models/products/shop-category";
import Image64 from '@/app/utils/Image64';

import Image from "next/image";

export default function ProductCard({ title, image, type, headline, category, price, currency }: ProductCardProps) {

    return (
        <section id="product-card">
            <div className="xl:w-[300px] 2xl:w-[400px]">
                <Image priority src={image} alt={type} className="w-full" width={300} height={200} />
                {/* headline */}
                {
                    type === ProductCardType.HEADER && (
                        <div className="h-[120px] relative">
                            <div className="w-full h-full absolute bg-[#C4C4C4] opacity-[50%]"></div>
                            <div className="text-center font-lato:bold">
                                <h1 className="uppercase text-black opacity-[80%] font-bold text-[36px]">{category}</h1>
                                <p className="text-black text-[14px] opacity-[70%]">{headline}</p>
                            </div>
                        </div>
                    )
                }
                {/* headline ends */}

                {/* product */}
                {
                    type === ProductCardType.PRODUCT && (
                        <div className="text-center font-lato:regular text-[14px]">
                            <p className="uppercase truncate">{title}</p>
                            <p>{price}{currency}</p>
                        </div>
                    )
                }
                {/* product ends */}

            </div>
        </section>
    );
}