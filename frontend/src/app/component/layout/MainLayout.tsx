import { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";


interface MainLayoutProps {
    children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {

    return (
        <>
            <Header />
            {
                children
            }
            <Footer />
        </>
    );

}