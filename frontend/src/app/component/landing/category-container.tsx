
import Category from "../layout/category"
import { StaticImageData } from 'next/image';
import { CategoryContainerProps, CategoryComponentType, CategoryType } from
    "@/app/models/categories/categorycontainer";

type categoryObj = {
    id: number,
    image: StaticImageData,
    title: string
}

export default function CategoryContainer({
    dataList,
    componentType,
}: CategoryContainerProps) {

    return (
        <section id="category-container" className="">
            <div className={`grid 
            ${componentType === CategoryType.categories ? 'grid-cols-5' :
                `gap-y-[20px] md:grid-y-0 md:grid-cols-3 md:gap-x-[40px]`} 
                place-items-center place-content-evenly`}>
                {
                    dataList.length > 0 ? dataList.map(el => {
                        return (
                            <div className="">
                                <Category key={el?.id} url={el.image} title={el.title}
                                    componentType={componentType} buttonTitle={el.title} />
                            </div>
                        );
                    }) : <></>
                }
            </div>
        </section>
    )
}