import { IoCallOutline } from 'react-icons/io5';
import { MdOutlineEmail } from 'react-icons/md';

function Contact() {
  return (
    <>
      <div className="flex flex-col md:flex-col lg:flex-row flex-wrap justify-center gap-8 items-start my-20 font-poppins text-sm px-4 md:px-10">
        {/* Contact Info */}
        <div className="bg-white rounded-xl shadow-lg shadow-gray-300 p-4 w-full md:w-full lg:w-[35%]">
          <div className="flex flex-col gap-4 p-5">
            {/* Call To Us */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-row gap-4 items-center">
                <div className="bg-danger p-2 rounded-full">
                  <IoCallOutline className="text-2xl text-white cursor-pointer" />
                </div>
                <h2 className="text-lg font-semibold">Call To Us</h2>
              </div>
              <div className="flex flex-col gap-2">
                <p>We are available 24/7, 7 days a week.</p>
                <p>Phone: +8801611112222</p>
              </div>
            </div>

            <div className="my-2">
              <hr className="h-1 bg-black my-2 rounded-2xl" />
            </div>

            {/* Write To Us */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-row gap-4 items-center">
                <div className="bg-danger p-2 rounded-full">
                  <MdOutlineEmail className="text-2xl text-white cursor-pointer" />
                </div>
                <h2 className="text-lg font-semibold">Write To Us</h2>
              </div>
              <div className="flex flex-col gap-2">
                <p>
                  Fill out our form and we will contact <br /> you within 24 hours.
                </p>
                <p>Emails: customer@exclusive.com</p>
                <p>Emails: support@exclusive.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-xl shadow-lg shadow-gray-300 px-4 py-6 w-full md:w-full lg:w-[55%]">
          <h1 className="text-xl text-black mb-3 text-center lg:text-left">
            Enter Your Details below
          </h1>
          <form action="" className="flex flex-col gap-6 p-2">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-gray-100 px-4 py-2 rounded-md focus:outline-gray-500 w-full"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="bg-gray-100 px-4 py-2 rounded-md focus:outline-gray-500 w-full"
              />
              <input
                type="text"
                placeholder="Your Phone"
                className="bg-gray-100 px-4 py-2 rounded-md focus:outline-gray-500 w-full"
              />
            </div>
            <textarea
              className="bg-gray-100 p-3 rounded-lg w-full h-40 focus:outline-gray-500"
              placeholder="Enter your message..."
            ></textarea>

            <div className="flex justify-center sm:justify-end">
              <button className="text-white bg-danger cursor-pointer px-4 py-2 rounded-xl hover:bg-red-600 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 w-full sm:w-auto">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
