
import Category from "../layout/category"
import { StaticImageData } from 'next/image';
import { CategoryContainerProps, CategoryComponentType } from "@/app/models/categories/categorycontainer";

type categoryObj = {
    id: number,
    image: StaticImageData,
    title: string
}

export default function CategoryContainer(props: CategoryContainerProps) {

    return (
        <section id="category-container" className="">
            <div className={`grid place-items-center place-content-evenly`}
                style={{ 
                    gridTemplateColumns: `repeat(${props.showItems}, minmax(0, 1fr))`,
                    columnGap: `${props.itemGap}px`
                 }}>
                {
                    props.dataList.length > 0 ? props.dataList.map(el => {
                        return (
                            <Category key={el?.id} url={el.image} title={el.title} componentType={props.componentType} buttonTitle={el.title} />
                        );
                    }) : <></>
                }
            </div>
        </section>
    )
}