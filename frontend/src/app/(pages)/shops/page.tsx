
import Category from "@/app/component/layout/category";
import Header from "@/app/component/layout/header";
import { ShopCategoryProduct, ProductCardType } from "@/app/models/products/shop-category";
import ProductCard from "../../component/shops/product-card";
import shirtHeaderImage from '../../../../public/images/category/shirts/shirt-header.jpg';
import Link from "next/link";
import { storeData } from "../../../../static/data/shop";

export default function Shop() {

    console.log('storeData: ', storeData);

    return (
        <section id="shop">
            {/* shop nav starts */}
            <div className="fixed w-full z-[999] top-[80px]">
                <div className="relative">
                    <div className="absolute border-t border-t-white border-t-[1px] border-b border-b-white border-b-[1px] my-2.5 h-[30px] content-center px-24 text-white font-lato:regular text-[10px] w-full z-20">
                        <span className="px-2.5 cursor-default">Jump to </span>
                        <span className="cursor-default">&gt;</span>
                        <Link href={'#shirts-cat'}>
                            <span className="px-2.5 hover:font-bold cursor-pointer">Shirts</span>
                        </Link>
                        <span className="cursor-default">&gt;</span>
                        <Link href={'#pants-cat'}>
                            <span className="px-2.5 hover:font-bold cursor-pointer">Pants</span>
                        </Link>
                        <span className="cursor-default">&gt;</span>
                        <Link href={'#belts-cat'}>
                            <span className="px-2.5 hover:font-bold cursor-pointer">Belts</span>
                        </Link>
                        <span className="cursor-default">&gt;</span>
                        <Link href={'#suits-cat'}>
                            <span className="px-2.5 hover:font-bold cursor-pointer">Suits</span>
                        </Link>
                    </div>
                    <div className="absolute bg-[#D50000] w-full h-[40px] top-[5px] z-10 opacity-[75%]"></div>
                </div>
            </div>
            {/* shop nav ends */}
            <div className="px-24 mt-[80px]">
                {/* shirt starts */}
                <div id="shirts-cat" className="flex items-center justify-between flex-wrap space-y-5">
                    <ProductCard
                        image={storeData.shirts.categoryImage}
                        type={ProductCardType.HEADER}
                        headline={storeData.shirts.categoryHeadline}
                        category={storeData.shirts.category} />

                    {
                        storeData.shirts.products.length > 0 && storeData.shirts.products.map(product => {
                            return (
                                <ProductCard
                                    title={product.title}
                                    image={product.image}
                                    type={ProductCardType.PRODUCT}
                                    price={product.price}
                                    currency={product.currency} />
                            );
                        })
                    }
                </div>
                <div className="text-center py-[22px]">
                    <button className="w-[140px] h-[34px] bg-[#E44848] capitalize text-white">
                        show more
                    </button>
                </div>
                {/* shirt ends */}

                {/* pants starts */}
                <div id="pants-cat" className="flex items-center justify-between flex-wrap space-y-5 my-[22px]">
                    <ProductCard
                        image={storeData.pants.categoryImage}
                        type={ProductCardType.HEADER}
                        headline={storeData.pants.categoryHeadline}
                        category={storeData.pants.category} />

                    {
                        storeData.pants.products.length > 0 && storeData.pants.products.map(product => {
                            return (
                                <ProductCard
                                    title={product.title}
                                    image={product.image}
                                    type={ProductCardType.PRODUCT}
                                    price={product.price}
                                    currency={product.currency} />
                            );
                        })
                    }
                </div>
                <div className="text-center py-[22px]">
                    <button className="w-[140px] h-[34px] bg-[#E44848] capitalize text-white">
                        show more
                    </button>
                </div>
                {/* pants ends */}

                {/* belts starts */}
                <div id="belts-cat" className="flex items-center justify-between flex-wrap space-y-5 my-[22px]">
                    <ProductCard
                        image={storeData.belts.categoryImage}
                        type={ProductCardType.HEADER}
                        headline={storeData.belts.categoryHeadline}
                        category={storeData.belts.category} />

                    {
                        storeData.belts.products.length > 0 && storeData.belts.products.map(product => {
                            return (
                                <ProductCard
                                    title={product.title}
                                    image={product.image}
                                    type={ProductCardType.PRODUCT}
                                    price={product.price}
                                    currency={product.currency} />
                            );
                        })
                    }
                </div>
                <div className="text-center py-[22px]">
                    <button className="w-[140px] h-[34px] bg-[#E44848] capitalize text-white">
                        show more
                    </button>
                </div>
                {/* belts ends */}

                {/* suits starts */}
                <div id="suits-cat" className="flex items-center justify-between flex-wrap space-y-5 my-[22px]">
                    <ProductCard
                        image={storeData.suits.categoryImage}
                        type={ProductCardType.HEADER}
                        headline={storeData.suits.categoryHeadline}
                        category={storeData.suits.category} />

                    {
                        storeData.suits.products.length > 0 && storeData.suits.products.map(product => {
                            return (
                                <ProductCard
                                    title={product.title}
                                    image={product.image}
                                    type={ProductCardType.PRODUCT}
                                    price={product.price}
                                    currency={product.currency} />
                            );
                        })
                    }
                </div>
                <div className="text-center py-[22px]">
                    <button className="w-[140px] h-[34px] bg-[#E44848] capitalize text-white">
                        show more
                    </button>
                </div>
                {/* suits ends */}
            </div>
        </section>
    );
}