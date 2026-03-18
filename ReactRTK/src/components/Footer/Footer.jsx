import { FaGooglePlay } from 'react-icons/fa6';
import FooterData from './FooterData';
import QRCode from 'react-qr-code';

import { LuFacebook } from 'react-icons/lu';
import { CiTwitter } from 'react-icons/ci';
import { FaInstagram } from 'react-icons/fa6';
import { CiLinkedin } from 'react-icons/ci';

function Footer() {
  const QuickLinks = [
    { id: 1, name: 'Privacy Policy', link: '#' },
    { id: 2, name: 'Terms of Use', link: '#' },
    { id: 3, name: 'FAQ', link: '#' },
    { id: 4, name: 'Contact', link: '#' },
  ];

  return (
    <footer className="bg-black text-white font-poppins px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-semibold">NexCart</h1>
          <p className="font-semibold">Subscribe</p>
          <p className="text-gray-400 text-sm">Get 10% off your first order</p>

          <div className="relative w-full max-w-xs">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="w-full border border-white bg-transparent px-4 py-2 rounded-lg focus:outline-none"
            />
            <FaGooglePlay className="absolute right-4 top-3 text-lg cursor-pointer" />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-semibold">Support</h1>
          <p className="text-sm text-gray-400">111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p className="text-sm text-gray-400">exclusive@gmail.com</p>
          <p className="text-sm text-gray-400">+88015-88888-9999</p>
        </div>

        <FooterData />

        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-semibold">Quick Links</h1>
          {QuickLinks.map((items) => (
            <a
              key={items.id}
              href={items.link}
              className="text-sm text-gray-400 hover:text-white transition"
            >
              {items.name}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-semibold">Download App</h1>
          <p className="text-gray-400 text-sm">Save $3 with App New User Only</p>

          <div className="flex items-center gap-4 flex-wrap">
            <div className="shrink-0">
              <QRCode size={100} value="https://www.youtube.com/" />
            </div>
          </div>

          <div className="flex gap-6 text-xl pt-4 flex-wrap">
            <LuFacebook className="cursor-pointer hover:text-gray-400 transition" />
            <CiTwitter className="cursor-pointer hover:text-gray-400 transition" />
            <FaInstagram className="cursor-pointer hover:text-gray-400 transition" />
            <CiLinkedin className="cursor-pointer hover:text-gray-400 transition" />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
        © Copyright Rimel 2022. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
