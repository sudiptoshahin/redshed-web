
import Image from "next/image";

export default function Header() {
    return (
        <section id="header">

            <div className="h-[100px] bg-[#EEEEEE] w-full  grid grid-cols-3 gap-3">
                <div className="flex items-center space-x-5 w-auto mx-auto bg-blue-300">
                    <div className="w-auto">Home</div>
                    <div className="w-auto">Shop</div>
                    <div className="w-auto">Blog</div>
                    <div className="w-auto">Style</div>
                </div>
                <div className="bg-red-200 content-center mx-auto">
                    <Image src={'/images/logo.svg'} height={52} width={196} alt="logo" />
                </div>
                <div className="bg-green-200 flex items-center space-x-5">
                    <div className="bg-blue-200 font-michroma">
                        <span>20 $</span>
                        <span>refer a friend</span>
                    </div>
                    <div className="bg-blue-200">About us</div>
                    <div>
                        <Image className="text-black" src={'/images/icons/user.svg'} width={25} height={25} alt="user" />
                    </div>
                    <div>
                        <Image className="text-black" src={'/images/icons/search.svg'} width={25} height={25} alt="user" />
                    </div>
                    <div>
                        <Image className="text-black" src={'/images/icons/cart.svg'} width={25} height={25} alt="user" />
                    </div>
                </div>
            </div>
        </section>
    );
}