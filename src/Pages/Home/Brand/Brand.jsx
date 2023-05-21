import brand1 from '../../../assets/brand/1.png'
import brand2 from '../../../assets/brand/2.png'
import brand3 from '../../../assets/brand/3.png'
import brand4 from '../../../assets/brand/4.png'
import brand5 from '../../../assets/brand/5.png'
import brand6 from '../../../assets/brand/6.png'


const Brand = () => {
    return (

        // For Brand Logo Looks Awesome, I'm Using brand image from Themeforest.

        <div data-aos="zoom-in" data-aos-duration="2500" className='bg-[#ffeef3] py-20'>
            <div className='container mx-auto'>
                <h2 className='text-3xl font-bold'>Our Valuable Brand <span className='text-pink-600 font-bold stl-font'>#TOP</span></h2>
                <div className="flex justify-between">
                    <div className="carousel-item">
                        <img className='w-full' src={brand1} alt="Burger" />
                    </div>
                    <div className="carousel-item">
                        <img className='w-full' src={brand2} alt="Burger" />
                    </div>
                    <div className="carousel-item">
                        <img className='w-full' src={brand3} alt="Burger" />
                    </div>
                    <div className="carousel-item">
                        <img className='w-full' src={brand4} alt="Burger" />
                    </div>
                    <div className="carousel-item">
                        <img className='w-full' src={brand5} alt="Burger" />
                    </div>
                    <div className="carousel-item">
                        <img className='w-full' src={brand6} alt="Burger" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Brand;