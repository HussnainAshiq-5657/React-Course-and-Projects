import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function ContactData() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-blue-800">Contact Us</h1>
        <p className="text-gray-600 mt-3">
          Feel free to reach out to us anytime. We’d love to hear from you!
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-2xl text-blue-500" />
            <div>
              <h3 className="font-semibold text-lg">Phone</h3>
              <p className="text-gray-600">+92 300 1234567</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FaEnvelope className="text-2xl text-blue-500" />
            <div>
              <h3 className="font-semibold text-lg">Email</h3>
              <p className="text-gray-600">info@example.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-2xl text-blue-500" />
            <div>
              <h3 className="font-semibold text-lg">Address</h3>
              <p className="text-gray-600">Lahore, Pakistan</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-8">
          <form className="flex flex-col gap-5">
            <div>
              <label className="block text-sm  text-blue-500 font-semibold mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue"
              />
            </div>

            <div>
              <label className="block text-blue-500 text-sm font-semibold mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue"
              />
            </div>

            <div>
              <label className="block text-sm  text-blue-500 font-semibold mb-1">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue"
              ></textarea>
            </div>

            <button
              type="submit"
              className="text-white bg-blue-400 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactData;
