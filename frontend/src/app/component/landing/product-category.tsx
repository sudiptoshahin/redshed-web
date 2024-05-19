
import CategoryContainer from "./category-container";
import shirtBg from '../../../../public/images/category/category-shirt.jpg';
import beltBg from '../../../../public/images/category/category-belt.jpg';
import shoesBg from '../../../../public/images/category/category-shoes.jpg';
import shadesBg from '../../../../public/images/category/category-shades.jpg';
import suitsBg from '../../../../public/images/category/category-suits.jpg';

export default function ProductCategory() {

    const productCategoryData = [
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
        <section id="product-category">
            <div className="">
                <CategoryContainer dataList={productCategoryData} showItems={4} itemGap={4} />
            </div>
        </section>
    );
}