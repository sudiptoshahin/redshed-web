
import Image from 'next/image';
import aboutImage1 from '../../../../public/images/about-1.jpg';
import aboutImage2 from '../../../../public/images/about-2.jpg';
import aboutImage3 from '../../../../public/images/about-3.jpg';

export default function About() {

    return (
        <section>
            <div className="mx-[50px]">
                <div className="bg-[#DD3333] text-white font-lato:regular font-bold text-[16px] flex space-x-5 justify-center py-[10px]">
                    <h2 className='cursor-pointer'>Our story</h2>
                    <h2 className='cursor-pointer'>factory partner</h2>
                    <h2 className='cursor-pointer'>locations</h2>
                </div>
                <div className="grid grid-cols-2 place-items-center">
                    <Image src={aboutImage1} className='justify-start' alt='about-1' />
                    <div className='font-roboto:regular text-black w-[350px]'>
                        <h2 className='text-[40px] font-bold'>We couldn&apos;t find a shirt that fit</h2>
                        <p className='py-5'>As young men and women looking to dress with more sophistication, we found few options. Those we did find were in pretentious and unaffordable shops. We set out to change that.</p>
                    </div>
                </div>
                <div className="w-full h-auto max-h-[581px]">
                    <Image src={aboutImage2} alt='about-2' className='w-full aspect-1' />
                    <div className="aspect-1 w-[60%]">

                    </div>
                </div>
                <div className="">3</div>
            </div>
        </section>
    );
}