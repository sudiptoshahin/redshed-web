
import Image from "next/image";
import { StaticImageData } from 'next/image';

enum CategoryType {
    styleType = 0,
    categories = 1
}

interface CategoryModel {
    url: string | StaticImageData,
    title: string,
    buttonTitle: string,
    componentType: CategoryType
}

export default function Category(props: CategoryModel) {

    return (
        <section id="category">
            <div className="relative max-w-[389px] max-h-[295px]">
                <Image className="w-full h-auto" src={props.url} alt="formal-type" />
                {
                    props.componentType === CategoryType.styleType ? (
                        <div className="absolute top-[35%] text-white text-center w-full">
                            <h1 className="font-michroma capitalize style-type-text-shadow text-3xl pb-5 bg-blend-darken">{props.title}</h1>
                            <button className="bg-[#D50000] px-10 py-1.5 uppercase">{props.buttonTitle}</button>
                        </div>

                    ) : <></>
                }
            </div>
        </section>
    )
}