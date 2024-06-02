
import { StaticImageData } from "next/image";
import { Product } from "./product";

export interface ShopCategoryProduct {
    id: number,
    category: string,
    categoryImage: StaticImageData,
    categoryHeadline: string,
    products: Product[],
}

export interface ProductCardProps {
    title: string,
    image: StaticImageData
}