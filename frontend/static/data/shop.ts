
import { ShopCategoryProduct } from "@/app/models/products/shop-category"

interface Store {
  shirts: ShopCategoryProduct;
  pants: ShopCategoryProduct;
  belts: ShopCategoryProduct;
  suits: ShopCategoryProduct;
}

const storeData: Store = {
  shirts: {
    id: 1,
    category: "shirt",
    categoryImage: "/images/category/shirts/shirt-header.jpg",
    categoryHeadline: "The regular rotation, office-ready staple - ready to work.",
    products: [
      {
        id: "1",
        title: "BLUE & RED GINGHAM ATHLETIC SHIRT",
        category: "shirt",
        image: "/images/category/shirts/shirt-1.jpg",
        subimages: null,
        price: "40",
        currency: "$",
        isDiscounted: false,
        discountPrice: null,
        discountInPercent: 0,
        isInStock: true,
        createdAt: "2024-05-23T00:00:00.000Z",
        updatedAt: "2024-05-23T00:00:00.000Z",
      },
      {
        id: "2",
        title: "BLUE & RED GINGHAM ATHLETIC SHIRT",
        category: "shirt",
        image: "/images/category/shirts/shirt-2.jpg",
        subimages: null,
        price: "56",
        currency: "$",
        isDiscounted: false,
        discountPrice: null,
        discountInPercent: 0,
        isInStock: true,
        createdAt: "2024-05-23T00:00:00.000Z",
        updatedAt: "2024-05-23T00:00:00.000Z",
      },
      {
        id: "3",
        title: "BLUE & RED GINGHAM ATHLETIC SHIRT",
        category: "shirt",
        image: "/images/category/shirts/shirt-3.jpg",
        subimages: null,
        price: "56",
        currency: "$",
        isDiscounted: false,
        discountPrice: null,
        discountInPercent: 0,
        isInStock: true,
        createdAt: "2024-05-23T00:00:00.000Z",
        updatedAt: "2024-05-23T00:00:00.000Z",
      },
      {
        id: "4",
        title: "BLUE & RED GINGHAM ATHLETIC SHIRT",
        category: "shirt",
        image: "/images/category/shirts/shirt-4.jpg",
        subimages: null,
        price: "67",
        currency: "$",
        isDiscounted: false,
        discountPrice: null,
        discountInPercent: 0,
        isInStock: true,
        createdAt: "2024-05-23T00:00:00.000Z",
        updatedAt: "2024-05-23T00:00:00.000Z",
      },
      {
        id: "5",
        title: "BLUE & RED GINGHAM ATHLETIC SHIRT",
        category: "shirt",
        image: "/images/category/shirts/shirt-5.jpg",
        subimages: null,
        price: "90",
        currency: "$",
        isDiscounted: false,
        discountPrice: null,
        discountInPercent: 0,
        isInStock: true,
        createdAt: "2024-05-23T00:00:00.000Z",
        updatedAt: "2024-05-23T00:00:00.000Z",
      },
    ],
  },
  pants: {
    id: 2,
    category: "pants",
    categoryImage: "/images/category/pants/pant-head.jpg",
    categoryHeadline: "The regular rotation, office-ready staple - ready to work.",
    products: [
      {
        id: "1",
        title: "BLUE & RED GINGHAM ATHLETIC SHIRT",
        category: "pant",
        image: "/images/category/pants/pant-1.jpg",
        subimages: null,
        price: "40",
        currency: "$",
        isDiscounted: false,
        discountPrice: null,
        discountInPercent: 0,
        isInStock: true,
        createdAt: "2024-05-23T00:00:00.000Z",
        updatedAt: "2024-05-23T00:00:00.000Z",
      },
      {
        id: "2",
        title: "BLUE & RED GINGHAM ATHLETIC SHIRT",
        category: "pant",
        image: "/images/category/pants/pant-2.jpg",
        subimages: null,
        price: "56",
        currency: "$",
        isDiscounted: false,
        discountPrice: null,
        discountInPercent: 0,
        isInStock: true,
        createdAt: "2024-05-23T00:00:00.000Z",
        updatedAt: "2024-05-23T00:00:00.000Z",
      },
      {
        id: "3",
        title: "BLUE & RED GINGHAM ATHLETIC SHIRT",
        category: "pant",
        image: "/images/category/pants/pant-3.jpg",
        subimages: null,
        price: "56",
        currency: "$",
        isDiscounted: false,
        discountPrice: null,
        discountInPercent: 0,
        isInStock: true,
        createdAt: "2024-05-23T00:00:00.000Z",
        updatedAt: "2024-05-23T00:00:00.000Z",
      },
      {
        id: "4",
        title: "BLUE & RED GINGHAM ATHLETIC SHIRT",
        category: "pant",
        image: "/images/category/pants/pant-4.jpg",
        subimages: null,
        price: "67",
        currency: "$",
        isDiscounted: false,
        discountPrice: null,
        discountInPercent: 0,
        isInStock: true,
        createdAt: "2024-05-23T00:00:00.000Z",
        updatedAt: "2024-05-23T00:00:00.000Z",
      },
      {
        id: "5",
        title: "BLUE & RED GINGHAM ATHLETIC SHIRT",
        category: "pant",
        image: "/images/category/pants/pant-5.jpg",
        subimages: null,
        price: "90",
        currency: "$",
        isDiscounted: false,
        discountPrice: null,
        discountInPercent: 0,
        isInStock: true,
        createdAt: "2024-05-23T00:00:00.000Z",
        updatedAt: "2024-05-23T00:00:00.000Z",
      },
    ],
  },
  belts: {
    id: 3,
    category: "belts",
    categoryImage: "/images/category/belts/belt-head.jpg",
    categoryHeadline: "The regular rotation, office-ready staple - ready to work.",
    products: [
      {
        id: "1",
        title: "OXBLOOD LEATHER BELT",
        category: "belt",
        image: "/images/category/belts/belt-1.jpg",
        subimages: null,
        price: "16",
        currency: "$",
        isDiscounted: false,
        discountPrice: null,
        discountInPercent: 0,
        isInStock: true,
        createdAt: "2024-05-23T00:00:00.000Z",
        updatedAt: "2024-05-23T00:00:00.000Z",
      },
      {
        id: "2",
        title: "BLACK ROUNDED BUCKLE LEATHER BELT",
        category: "belt",
        image: "/images/category/belts/belt-2.jpg",
        subimages: null,
        price: "10",
        currency: "$",
        isDiscounted: false,
        discountPrice: null,
        discountInPercent: 0,
        isInStock: true,
        createdAt: "2024-05-23T00:00:00.000Z",
        updatedAt: "2024-05-23T00:00:00.000Z",
      },
      {
        id: "3",
        title: "BROWN ROUNDED BUCKLE LEATHER BELT",
        category: "belt",
        image: "/images/category/belts/belt-3.jpg",
        subimages: null,
        price: "20",
        currency: "$",
        isDiscounted: false,
        discountPrice: null,
        discountInPercent: 0,
        isInStock: true,
        createdAt: "2024-05-23T00:00:00.000Z",
        updatedAt: "2024-05-23T00:00:00.000Z",
      },
      {
        id: "4",
        title: "BROWN ROUNDED BUCKLE LEATHER BELT",
        category: "belt",
        image: "/images/category/belts/belt-4.jpg",
        subimages: null,
        price: "17",
        currency: "$",
        isDiscounted: false,
        discountPrice: null,
        discountInPercent: 0,
        isInStock: true,
        createdAt: "2024-05-23T00:00:00.000Z",
        updatedAt: "2024-05-23T00:00:00.000Z",
      },
      {
        id: "5",
        title: "BROWN ROUNDED BUCKLE LEATHER BELT",
        category: "belt",
        image: "/images/category/belts/belt-4.jpg",
        subimages: null,
        price: "90",
        currency: "$",
        isDiscounted: false,
        discountPrice: null,
        discountInPercent: 0,
        isInStock: true,
        createdAt: "2024-05-23T00:00:00.000Z",
        updatedAt: "2024-05-23T00:00:00.000Z",
      },
    ],
  },
  suits: {
    id: 4,
    category: "suits",
    categoryImage: "/images/category/suits/suits-head.jpg",
    categoryHeadline: "The regular rotation, office-ready staple - ready to work.",
    products: [
      {
        id: "1",
        title: "SUMMIT SLATE BLUE TWILL TAILORED FIT SUIT",
        category: "suit",
        image: "/images/category/suits/suit-1.jpg",
        subimages: null,
        price: "140",
        currency: "$",
        isDiscounted: false,
        discountPrice: null,
        discountInPercent: 0,
        isInStock: true,
        createdAt: "2024-05-23T00:00:00.000Z",
        updatedAt: "2024-05-23T00:00:00.000Z",
      },
      {
        id: "2",
        title: "SUMMIT SLATE BLUE TWILL TAILORED FIT SUIT",
        category: "suit",
        image: "/images/category/suits/suit-2.jpg",
        subimages: null,
        price: "56",
        currency: "$",
        isDiscounted: false,
        discountPrice: null,
        discountInPercent: 0,
        isInStock: true,
        createdAt: "2024-05-23T00:00:00.000Z",
        updatedAt: "2024-05-23T00:00:00.000Z",
      },
      {
        id: "3",
        title: "SUMMIT SLATE BLUE TWILL TAILORED FIT SUIT",
        category: "suit",
        image: "/images/category/suits/suit-3.jpg",
        subimages: null,
        price: "56",
        currency: "$",
        isDiscounted: false,
        discountPrice: null,
        discountInPercent: 0,
        isInStock: true,
        createdAt: "2024-05-23T00:00:00.000Z",
        updatedAt: "2024-05-23T00:00:00.000Z",
      },
      {
        id: "4",
        title: "SUMMIT SLATE BLUE TWILL TAILORED FIT SUIT",
        category: "suit",
        image: "/images/category/suits/suit-4.jpg",
        subimages: null,
        price: "67",
        currency: "$",
        isDiscounted: false,
        discountPrice: null,
        discountInPercent: 0,
        isInStock: true,
        createdAt: "2024-05-23T00:00:00.000Z",
        updatedAt: "2024-05-23T00:00:00.000Z",
      },
      {
        id: "5",
        title: "SUMMIT SLATE BLUE TWILL TAILORED FIT SUIT",
        category: "suit",
        image: "/images/category/suits/suit-5.jpg",
        subimages: null,
        price: "90",
        currency: "$",
        isDiscounted: false,
        discountPrice: null,
        discountInPercent: 0,
        isInStock: true,
        createdAt: "2024-05-23T00:00:00.000Z",
        updatedAt: "2024-05-23T00:00:00.000Z",
      },
    ],
  },
};

export { storeData };