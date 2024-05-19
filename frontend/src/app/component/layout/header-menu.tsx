import { useEffect, useRef } from "react";

type sidePanelRef = {
    setSidePanelRef: () => void
}

export default function HeaderMenu() {

    const sidepanelRef = useRef<HTMLDivElement>(null);

    // console.log('sidepanelRef: ', sidepanelRef);

    return (
        <section id="header-menu relative">
            <div className="w-[300px] h-[500px] absolute top-[12%] bg-blue-200  hamburger-slide">
                {/* feature */}
                <div className="">
                    <span className="font-lato:regular font-sm">20$</span>
                    <span className="font-dancingScript font-semibold font-[5px] capitalize cursor-pointer"> refer a friend</span>
                </div>

                {/* menus */}
            </div>

            {/* <div className="hamburger-sidepanel" ref={sidepanelRef}>
                <a href="javascript:void(0)" className="closebtn" onClick={props.onHandleHamburgerMenu}>×</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Clients</a>
                <a href="#">Contact</a>
            </div>
            
            <button className="openbtn" onClick={() => {}}>☰ Toggle Sidepanel</button>
            <h2>Collapsed Sidepanel</h2>
            <p>Click on the hamburger menu/bar icon to open the sidepanel.</p> */}
        </section>
    );
}