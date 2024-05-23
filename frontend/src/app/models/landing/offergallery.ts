
import { StaticImageData } from "next/image"

export interface OfferGalleryProps {
    topLeftImage: StaticImageData,
    topLeftTitle: string,
    topRightImage: StaticImageData,
    topRightTitle: string,
    bottomLeftImage: StaticImageData,
    bottomLeftTitle: string,
    bottomRightImage: StaticImageData,
    bottomRightTitle: string
    centerImage: StaticImageData
}

export interface GalleryContentProps {
    image: StaticImageData,
    title: string
}