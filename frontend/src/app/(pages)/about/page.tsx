
import Image from 'next/image';
import aboutImage1 from '../../../../public/images/about-1.jpg';
import aboutImage2 from '../../../../public/images/about-2.jpg';
import aboutImage3 from '../../../../public/images/about-3.jpg';
import Footer from '@/app/component/layout/footer';
import Header from '@/app/component/layout/header';

export default function About() {

    return (
        <section>
            <div className="xl:pb-[80px]">
                <Header />
            </div>
            <div className="bg-red-200 mx-[50px]">
                <div className="bg-[#DD3333] text-white font-lato:regular font-bold text-[16px] flex space-x-5 justify-center py-[10px]">
                    <h2>Our story</h2>
                    <h2>factory partner</h2>
                    <h2>locations</h2>
                </div>
                <div className="bg-green-200 grid grid-cols-2 place-items-center">
                    <Image src={aboutImage1} className='justify-start' alt='about-1' />
                    <div className='font-roboto:regular text-black w-[350px]'>
                        <h2 className='text-[40px] font-bold'>We couldn&apos;t find a shirt that fit</h2>
                        <p className='py-5'>As young men and women looking to dress with more sophistication, we found few options. Those we did find were in pretentious and unaffordable shops. We set out to change that.</p>
                    </div>
                </div>
                <div className="">2</div>
                <div className="">3</div>
            </div>
            <Footer />
        </section>
    );
}