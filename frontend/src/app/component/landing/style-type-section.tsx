
import CategoryContainer from "./category-container"
import formalBgImage from '../../../../public/images/category/formal.jpg';
import casualBgImage from '../../../../public/images/category/casual.jpg';
import sports1BgImage from '../../../../public/images/category/sports.jpg';
import sports2BgImage from '../../../../public/images/category/sports2.jpg';
import { CategoryType } from "@/app/models/categories/categorycontainer";

export default function StyleTypeSection() {

    const styleCategoryData = [
        {
            id: 1,
            image: formalBgImage,
            title: 'formal',
        },
        {
            id: 2,
            image: casualBgImage,
            title: 'casual',
        },
        {
            id: 3,
            image: sports1BgImage,
            title: 'sports',
        }
    ]
    return (
        <section id="style-type">
            <div className="py-5">
                <CategoryContainer dataList={styleCategoryData} componentType={CategoryType.styleType} showItems={3} itemGap={4} />
            </div>
        </section>
    )
}