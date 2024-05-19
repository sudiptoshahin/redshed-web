

export default function FreeShippingOnOrder() {

    return (
        <section id="freeshipping-on-order" className="mb-8">
            <div className="text-center w-full bg-[#ededed] h-[230px]">
                <h1 className="text-[#515154] pt-5 pb-7" style={{ fontSize: '30px' }}>
                    <span className="text-[#D50000]">Free Shipping</span> On Orders Over $100 + <span className="text-[#D50000]">Free Returns</span>
                </h1>
                <div className="text-[#808080] uppercase">
                    <h2 className="font-lato:bold font-bold" style={{ fontSize: '17px' }}>be the first to know</h2>
                    <p className="font-lato:latoLight">New Releases, Events, And More - On The Regular</p>
                </div>
                <div className="py-6">
                    <input className="font-lato text-white font-light text-[14px] indent-3 placeholder:text-white bg-[#D50000] w-[240px] h-[40px] focus:outline-none" type="text" placeholder="ENTER YOUR EMAIL ADDRESS" />
                    <button className="hover:bg-[#D50000] hover:text-white bg-white text-[#D50000] uppercase mx-4 p-2">Join</button>
                </div>
            </div>
        </section>
    )
}