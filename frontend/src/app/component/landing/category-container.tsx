
import Category from "../layout/category"
import { StaticImageData } from 'next/image';

type categoryObj = {
    id: number,
    image: StaticImageData,
    title: string
}

interface CategoryContainer {
    dataList: categoryObj[],
    showItems: number,
    itemGap: number
}

export default function CategoryContainer(props: CategoryContainer) {

    return (
        <section id="category-container" className="">
            <div className={`bg-red-200 grid grid-cols-${props.showItems} gap-${props.itemGap} place-items-center place-content-evenly`}>
                {
                    props.dataList.length > 0 ? props.dataList.map(el => {
                        return (
                            <Category key={el?.id} url={el.image} title={el.title} componentType={0} buttonTitle='shop' />
                        );
                    }) : <></>
                }
            </div>
        </section>
    )
}