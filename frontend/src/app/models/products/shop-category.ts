
import { StaticImageData } from "next/image";
import { Product } from "./product";

export interface ShopCategoryProduct {
    id: number;
    category: string;
    categoryImage: string;
    categoryHeadline: string;
    products: Product[];
}

export enum ProductCardType {
    HEADER = 'product-header',
    PRODUCT = 'product'
}

export interface ProductCardProps {
    title?: string;
    image: string;
    type: ProductCardType
    headline?: string;
    category?: string;
    price?: string;
    currency?: string;
}