
import Image from 'next/image';
import aboutImage1 from '../../../../public/images/about-1.jpg';
import aboutImage2 from '../../../../public/images/about-2.jpg';
import aboutImage2_1 from '../../../../public/images/about-21.jpg';
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
                <div className="grid grid-cols-2 gap-x-[100px]">
                    <Image src={aboutImage1} className='justify-start' alt='about-1' />
                    <div className='font-roboto:regular text-black w-[350px] my-auto'>
                        <h2 className='text-[40px] font-bold'>We couldn&apos;t find a shirt that fit</h2>
                        <p className='py-5'>As young men and women looking to dress with more sophistication, we found few options. Those we did find were in pretentious and unaffordable shops. We set out to change that.</p>
                    </div>
                </div>
                <div className="w-full h-[700px] relative">
                    <Image src={aboutImage2_1} alt='about-2' className='w-full h-full absolute' />
                    <div className="aspect-1 w-full absolute top-[32%] text-center flex justify-center">
                        <div className="p-[17px] w-[60%] bg-red-rgba text-white">
                            <h1 className='text-[64px] font-lato:bold  leading-[126%] tracking-[4px]'>Overbuilt clothing for every occasion</h1>
                            <p className='pt-[32px] text-[14px] font-lato:bold leading-[128.4%] tracking-[3.5px]'>We make clothes that transition seamlessly throughout your day. Whether you're hopping on the bike, running the kids to school, heading into the office, or meeting for drinks, you shouldn't have to think about what you're wearing. Your clothes should fit well and function simply. Looking great and feeling confident every day should be accessible to everyone.</p>
                        </div>
                    </div>
                </div>
                <div className="flex h-[640px]">
                    <div className='w-[50%] h-full font-roboto:regular text-black w-[350px] 
                    my-auto flex items-center justify-center'>
                        <div className="w-[80%] text-center text-black">
                            <h1 className='font-roboto font-bold text-[40px] tracking-[3px]'>We&apos;re obsessed with pleasing our customers</h1>
                            <p className='mt-[30px] font-roboto text-[18px] tracking-[4px] leading-[123%]'>We follow the Golden Rule, share our passion, and own our mistakes. If you encounter an issue with one of our products or are displeased in any way, stop by one of our shops, give us a ring, or shoot us a note. You're sure to find an individual eager to make things right for you. No lip service, just action.</p>
                        </div>
                    </div>
                    <div className="w-[50%]">
                    <Image src={aboutImage3} className='w-full h-full' alt='about-1' />
                    </div>
                </div>
            </div>
        </section>
    );
}