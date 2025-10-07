import React, { useState } from "react";
import { Calendar, Users, Heart,  HeartHandshake, Play} from "lucide-react";
// import { time } from "framer-motion";
// import { Prayer, Church } from "lucide-react";

const About = () => {
  const [message, setMessage] = useState("");

  const handleAppreciate = () => {
    setMessage("🎉 We appreciate and welcome you to RCCG Graceville! ❤️");
    setTimeout(() => setMessage(""), 3000); // Message disappears after 3 seconds
  };

  return (
    <div id="about" className="relative">
      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
        {/* Left Column: Image */}
        <div className="w-full h-64 md:h-auto">
          <img
            src="/images/about.webp"
            alt="Church building"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Column: Background */}
        <div className="w-full md:h-auto bg-blue-100 flex flex-col items-start justify-center text-left py-12 px-6 md:px-16">
           <h3 className="uppercase text-2xl sm:text-3xl md:text-[34px] text-blue-900 leading-tight font-bold tracking-[10px] sm:tracking-[10px] font-lora">
            Welcome to RCCG <span className="text-red-500">Graceville</span>
          </h3>
         <p className="text-sm md:text-base text-gray-600 font-lora max-w-3xl leading-relaxed mt-4 hover:text-gray-800 transition">
      At <strong>RCCG Graceville</strong>, we are more than a congregation — we are a family built on
      the foundation of <strong>grace, love, and truth</strong>. Our mission is simple yet profound:
      to raise a generation of believers who are empowered by grace, led by the Spirit, and passionate
      about transforming their world for Christ.
    </p>
          <p className="text-sm md:text-base text-gray-600 font-lora max-w-3xl leading-relaxed mt-6 hover:text-gray-800 transition">
      Graceville is a youth parish of the <strong>Redeemed Christian Church of God (RCCG)</strong> — a
      global family of believers dedicated to spreading the message of salvation and hope through
      Jesus Christ. We believe that God’s grace is not just a doctrine, but a lifestyle that empowers
      every believer to live victoriously, love deeply, and serve faithfully.
    </p>
    
    <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mt-10">Our Vision</h3>
    <p className="text-sm md:text-base text-gray-600 font-lora leading-relaxed mt-2 hover:text-gray-800 transition">
      To build a community of people strengthened by grace, walking in love, and manifesting the life
      of Christ in every sphere of influence.
    </p>

    <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mt-10">Our Mission</h3>
    <ul className="text-sm md:text-base text-gray-600 font-lora leading-relaxed mt-4 space-y-2 hover:text-gray-800 transition text-left  max-w-3xl">
      <li>• To win souls and disciple believers through the teaching of God’s Word.</li>
      <li>• To create an atmosphere of worship where people encounter God’s presence.</li>
      <li>• To equip believers for purposeful living and kingdom impact.</li>
      <li>• To foster genuine relationships that reflect the love of Christ.</li>
    </ul>

    <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mt-10">Our Culture</h3>
    <ul className="text-sm md:text-base text-gray-600 font-lora leading-relaxed mt-4 space-y-2 hover:text-gray-800 transition text-left max-w-3xl">
      <li>• Love without limits</li>
      <li>• Serve with joy</li>
      <li>• Grow through the Word</li>
      <li>• Fellowship as a family</li>
    </ul>


           <div className="flex flex-col sm:flex-row gap-4 mt-6">

         <a
    href="https://www.youtube.com/@gracevillerccg693"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center gap-2 bg-purple-900 text-white px-6 py-3 rounded-lg hover:bg-red-600 font-semibold transition"
  >
    <Play className="w-5 h-5" />
    Watch Live Service
  </a>

        <button
          onClick={handleAppreciate}
          className="flex items-center justify-center gap-2 bg-purple-900 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition"
        >
          <HeartHandshake className="w-5 h-5" />
          Appreciate New Comer
        </button>
    
        </div>
        {message && (
        <div className="mt-6 bg-green-100 text-green-800 px-6 py-3 rounded-lg font-medium transition-all duration-300">
          {message}
      </div>

      )}
     
        </div>

        

        {/* Overlay Text */}
        /
          {/* <h1 className="uppercase text-2xl sm:text-3xl md:text-[24px] text-black leading-tight font-bold tracking-[6px] sm:tracking-[6px] font-lora">
            Welcome to RCCG Graceville
          </h1>
          <p className="text-lg md:text-2xl text-gray-600 font-lora max-w-3xl leading-relaxed mt-4">
            A place where faith meets community. We fortify by grace, shielded by faith,
            and clothed in love. (Ephesians 6:16; Colossians 3:14)
          </p> */}

          {/* Buttons */}
          {/* <div className="flex flex-col sm:flex-row gap-4 mt-6">
           
            <button className="border-2 border-gray-700 bg-white text-black px-6 py-3 rounded-lg hover:bg-black hover:text-white transition font-semibold">
              Plan Your Visit
            </button>
          </div> */}
        {/* </div> */}

        
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
        {[
          { icon: Users, value: "500+", label: "Members" },
          { icon: Calendar, value: "15+", label: "Years Serving" },
          { icon: Heart, value: "10+", label: "Ministries" },
          { icon: Users, value: "7+", label: "Pastors" },
        ].map(({ icon: Icon, value, label }) => (
          <div key={label} className="text-center">
            <div className="bg-white shadow rounded-lg p-6">
              <Icon className="w-8 h-8 text-purple-900 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-800">{value}</div>
              <div className="text-gray-500">{label}</div>
            </div>
          </div>
        ))}
      </div>
      
  

   
  );


      
    </div>
  );
};



    // <div className="relative" id="about">
    //   <div className="relative grid grid-cols-1 md:grid-cols-2 h-screen">
  {/* Left Column: Image */}
  // <div className="w-full h-64 md:h-auto">
  //   <img
  //     src="/images/about.webp"
  //     alt="Church community"
  //     className="w-full h-full object-cover"
  //   />
  // </div>

  {/* Right Column: Image or background color */}
  // <div className="w-full  md:h-auto bg-white-900/70">
    {/* Can add another image here if desired */}
  // </div>

  {/* Overlay Text spanning both columns */}
