
import Header from '@/app/component/layout/header';
import referFriendsImage from '../../../../public/images/refer-friends.jpg';
import Footer from '@/app/component/layout/footer';
import Image from 'next/image';

export default function ReferFriends() {

    return (
        <section>
            <div className="">
                <div className="xl:pb-[80px]">
                    <Header />
                </div>
                <div className="flex mb-[30px]">
                    <div className="w-[55%]">
                        <Image src={referFriendsImage} alt='refer-frind' className='h-[596px]' />
                    </div>
                    <div className="w-[45%] relative">
                        <div className="font-lato:regular h-[400px] w-[250px] absolute top-[10%] xl:left-[30%] 2xl:left-[15%] 2xl:top-[20%]">
                            <h1 className='font-bold text-[24px] text-black'>
                                Welcome to the Common Club
                            </h1>
                            <p className='py-[25px] text-[14px] font-normal'>
                                Our community is the best; you're why we do this. The Common Club is where we get to give a bit back for supporting us in the things we do.
                            </p>
                            <button className='uppercase bg-[#EA4141] font-roboto:regular font-bold w-full h-[50px] text-white'>sign in</button>
                        </div>
                    </div>
                </div>
                <div className="">
                    <Footer />
                </div>
            </div>
        </section>
    );
}