
import Category from "@/app/component/layout/category";
import Header from "@/app/component/layout/header";
import { ShopCategoryProduct, ProductCardType } from "@/app/models/products/shop-category";
import ProductCard from "../../component/shops/product-card";
import shirtHeaderImage from '../../../../public/images/category/shirts/shirt-header.jpg';

import { storeData } from "../../../../static/data/shop";

export default function Shop() {

    console.log('storeData: ', storeData);

    return (
        <section id="shop">
            <div className="xl:pb-[80px]">
                <Header />
            </div>
            {/* shop nav starts */}
            <div className="my-2.5 h-[35px] bg-[#D50000] content-center px-24 text-white font-lato:regular text-[10px]">
                <span className="px-2.5 hover:font-bold cursor-pointer">Jump to </span>
                <span>&gt;</span>
                <span className="px-2.5 hover:font-bold cursor-pointer">Shirts</span>
                <span>&gt;</span>
                <span className="px-2.5 hover:font-bold cursor-pointer">Pants</span>
                <span>&gt;</span>
                <span className="px-2.5 hover:font-bold cursor-pointer">Belts</span>
                <span>&gt;</span>
                <span className="px-2.5 hover:font-bold cursor-pointer">Suits</span>
            </div>
            {/* shop nav ends */}
            <div className="px-24">
                {/* shirt starts */}
                <div className="flex justify-around flex-wrap space-y-5">
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
                <div className="flex justify-around flex-wrap space-y-5 my-[22px]">
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
                <div className="flex justify-around flex-wrap space-y-5 my-[22px]">
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
                <div className="flex justify-around flex-wrap space-y-5 my-[22px]">
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