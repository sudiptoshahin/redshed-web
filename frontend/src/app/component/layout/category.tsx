
import Image from "next/image";
import { StaticImageData } from 'next/image';
import { CategoryType, CategoryComponentProps } from "@/app/models/categories/categorycontainer";

export default function Category(props: CategoryComponentProps) {

    return (
        <section id="category">
            <div className={`relative max-w-[389px] max-h-[295px] ${props.componentType === CategoryType.categories && 'mt-9 mb-24'}`}>
                <Image className="h-auto" src={props.url} alt="formal-type" />
                {
                    props.componentType === CategoryType.styleType ? (
                        <div className="absolute top-[35%] text-white text-center w-full">
                            <h1 className="font-michroma capitalize style-type-text-shadow text-3xl pb-5 bg-blend-darken">{props.title}</h1>
                            <button className="bg-[#D50000] px-10 py-1.5 uppercase">{props.buttonTitle}</button>
                        </div>

                    ) : (
                        <div className="absolute top-[70%] bg-white px-14 py-1 rounded-r-3xl ">
                            <h2 className="capitalize font-medium font-michroma text-[#D50000]" style={{ fontSize: '14px' }}>{props.title}</h2>
                        </div>
                    )
                }
            </div>
        </section>
    )
}