//   <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
//     <h1 className="uppercase text-[34px] text-black leading-[1.2] font-bold tracking-[10px] font-lora">
//       Welcome to RCCG Graceville
//     </h1>
//     <p className="text-lg md:text-2xl text-gray-500 font-lora
//     max-w-3xl leading-relaxed">
//       A place where faith meets community. We fortify by grace, shielded by faith, 
//       and clothed in love. (Ephesians 6:16; Colossians 3:14)
//     </p>

//     <div className="flex flex-col sm:flex-row gap-4 mt-6">
//       <a href="https://www.youtube.com/@gracevillerccg693" target="_blank" rel="noopener noreferrer">
//         <button className="bg-amber-500 text-white px-6 py-3 rounded-lg hover:bg-amber-600 font-semibold transition">
//           Watch Live Service
//         </button>
//       </a>
//       <button className="border-2 border-white bg-gray-500 text-black px-6 py-3 rounded-lg hover:bg-black hover:text-white transition font-semibold">
//         Plan Your Visit
//       </button>
//     </div>
//   </div>
//    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto h-screen">
//           {[
//             { icon: Users, value: "500+", label: "Members" },
//             { icon: Calendar, value: "15+", label: "Years Serving" },
//             { icon: Heart, value: "10+", label: "Ministries" },
//           ].map(({ icon: Icon, value, label }) => (
//             <div key={label} className="text-center">
//               <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
//                 <Icon className="w-8 h-8 text-amber-400 mx-auto mb-2" />
//                 <div className="text-2xl font-bold text-white">{value}</div>
//                 <div className="text-blue-100">{label}</div>
//               </div>
//             </div>
//           ))}
//         </div>

// </div>

//     </div>
//   )
// }

export default About;

  {/* <div className="grid max-w-6xl mx-auto grid-cols-1 md:grid-cols-3 gap-6">
    
      <div>
        <p>memeber</p>
      </div>
      <div>
        <p>memeber</p>
      </div>
      <div>
        <p>memeber</p>
      </div>
  
  </div> */}


{/* <div className="flex flex-col md:flex-row">
        <p>hello to chjrch</p>
  <div className="relative w-full h64 md:h-auto md:w-1/2">
    <img
    src="/images/banner1.jpeg" alt="Church" className="w-full h-auto " 
    />
    </div>
  
  <div className="md:w-1/2 bg-green-500 p-4 text-white">
    Column 2
  </div>
</div> */}