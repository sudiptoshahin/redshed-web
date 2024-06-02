

export interface Product {
    id: string;
    title: string;
    category: string;
    image: string;
    subimages: string[] | null;
    price: string;
    currency: string;
    isDiscounted: Boolean;
    discountPrice: string | null;
    discountInPercent: number | null;
    colors?: string[];
    sizes?: string[];
    isInStock: Boolean;
    createdAt: Date | string | null,
    updatedAt: Date | string | null
}