
import Image from "next/image";
// import { StaticImageData } from 'next/image';
import { CategoryType, CategoryComponentProps } from 
"@/app/models/categories/categorycontainer";

export default function Category(props: CategoryComponentProps) {

    return (
        <section>
            <div className={`${props.componentType === CategoryType.categories && 
            'mt-9 mb-24'} relative aspect-[1.51162] w-full `}>
                <Image className="w-full h-full" 
                    src={props.url} alt="formal-type"
                    loading="lazy" />
                {
                    props.componentType === CategoryType.styleType ? (
                        <div className="absolute w-full top-0 text-white">
                            <div className="aspect-[1.5760] w-full text-center 
                            content-center">
                                <h1 className="font-michroma capitalize 
                                style-type-text-shadow md:text-[1.25rem] 2xl:text-[2.5rem] 
                                pb-5 bg-blend-darken">{props.title}</h1>
                                {/* px-10 py-1.5 */}
                                <button className="bg-[#D50000] aspect-[4] px-5 
                                text-[12px] md:text-[14px] xl:text-[16px] 
                                uppercase font-[300]">{props.buttonTitle}</button>
                            </div>
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