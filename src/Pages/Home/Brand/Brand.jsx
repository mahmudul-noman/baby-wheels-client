import brand1 from '../../../assets/brand/1.png'
import brand2 from '../../../assets/brand/2.png'
import brand3 from '../../../assets/brand/3.png'
import brand4 from '../../../assets/brand/4.png'
import brand5 from '../../../assets/brand/5.png'
import brand6 from '../../../assets/brand/6.png'


const Brand = () => {
    return (

        // For Brand Logo Looks Awesome, I'm Using brand image from Themeforest.

        <div data-aos="zoom-in" data-aos-duration="1500" className='bg-[#ffeef3] py-20'>
            <div className='container mx-auto'>
                <h2 className='text-2xl lg:text-3xl font-bold lg:text-start text-center'>Our Valuable Brand <span className='text-pink-600 font-bold stl-font'>#TOP</span></h2>
                <div className="lg:flex lg:justify-between grid grid-cols-2">
                    <div className="carousel-item">
                        <img className='lg:w-full mx-auto' src={brand1} alt="Burger" />
                    </div>
                    <div className="carousel-item">
                        <img className='lg:w-full mx-auto' src={brand2} alt="Burger" />
                    </div>
                    <div className="carousel-item">
                        <img className='lg:w-full mx-auto' src={brand3} alt="Burger" />
                    </div>
                    <div className="carousel-item">
                        <img className='lg:w-full mx-auto' src={brand4} alt="Burger" />
                    </div>
                    <div className="carousel-item">
                        <img className='lg:w-full mx-auto' src={brand5} alt="Burger" />
                    </div>
                    <div className="carousel-item">
                        <img className='lg:w-full mx-auto' src={brand6} alt="Burger" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Brand;