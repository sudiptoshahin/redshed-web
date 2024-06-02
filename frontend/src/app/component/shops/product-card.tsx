import { ProductCardProps } from "@/app/models/products/shop-category";
import Image from "next/image";

export default function ProductCard(props: ProductCardProps) {

    return (
        <section id="product-card">
            <div className="">
                <Image src={props.image} alt="shirt-header" width={300} height={200} />
            </div>
        </section>
    );
}