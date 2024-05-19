
import topFeatureImage from '../../../../public/images/top-feature.jpg';
import Image from 'next/image';

export default function TopFeature() {

    return (
        <section id="top-feature">
            <div className="w-full h-auto">
                <Image className='w-full' src={topFeatureImage} alt='top-feature' />
            </div>
        </section>
    )
}