

const Contact = () => {
  return (
    <div id="contact" className="py-12 bg-white">
      <div className="mx-auto w-1/2 p-4 text-center">
        {/* Span with lines */}
        <div className="flex items-center justify-center">
          <span className="flex items-center text-gray-300 text-1xl uppercase tracking-[0.3em] w-full max-w-lg">
            <span className="flex-1 h-px w-36 bg-gray-400 mr-4"></span>
            Contact
            <span className="flex-1 h-px w-36 bg-gray-400 ml-4"></span>
          </span>
        </div>
        {/* Heading */}
        <h2 className="font-Georgia font-bold text-[34px] mt-4">
          Contact Us
        </h2>
        <p>
          We appreciate your observation in any area with can help improve as well reaching out to us
        </p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[40%_60%] gap-6">
        
          {/* <div>
            <div className="bg-gray-200 p-6 mb-4">
            <h2>
               Address
            </h2>
            <p>
              3/4 Aluform Avenue, General B/Stop Lasu-Isheri Expressway,
              Igando, Lagos.
            </p>
          </div>
          <div className="bg-gray-200 p-6 mb-4">
           <div className="flex items-center">
             <h2>
               Address
            </h2>
            <p>
              3/4 Aluform Avenue, General B/Stop Lasu-Isheri Expressway,
              Igando, Lagos.
            </p>
           </div>
          </div>
          </div> */}
          
        
        
          {/* <div className="bg-gray-100 p-6">
            <h3>
              Address
            </h3>
          </div> */}
        
      </div>

     {/* <div className="bg-gray-50 py-12"> */}
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[40%_60%]">
        
        {/* Left Side - Contact Info */}
        <div className="space-y-6">
          {/* Address */}
          <div className="bg-gray-100 p-6 rounded-md shadow-sm">
            <div className="flex items-center space-x-3">
              <span className="text-yellow-500 text-xl">📍</span>
              <h3 className="text-lg font-semibold">Address</h3>
            </div>
            <p className="mt-2 text-gray-600">
              3/4 Aluform Avenue, General B/Stop Lasu-Isheri Expressway,
              Igando, Lagos.
            </p>
          </div>

          {/* Contact Number */}
          <div className="bg-gray-100 p-6 rounded-md shadow-sm">
            <div className="flex items-center space-x-3">
              <span className="text-yellow-500 text-xl">📞</span>
              <h3 className="text-lg font-semibold">Contact Number</h3>
            </div>
            <p className="mt-2 text-blue-500 font-medium">+ 1235 2355 98</p>
          </div>

          {/* Email */}
          <div className="bg-gray-100 p-6 rounded-md shadow-sm">
            <div className="flex items-center space-x-3">
              <span className="text-yellow-500 text-xl">✉️</span>
              <h3 className="text-lg font-semibold">Email Address</h3>
            </div>
            <p className="mt-2 text-blue-500 font-medium">ourgraceville@gmail.com</p>
          </div>

          {/* Website */}
          <div className="bg-gray-100 p-6 rounded-md shadow-sm">
            <div className="flex items-center space-x-3">
              <span className="text-yellow-500 text-xl">🌐</span>
              <h3 className="text-lg font-semibold">Website</h3>
            </div>
            <p className="mt-2 text-blue-500 font-medium">rccggraceville.org</p>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-white p-6 rounded-md shadow-sm">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              placeholder="Message"
              rows="5"
              className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-900 text-white font-medium px-6 py-3 rounded-full shadow-md hover:bg-blue-500 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>


    
    </div>
  )
}

export default Contact;



