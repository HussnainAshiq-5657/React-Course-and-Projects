import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import { IoIosPhonePortrait } from 'react-icons/io';
import { RiComputerLine } from 'react-icons/ri';
import { BsSmartwatch } from 'react-icons/bs';
import { CiCamera } from 'react-icons/ci';
import { CiHeadphones } from 'react-icons/ci';
import { IoGameController } from 'react-icons/io5';
import Common from '../../../Components/common/Common';

function CategorySection() {
  const IconsData = [
    {
      id: 0,
      icon: <IoIosPhonePortrait />,
      name: 'Phones',
    },
    {
      id: 2,
      icon: <RiComputerLine />,
      name: 'Computers',
    },
    {
      id: 3,
      icon: <BsSmartwatch />,
      name: 'SmartWatch',
    },
    {
      id: 4,
      icon: <CiCamera />,
      name: 'Camera',
    },
    {
      id: 5,
      icon: <CiHeadphones />,
      name: 'HeadPhones',
    },
    {
      id: 6,
      icon: <IoGameController />,
      name: 'Gaming',
    },
  ];
  return (
    <>
      <div className="font-poppins my-12 px-4 w-full sm:w-11/12 lg:w-4/5 mx-auto">
        <Common category="Categories" browse="Browse By Category" />

        <div className="flex flex-wrap justify-center gap-6 mt-10">
          {IconsData.map((items) => (
            <div
              key={items.id}
              className="
              w-full 
              sm:w-[45%] 
              md:w-[30%] 
              lg:w-[18%]
              flex flex-col gap-4 py-6 
              justify-center items-center 
              border border-gray-400 
              shadow-xl shadow-gray-200 
              cursor-pointer 
              hover:bg-danger hover:text-white 
              hover:font-semibold 
              transition duration-200 ease-linear 
              hover:-translate-y-1 hover:scale-105
              rounded-lg
              "
            >
              <h2 className="text-2xl sm:text-3xl">{items.icon}</h2>
              <p className="text-sm sm:text-base">{items.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CategorySection;
