import WomanPic from '../../assets/Woman.png';
import Boxes from './Components/Boxes.jsx';
import Carousel from './Components/Carousel.jsx';
import Services from './Components/Services.jsx';

function About() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-around items-center my-20 w-full font-poppins gap-10 px-4 md:px-10">
        <div className="w-full md:w-1/3 flex flex-col gap-6">
          <h1 className="text-3xl sm:text-4xl font-bold">Our Story</h1>
          <p className="text-justify text-sm sm:text-base">
            Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace with an
            active presence in Bangladesh. Supported by a wide range of tailored marketing, data,
            and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 million
            customers across the region.
          </p>
          <p className="text-justify text-sm sm:text-base">
            Exclusive has more than 1 Million products to offer, growing very fast. Exclusive offers
            a diverse assortment in categories ranging from consumer.
          </p>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={WomanPic}
            alt="Picture of a Woman"
            className="w-3/4 sm:w-2/3 md:w-full rounded-lg object-contain"
          />
        </div>
      </div>

      <Boxes />
      <Carousel />
      <Services />
    </>
  );
}

export default About;
