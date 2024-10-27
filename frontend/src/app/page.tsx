"use client";
import TopFeature from "./component/landing/top-feature";
import StyleTypeSection from "./component/landing/style-type-section";
import FreeShippingOnOrder from "./component/advertise/freeshipping-on-order";
import ProductCategory from "./component/landing/product-category";
import OfferGallery from ".//component/landing/offer-gallery";
import OurSupports from "./component/landing/our-supports";

export default function Home() {
  return (
    <div className="">
      <TopFeature />
      <StyleTypeSection />
      <FreeShippingOnOrder />
      <ProductCategory />
      <div className="hidden xl:block">
        <OfferGallery />
        <OurSupports />
      </div>
    </div>
  );
}
