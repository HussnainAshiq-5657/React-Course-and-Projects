import Image from '../../../assets/Image.jpg';
import Boxes from './Boxes';

function AboutData() {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between items-center w-[90%] mx-auto gap-10 lg:gap-20 mt-10 lg:mt-20 px-4 sm:px-6 py-4">
        <div className="flex flex-col gap-4 w-full lg:w-1/3">
          <h1 className="font-bold text-2xl sm:text-3xl">Our Story</h1>

          <p className="text-gray-800 text-sm sm:text-base">
            Launched in 2015, Exclusive is South Asia’s premier online shopping with an active
            presence in Bangladesh. Supported by wide range of tailored marketing, data and service
            solutions, Exclusive has 10,500 and 300 brands and serves 3 customers across the region.
          </p>

          <p className="text-gray-800 text-sm sm:text-base">
            Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive
            offers a diverse in categories ranging from consumer.
          </p>
        </div>

        <div className="flex justify-center lg:justify-end w-full lg:w-1/2">
          <img
            className="rounded-xl w-full sm:w-[80%] lg:w-full "
            src={Image}
            alt="Picture of Woman"
          />
        </div>
      </div>
      <Boxes />
    </>
  );
}

export default AboutData;
