import { CiDeliveryTruck } from 'react-icons/ci';
import { RiCustomerServiceLine } from 'react-icons/ri';
import { BsFillCreditCard2BackFill } from 'react-icons/bs';

function Services() {
  const ServiceData = [
    {
      id: 0,
      icon: <CiDeliveryTruck />,
      message: 'FREE AND FAST DELIVERY',
      para: 'Free delivery for all orders over $140',
    },
    {
      id: 1,
      icon: <RiCustomerServiceLine />,
      message: '24/7 CUSTOMER SERVICE',
      para: 'Friendly 24/7 customer support',
    },
    {
      id: 2,
      icon: <BsFillCreditCard2BackFill />,
      message: 'MONEY BACK GUARANTEE',
      para: 'We return money within 30 days',
    },
  ];

  return (
    <div className="flex items-center flex-wrap justify-center gap-4 my-10 pt-5 font-poppins">
      {ServiceData.map((items) => (
        <div
          key={items.id}
          className="flex flex-col gap-4 justify-center items-center text-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
        >
          <div className="bg-gray-300 p-3 rounded-full">
            <p className="text-3xl font-bold cursor-pointer bg-black p-2 rounded-full text-white hover:bg-white hover:text-black">
              {items.icon}
            </p>
          </div>
          <div>
            <p className="text-lg font-bold">{items.message}</p>
            <p className="text-base text-gray-600">{items.para}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Services;
