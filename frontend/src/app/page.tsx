"use client";
import Image from "next/image";
import Header from "./component/layout/header";
import TopFeature from "./component/landing/top-feature";
import StyleTypeSection from "./component/landing/style-type-section";
import FreeShippingOnOrder from "./component/advertise/freeshipping-on-order";
import ProductCategory from "./component/landing/product-category";

export default function Home() {
  return (
    // <main className="bg-blue-200">
    //   <Header />
    // </main>
    <html>
      <body>
        <main className="">
          <Header />
          <TopFeature />
          <StyleTypeSection />
          <FreeShippingOnOrder />
          <ProductCategory />
        </main>
      </body>
    </html>
  );
}
