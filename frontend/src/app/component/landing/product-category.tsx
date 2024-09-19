
import CategoryContainer from "./category-container";
import shirtBg from '../../../../public/images/category/category-shirt.jpg';
import beltBg from '../../../../public/images/category/category-belt.jpg';
import shoesBg from '../../../../public/images/category/category-shoes.jpg';
import shadesBg from '../../../../public/images/category/category-shades.jpg';
import suitsBg from '../../../../public/images/category/category-suits.jpg';
import { CategoryType } from "@/app/models/categories/categorycontainer";

export default function ProductCategory() {

    const productTypes = [
        {
            id: 1,
            image: shirtBg,
            title: 'shirts',
        },
        {
            id: 2,
            image: beltBg,
            title: 'belts',
        },
        {
            id: 3,
            image: shoesBg,
            title: 'shoes',
        },
        {
            id: 4,
            image: shadesBg,
            title: 'shades',
        },
        {
            id: 5,
            image: suitsBg,
            title: 'suitsBg',
        },
    ]

    return (
        // <section id="product-category">
        //     <div className="">
        //     {/* productCategoryData */}
        //         <CategoryContainer dataList={productCategoryData} 
        //         componentType={CategoryType.categories} />
        //     </div>
        // </section>
        <section>
            <div className="">
                {/* {
                    productTypes.map()
                } */}
            </div>
        </section>
    );
}