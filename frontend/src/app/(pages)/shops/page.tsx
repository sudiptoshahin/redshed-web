
import Category from "@/app/component/layout/category";
import Header from "@/app/component/layout/header";
import { ShopCategoryProduct } from "@/app/models/products/shop-category";
import ProductCard from "../../component/shops/product-card";
import shirtHeaderImage from '../../../../public/images/category/shirts/shirt-header.jpg';
import shopData from '../../../../static/data/shop.json';
import * as fs from 'fs';

export default function Shop() {

    // ShopCategoyProduct
    // Product

    // Function to read JSON file and parse it to TypeScript object
    function readJSONFile(filePath: string): ShopCategoryProduct {
        // Read the file
        const rawData = fs.readFileSync(filePath, 'utf-8');
        // Parse the JSON data
        const jsonData: ShopCategoryProduct = JSON.parse(rawData);

        return jsonData;
    }

    const formattedData: ShopCategoryProduct = readJSONFile('/static/data/shop.json');

    console.log(formattedData)


    // const shirts: ShopCategoryProduct = {
    //     id: 1,
    //     category: 'shirt',
    //     // /public/images/category/shirts/shirt-header.jpg
    //     categoryImage: shirtHeaderImage,
    //     categoryHeadline: 'The regular rotation, office-ready staple - ready to work.',
    //     products: [
    //         {
    //             id: '1',
    //             title: 'BLUE & RED GINGHAM ATHLETIC SHIRT',
    //             category: 'shirt',
    //             image: '/public/images/category/shirts/shirts-1.jpg',
    //             subimages: null,
    //             price: '40',
    //             currency: '$',
    //             isDiscounted: false,
    //             discountPrice: null,
    //             discountInPercent: 0,
    //             isInStock: true,
    //             createdAt: new Date('2024-05-23'),
    //             updatedAt: new Date('2024-05-23')
    //         },
    //         {
    //             id: '2',
    //             title: 'BLUE & RED GINGHAM ATHLETIC SHIRT',
    //             category: 'shirt',
    //             image: '/public/images/category/shirts/shirts-2.jpg',
    //             subimages: null,
    //             price: '56',
    //             currency: '$',
    //             isDiscounted: false,
    //             discountPrice: null,
    //             discountInPercent: 0,
    //             isInStock: true,
    //             createdAt: new Date('2024-05-23'),
    //             updatedAt: new Date('2024-05-23')
    //         },
    //         {
    //             id: '3',
    //             title: 'BLUE & RED GINGHAM ATHLETIC SHIRT',
    //             category: 'shirt',
    //             image: '/public/images/category/shirts/shirts-3.jpg',
    //             subimages: null,
    //             price: '56',
    //             currency: '$',
    //             isDiscounted: false,
    //             discountPrice: null,
    //             discountInPercent: 0,
    //             isInStock: true,
    //             createdAt: new Date('2024-05-23'),
    //             updatedAt: new Date('2024-05-23')
    //         },
    //         {
    //             id: '4',
    //             title: 'BLUE & RED GINGHAM ATHLETIC SHIRT',
    //             category: 'shirt',
    //             image: '/public/images/category/shirts/shirts-4.jpg',
    //             subimages: null,
    //             price: '67',
    //             currency: '$',
    //             isDiscounted: false,
    //             discountPrice: null,
    //             discountInPercent: 0,
    //             isInStock: true,
    //             createdAt: new Date('2024-05-23'),
    //             updatedAt: new Date('2024-05-23')
    //         },
    //         {
    //             id: '5',
    //             title: 'BLUE & RED GINGHAM ATHLETIC SHIRT',
    //             category: 'shirt',
    //             image: '/public/images/category/shirts/shirts-5.jpg',
    //             subimages: null,
    //             price: '90',
    //             currency: '$',
    //             isDiscounted: false,
    //             discountPrice: null,
    //             discountInPercent: 0,
    //             isInStock: true,
    //             createdAt: new Date('2024-05-23'),
    //             updatedAt: new Date('2024-05-23')
    //         }
    //     ],
    // };

    // const pants: ShopCategoryProduct = {
    //     id: 2,
    //     category: 'pants',
    //     categoryImage: '/public/images/category/pants/pant-head.jpg',
    //     categoryHeadline: 'The regular rotation, office-ready staple - ready to work.',
    //     products: [
    //         {
    //             id: '1',
    //             title: 'BLUE & RED GINGHAM ATHLETIC SHIRT',
    //             category: 'pant',
    //             image: '/public/images/category/pants/pant-1.jpg',
    //             subimages: null,
    //             price: '40',
    //             currency: '$',
    //             isDiscounted: false,
    //             discountPrice: null,
    //             discountInPercent: 0,
    //             isInStock: true,
    //             createdAt: new Date('2024-05-23'),
    //             updatedAt: new Date('2024-05-23')
    //         },
    //         {
    //             id: '2',
    //             title: 'BLUE & RED GINGHAM ATHLETIC SHIRT',
    //             category: 'pant',
    //             image: '/public/images/category/pants/pant-2.jpg',
    //             subimages: null,
    //             price: '56',
    //             currency: '$',
    //             isDiscounted: false,
    //             discountPrice: null,
    //             discountInPercent: 0,
    //             isInStock: true,
    //             createdAt: new Date('2024-05-23'),
    //             updatedAt: new Date('2024-05-23')
    //         },
    //         {
    //             id: '3',
    //             title: 'BLUE & RED GINGHAM ATHLETIC SHIRT',
    //             category: 'pant',
    //             image: '/public/images/category/pants/pant-3.jpg',
    //             subimages: null,
    //             price: '56',
    //             currency: '$',
    //             isDiscounted: false,
    //             discountPrice: null,
    //             discountInPercent: 0,
    //             isInStock: true,
    //             createdAt: new Date('2024-05-23'),
    //             updatedAt: new Date('2024-05-23')
    //         },
    //         {
    //             id: '4',
    //             title: 'BLUE & RED GINGHAM ATHLETIC SHIRT',
    //             category: 'pant',
    //             image: '/public/images/category/pants/pant-4.jpg',
    //             subimages: null,
    //             price: '67',
    //             currency: '$',
    //             isDiscounted: false,
    //             discountPrice: null,
    //             discountInPercent: 0,
    //             isInStock: true,
    //             createdAt: new Date('2024-05-23'),
    //             updatedAt: new Date('2024-05-23')
    //         },
    //         {
    //             id: '5',
    //             title: 'BLUE & RED GINGHAM ATHLETIC SHIRT',
    //             category: 'pant',
    //             image: '/public/images/category/pants/pant-5.jpg',
    //             subimages: null,
    //             price: '90',
    //             currency: '$',
    //             isDiscounted: false,
    //             discountPrice: null,
    //             discountInPercent: 0,
    //             isInStock: true,
    //             createdAt: new Date('2024-05-23'),
    //             updatedAt: new Date('2024-05-23')
    //         }
    //     ],
    // };

    // const belts: ShopCategoryProduct = {
    //     id: 3,
    //     category: 'belts',
    //     categoryImage: '/public/images/category/belts/belt-head.jpg',
    //     categoryHeadline: 'The regular rotation, office-ready staple - ready to work.',
    //     products: [
    //         {
    //             id: '1',
    //             title: 'OXBLOOD LEATHER BELT',
    //             category: 'belt',
    //             image: '/public/images/category/belts/belt-1.jpg',
    //             subimages: null,
    //             price: '16',
    //             currency: '$',
    //             isDiscounted: false,
    //             discountPrice: null,
    //             discountInPercent: 0,
    //             isInStock: true,
    //             createdAt: new Date('2024-05-23'),
    //             updatedAt: new Date('2024-05-23')
    //         },
    //         {
    //             id: '2',
    //             title: 'BLACK ROUNDED BUCKLE LEATHER BELT',
    //             category: 'belt',
    //             image: '/public/images/category/belts/belt-2.jpg',
    //             subimages: null,
    //             price: '10',
    //             currency: '$',
    //             isDiscounted: false,
    //             discountPrice: null,
    //             discountInPercent: 0,
    //             isInStock: true,
    //             createdAt: new Date('2024-05-23'),
    //             updatedAt: new Date('2024-05-23')
    //         },
    //         {
    //             id: '3',
    //             title: 'BROWN ROUNDED BUCKLE LEATHER BELT',
    //             category: 'belt',
    //             image: '/public/images/category/belts/belt-3.jpg',
    //             subimages: null,
    //             price: '20',
    //             currency: '$',
    //             isDiscounted: false,
    //             discountPrice: null,
    //             discountInPercent: 0,
    //             isInStock: true,
    //             createdAt: new Date('2024-05-23'),
    //             updatedAt: new Date('2024-05-23')
    //         },
    //         {
    //             id: '4',
    //             title: 'BROWN ROUNDED BUCKLE LEATHER BELT',
    //             category: 'belt',
    //             image: '/public/images/category/belts/belt-4.jpg',
    //             subimages: null,
    //             price: '17',
    //             currency: '$',
    //             isDiscounted: false,
    //             discountPrice: null,
    //             discountInPercent: 0,
    //             isInStock: true,
    //             createdAt: new Date('2024-05-23'),
    //             updatedAt: new Date('2024-05-23')
    //         },
    //         {
    //             id: '5',
    //             title: 'BROWN ROUNDED BUCKLE LEATHER BELT',
    //             category: 'belt',
    //             image: '/public/images/category/belts/belt-4.jpg',
    //             subimages: null,
    //             price: '90',
    //             currency: '$',
    //             isDiscounted: false,
    //             discountPrice: null,
    //             discountInPercent: 0,
    //             isInStock: true,
    //             createdAt: new Date('2024-05-23'),
    //             updatedAt: new Date('2024-05-23')
    //         }
    //     ],
    // };

    // const suits: ShopCategoryProduct = {
    //     id: 4,
    //     category: 'suits',
    //     categoryImage: '/public/images/category/suits/suits-head.jpg',
    //     categoryHeadline: 'The regular rotation, office-ready staple - ready to work.',
    //     products: [
    //         {
    //             id: '1',
    //             title: 'SUMMIT SLATE BLUE TWILL TAILORED FIT SUIT',
    //             category: 'suit',
    //             image: '/public/images/category/suits/suit-1.jpg',
    //             subimages: null,
    //             price: '140',
    //             currency: '$',
    //             isDiscounted: false,
    //             discountPrice: null,
    //             discountInPercent: 0,
    //             isInStock: true,
    //             createdAt: new Date('2024-05-23'),
    //             updatedAt: new Date('2024-05-23')
    //         },
    //         {
    //             id: '2',
    //             title: 'SUMMIT SLATE BLUE TWILL TAILORED FIT SUIT',
    //             category: 'suit',
    //             image: '/public/images/category/suits/suit-2.jpg',
    //             subimages: null,
    //             price: '56',
    //             currency: '$',
    //             isDiscounted: false,
    //             discountPrice: null,
    //             discountInPercent: 0,
    //             isInStock: true,
    //             createdAt: new Date('2024-05-23'),
    //             updatedAt: new Date('2024-05-23')
    //         },
    //         {
    //             id: '3',
    //             title: 'SUMMIT SLATE BLUE TWILL TAILORED FIT SUIT',
    //             category: 'suit',
    //             image: '/public/images/category/suits/suit-3.jpg',
    //             subimages: null,
    //             price: '56',
    //             currency: '$',
    //             isDiscounted: false,
    //             discountPrice: null,
    //             discountInPercent: 0,
    //             isInStock: true,
    //             createdAt: new Date('2024-05-23'),
    //             updatedAt: new Date('2024-05-23')
    //         },
    //         {
    //             id: '4',
    //             title: 'SUMMIT SLATE BLUE TWILL TAILORED FIT SUIT',
    //             category: 'suit',
    //             image: '/public/images/category/suits/suit-4.jpg',
    //             subimages: null,
    //             price: '67',
    //             currency: '$',
    //             isDiscounted: false,
    //             discountPrice: null,
    //             discountInPercent: 0,
    //             isInStock: true,
    //             createdAt: new Date('2024-05-23'),
    //             updatedAt: new Date('2024-05-23')
    //         },
    //         {
    //             id: '5',
    //             title: 'SUMMIT SLATE BLUE TWILL TAILORED FIT SUIT',
    //             category: 'suit',
    //             image: '/public/images/category/suits/suit-5.jpg',
    //             subimages: null,
    //             price: '90',
    //             currency: '$',
    //             isDiscounted: false,
    //             discountPrice: null,
    //             discountInPercent: 0,
    //             isInStock: true,
    //             createdAt: new Date('2024-05-23'),
    //             updatedAt: new Date('2024-05-23')
    //         }
    //     ],
    // };

    // const shopCategoryProductList = [
    //     shirts,
    //     pants,
    //     belts,
    //     suits
    // ];

    // console.log('-----', shopCategoryProductList);

    return (
        <section id="shop">
            <div className="xl:pb-[80px]">
                <Header />
            </div>
            {/* shop nav starts */}
            <div className="my-2.5 h-[35px] bg-[#D50000] content-center px-24 text-white font-lato:regular text-[10px]">
                <span className="px-2.5 hover:font-bold cursor-pointer">Jump to </span>
                <span className="px-2.5 hover:font-bold cursor-pointer">Shirts</span>
                <span className="px-2.5 hover:font-bold cursor-pointer">Pants</span>
                <span className="px-2.5 hover:font-bold cursor-pointer">Belts</span>
                <span className="px-2.5 hover:font-bold cursor-pointer">Suits</span>
            </div>
            {/* shop nav ends */}
            <div className="px-24 bg-blue-200">
                {/* <ProductCard title={'hello'} image={shopCategoryProductList[0].categoryImage} /> */}
            </div>
        </section>
    );
}