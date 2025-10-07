import React from "react";
import { Video, HandHelping, Church, Users } from "lucide-react";

const Service = () => {
  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-center mb-8 text-center">
          <span className="flex items-center text-gray-500 text-lg uppercase tracking-[0.3em] w-full max-w-lg">
            <span className="flex-1 h-px bg-gray-400 mr-4"></span>
            Service
            <span className="flex-1 h-px bg-gray-400 ml-4"></span>
          </span>
        </div>
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-wide">
            <span className="text-red-600">Graceville</span> Church Services
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto mt-3 rounded"></div>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            At RCCG Graceville, we are a family of believers passionate about
            worship, the Word, and winning souls for Christ. Each of our
            services is designed to strengthen your faith, build genuine
            community, and help you grow spiritually through the power of the
            Holy Spirit.
          </p>
        </div>

        {/* Program Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Sunday Services */}
          {/* <div className="bg-white shadow-md rounded-xl p-8 border-t-4 border-red-500 hover:shadow-lg transition-all">
            <div className="flex items-center justify-center mb-4">
              <Church className="w-8 h-8 text-red-500" />
            </div>
            <h3 className="text-xl font-bold text-center text-red-600 mb-4 uppercase">
              Sunday Services
            </h3>
            <ul className="space-y-2 text-gray-700 font-medium text-center">
              <li>Thanksgiving Service – 8am (1st Sunday)</li>
              <li>Fresh Flow Service – 8am (2nd & 3rd Sundays)</li>
              <li>Expression Service – 9:30am (2nd & 3rd Sundays)</li>
              <li>Press In Service – 10:30am (2nd & 3rd Sundays)</li>
              <li>Anointing Service – 8am (Last Sunday)</li>
            </ul>
          </div> */}

          <div
            className="relative rounded-xl overflow-hidden shadow-lg group"
            style={{
              backgroundImage: "url('/images/sundayService.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-all"></div>
            <div className="relative z-10 p-8 text-center text-white">
              <div className="flex items-center justify-center mb-4">
                <Church className="w-10 h-10 text-red-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 uppercase text-red-400">
                Sunday Services
              </h3>
              <ul className="space-y-2 font-medium">
                <li>Thanksgiving Service – 8am (1st Sunday)</li>
                <li>Fresh Flow Service – 8am (2nd & 3rd Sundays)</li>
                <li>Expression Service – 9:30am (2nd & 3rd Sundays)</li>
                <li>Press In Service – 10:30am (2nd & 3rd Sundays)</li>
                <li>Anointing Service – 8am (Last Sunday)</li>
              </ul>
            </div>
          </div>

          {/*Monday Morning Prayer */}
          <div
            className="relative rounded-xl overflow-hidden shadow-lg group"
            style={{
              backgroundImage: "url('/images/mondayPrayer.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-all"></div>
            <div className="relative z-10 p-8 text-center text-white">
              <div className="flex items-center justify-center mb-4">
                <HandHelping className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-center text-red-600 mb-4 uppercase">
                Monday Morning Prayer
              </h3>
              <p className="text-center font-medium leading-relaxed">
                Prayers that move mountains
                <br />
                <span className="block  mt-2 font-semibold">
                  Monday – 6am on Google Meet
                </span>
                <span>Instagram</span>
                <span>Live</span>
              </p>
            </div>
          </div>

          <div
            className="relative rounded-xl overflow-hidden shadow-lg group"
            style={{
              backgroundImage: "url('/images/rubbingMinds.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-all"></div>
            <div className="relative z-10 p-8 text-center text-white">
              <div className="flex items-center justify-center mb-4">
                <Video className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-center text-red-600 mb-4 uppercase">
                Rubbing Minds
              </h3>
              <p className="text-center font-medium leading-relaxed">
                Real Christian Conversation
                <br />
                <span className="block mt-2 font-semibold">
                  Sundays – 7pm on Google Meet
                </span>
              </p>
            </div>
          </div>

          {/* Graceville Hangout */}
          <div
            className="relative rounded-xl overflow-hidden shadow-lg group"
            style={{
              backgroundImage: "url('/images/midWeek.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-all"></div>
            <div className="relative z-10 p-8 text-center text-white">
              <div className="flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-center text-red-600 mb-4 uppercase">
                Graceville Hangout
              </h3>
              <p className="text-center font-medium leading-relaxed">
                A time to connect, share, and grow together
                <br />
                <span className="block mt-2 font-semibold">
                  Wednesdays – 6pm on IG Live
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
