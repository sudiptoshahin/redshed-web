"use client";
import Image from "next/image";
import Header from "./component/layout/header";
import TopFeature from "./component/landing/top-feature";
import StyleTypeSection from "./component/landing/style-type-section";
import FreeShippingOnOrder from "./component/advertise/freeshipping-on-order";
import ProductCategory from "./component/landing/product-category";
import OfferGallery from ".//component/landing/offer-gallery";
import OurSupports from "./component/landing/our-supports";
import Footer from "./component/layout/footer";

export default function Home() {
  return (
    // <main className="bg-blue-200">
    //   <Header />
    // </main>
    <main className="">
      <Header />
      <TopFeature />
      <StyleTypeSection />
      <FreeShippingOnOrder />
      <ProductCategory />
      <OfferGallery />
      <OurSupports />
      <Footer />
    </main>
  );
}
