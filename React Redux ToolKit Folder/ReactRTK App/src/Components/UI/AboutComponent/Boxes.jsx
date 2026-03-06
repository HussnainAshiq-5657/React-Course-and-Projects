import { FaHome } from 'react-icons/fa';
import { FiDollarSign } from 'react-icons/fi';
import { FaShoppingBag } from 'react-icons/fa';
import { FaMoneyBillWaveAlt } from 'react-icons/fa';

function Boxes() {
  const MenuItems = [
    {
      id: 0,
      icon: <FaHome />,
      number: '10.5k',
      name: 'Seller active our site',
    },
    {
      id: 1,
      icon: <FiDollarSign />,
      number: '33k',
      name: 'Monthly Product Sale',
    },
    {
      id: 2,
      icon: <FaShoppingBag />,
      number: '45.5k',
      name: 'Customer active in our site',
    },
    {
      id: 3,
      icon: <FaMoneyBillWaveAlt />,
      number: '25k',
      name: 'Annual gross sale in our site',
    },
  ];
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-20 w-[90%] mx-[5%]">
        {MenuItems.map((items) => (
          <div
            key={items.id}
            className="flex flex-col gap-4 justify-center items-center p-6 border-2 border-gray-200 hover:bg-red-600 cursor-pointer rounded-2xl"
          >
            <div className="bg-gray-400 p-2 rounded-2xl hover:bg-gray-200">
              <div className="text-3xl text-white bg-black p-2 rounded-2xl hover:bg-white hover:text-black">
                {items.icon}
              </div>
            </div>
            <div>
              <div className="flex flex-col justify-center items-center">
                <h2 className="text-3xl font-bold">{items.number}</h2>
                <p>{items.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Boxes;
