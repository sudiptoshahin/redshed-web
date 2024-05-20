
import { StaticImageData } from "next/image";

type categoryObj = {
    id: number,
    image: StaticImageData,
    title: string
}

export enum CategoryType {
    styleType = 0,
    categories = 1
}

export interface CategoryContainerProps {
    dataList: categoryObj[],
    showItems: number | 2,
    itemGap: number,
    height?: number | null,
    width?: number | null,
    componentType: CategoryType
}

export interface CategoryComponentType {
    dataList: categoryObj[],
    showItems: number | 2,
    itemGap: number,
    height?: number | null,
    width?: number | null,
}

export interface CategoryComponentProps {
    url: string | StaticImageData,
    title: string,
    buttonTitle: string,
    componentType: CategoryType
}