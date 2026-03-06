import { BsFillCartDashFill } from 'react-icons/bs';
import { CiDollar } from 'react-icons/ci';
import { FaShoppingBag, FaMoneyCheck } from 'react-icons/fa';

function Boxes() {
  const BoxData = [
    {
      id: 0,
      icon: <BsFillCartDashFill />,
      number: '10.5k',
      message: 'Sellers active on our site',
    },
    {
      id: 1,
      icon: <CiDollar />,
      number: '33k',
      message: 'Monthly Product Sale',
    },
    {
      id: 2,
      icon: <FaShoppingBag />,
      number: '45.5k',
      message: 'Customers active on our site',
    },
    {
      id: 3,
      icon: <FaMoneyCheck />,
      number: '10.5k',
      message: 'Sellers active on our site',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10 w-[90%] mx-auto">
      {BoxData.map((items) => (
        <div
          key={items.id}
          className="border-2 border-gray-300 p-5 rounded-xl hover:bg-danger hover:text-white cursor-pointer transition duration-300 ease-in-out"
        >
          <div className="flex flex-col gap-4 justify-center items-center text-center">
            <div className="bg-gray-300 rounded-2xl p-3 cursor-pointer transition duration-300 ease-in-out">
              <p className="bg-black text-white p-3 rounded-2xl text-2xl sm:text-3xl md:text-4xl hover:text-black hover:bg-white font-bold transition duration-300 ease-in-out">
                {items.icon}
              </p>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">{items.number}</h1>
            <p className="text-sm sm:text-base md:text-lg">{items.message}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Boxes;
