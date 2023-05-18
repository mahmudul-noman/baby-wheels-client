import { FaCar } from 'react-icons/fa';

const BestSale = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-pink-100 to-yellow-100">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-3xl font-bold mb-6">Best Sale <span className='stl2-font text-[#06959d]'>#Top 3</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-8 shadow-md">
            <p className='text-2xl font-bold'>#1</p>
            <div className="flex justify-center items-center bg-gradient-to-r from-pink-400 to-yellow-500 text-white rounded-lg p-4 mb-4">
              <img src="https://i.ibb.co/hsLFZZY/310-large-default.jpg" alt="" />
            </div>
            <h3 className="text-xl font-bold mb-2">Lamborghini Aventador SVJ</h3>
            <p className='font-semibold text-lg text-pink-500'>$ 550</p>
            <p className="text-gray-600"> Aggressive styling, powerful V12 engine, advanced aerodynamics.</p>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-md">
          <p className='text-2xl font-bold'>#2</p>
            <div className="flex justify-center items-center bg-gradient-to-r from-pink-400 to-yellow-500 text-white rounded-lg p-4 mb-4">
              <img src="https://i.ibb.co/n1Hdw9d/281-large-default.jpg" alt="" />
            </div>
            <h3 className="text-xl font-bold mb-2">Ford Mustang GT</h3>
            <p className='font-semibold text-lg text-pink-500'>$ 700</p>
            <p className="text-gray-600">Iconic muscle car, powerful V8 engine, thrilling acceleration.</p>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-md">
          <p className='text-2xl font-bold'>#3</p>
            <div className="flex justify-center items-center bg-gradient-to-r from-pink-400 to-yellow-500 text-white rounded-lg p-4 mb-4">
              <img src="https://i.ibb.co/1ZwThFC/275-large-default.jpg" alt="" />
            </div>
            <h3 className="text-xl font-bold mb-2">BMW M5 Competition</h3>
            <p className='font-semibold text-lg text-pink-500'>$ 400</p>
            <p className="text-gray-600"> Luxury sports sedan, twin-turbo V8 engine, precise handling.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSale;
