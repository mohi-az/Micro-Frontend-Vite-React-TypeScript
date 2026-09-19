
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import sl1 from '../../assets/images/shop26_home_slide1.png'
import sl2 from '../../assets/images/shop26_home_slide2.png'
const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,

    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
export const CarouselSilder = () => {
    return (
        <div className='w-full items-center ' >
            <Carousel  className=''
                arrows autoPlaySpeed={1000}
                containerClass="container-with-dots"
                draggable  infinite minimumTouchDrag={80} pauseOnHover
                renderArrowsWhenDisabled={true} renderButtonGroupOutside={true} renderDotsOutside={true} 
                shouldResetAutoplay showDots={true} slidesToSlide={1}
                swipeable responsive={responsive}>
                <div className='flex items-center justify-center'>
                    <img src={sl1} className='z-20' />
                    <div className='absolute h-4/5 bg-gray-100 top-0 w-full z-0 -skew-y-12'></div>
                    <div className='absolute bottom-16 left-1/3'>
                        <span className='font-semibold text-1xl font-mono'>Only</span>
                        <span className='font-semibold font-mono text-orange-600 text-3xl'>$399 </span>
                        <span className='font-semibold font-mono text-orange-600 text-1xl'>.99</span>
                    </div>
                    <div className='font-bold flex flex-col items-center gap-2 pl-8  z-10'>
                        <span className='text-3xl text-gray-600'>EXTRA</span>
                        <span className='text-6xl   text-gray-900'>20%OFF</span>
                        <div className='text-3xl bor flex flex-row flex-nowrap w-full  items-center'>
                            <hr className='border-t-4 border-gray-950 w-1/4' />
                            <span className='w-2/4 m-1 text-center  text-gray-900'>BIKES</span>
                            <hr className='border-t-4 border-gray-950 w-1/4' />
                        </div>
                        <span className='text-3xl font-mono  italic text-gray-600'>Winter Sale</span>
                        <div className='pt-5'>
                            <button type="button" onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })} className='text-1xl bg-slate-900 text-slate-100 p-3 hover:text-teal-500'>VIEW PRODUCTS</button>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center'><img src={sl2} className='z-10' />
                    <div className='absolute h-1/5 bg-gray-100 top-0 w-full z-0 -skew-y-12'></div>
                    <div className='absolute h-3/5 bg-gray-100 bottom-0 w-full z-0 skew-y-12'></div>

                    <div className='font-bold flex flex-col items-center gap-2 pl-8 z-20'>


                        <span className='text-3xl text-gray-600'>EXTRA</span>
                        <span className='text-6xl text-gray-900'>20%OFF</span>
                        <div className='text-3xl bor flex flex-row flex-nowrap w-full  items-center'>
                            <hr className='border-t-4 border-gray-950 w-1/4' />
                            <span className='w-2/4 m-1 text-center text-gray-900'>BIKES</span>
                            <hr className='border-t-4 border-gray-950 w-1/4' />
                        </div>
                        <span className='text-3xl font-mono  italic text-gray-600'>Winter Sale</span>
                        <div className='pt-5'>
                            <button type="button" onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })} className='text-1xl bg-slate-900 text-slate-100 p-3 hover:text-teal-500'>VIEW PRODUCTS</button>
                        </div>
                    </div></div>


            </Carousel>
        </div>
    )
}
