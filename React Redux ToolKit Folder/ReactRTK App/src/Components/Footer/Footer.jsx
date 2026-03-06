import { IoIosFastforward } from 'react-icons/io';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import QRCode from 'react-qr-code';
import FooterData from './FooterData';

function Footer() {
  return (
    <footer className="bg-black text-white py-8 px-5 mt-15">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-15">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-bold">Exclusive</h2>
          <h3 className="font-semibold">Subscribe</h3>
          <p>Get 10% off your first order</p>
          <div className="relative w-full mt-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-white rounded-xl px-3 py-2 focus:outline-none"
            />
            <IoIosFastforward className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white cursor-pointer text-xl" />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-bold">Support</h2>
          <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-bold">Account</h2>
          <FooterData />
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-bold">Quick Link</h2>
          <p>Privacy Policy</p>
          <p>Terms Of Use</p>
          <p>FAQ</p>
          <p>Contact</p>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold">Download App</h2>
          <p>Save $3 with App New User Only</p>

          <div className="flex  gap-4 mt-2">
            <div className="bg-white p-2 rounded-xl">
              <QRCode value="https://google.com" size={100} fgColor="#000" bgColor="#fff" />
            </div>
          </div>

          <div className="flex gap-6 mt-4">
            <FaFacebookF className="cursor-pointer hover:text-blue-500" />
            <FaTwitter className="cursor-pointer hover:text-blue-400" />
            <FaInstagram className="cursor-pointer hover:text-pink-500" />
            <FaLinkedinIn className="cursor-pointer hover:text-blue-700" />
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-400 text-sm">
        © Copyright Rimel 2022. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
