import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const AllTribes = () => {
  const images = [
    { src: "/images/tribes/janReuben.jpg", name: "Reuben" },
    { src: "/images/tribes/FebSimeon.jpg", name: "Simeon" },
    { src: "/images/tribes/MarchLevi.jpg", name: "Levi" },
    { src: "/images/tribes/AprilJudah.jpg", name: "Judah" },
    { src: "/images/tribes/MayManasseh.jpg", name: "Manasseh" },
    { src: "/images/tribes/JuneNaphtali.jpg", name: "Naphtali" },
    { src: "/images/tribes/JulyGad.jpg", name: "Gad" },
    { src: "/images/tribes/AugustAsher.jpg", name: "Asher" },
    { src: "/images/tribes/SeptIssachar.jpg", name: "Issachar" },
    { src: "/images/tribes/OctZebulun.jpg", name: "Zebulun" },
    { src: "/images/tribes/NovJoseph.jpg", name: "Joseph" },
    { src: "/images/tribes/DecBenjamin.jpg", name: "Benjamin" },
  ];

  return (
    <div className="bg-purple-900 py-20 shadow-lg " id="tribes">
      {/* ======= SECTION HEADER ======= */}
      <div className="flex items-center justify-center mb-8 text-center">
        <span className="flex items-center text-white text-lg uppercase tracking-[0.3em] w-full max-w-lg">
          <span className="flex-1 h-px bg-gray-400 mr-4"></span>
          TRIBES
          <span className="flex-1 h-px bg-gray-400 ml-4"></span>
        </span>
      </div>

      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-wide">
          <span className="text-red-600">Graceville</span> Church Tribes
        </h2>
        <div className="w-20 h-1 bg-red-500 mx-auto mt-3 rounded"></div>

        <p className="mt-4 text-white max-w-2xl mx-auto">
          The 12 Tribes of GraceVille represent the twelve birth months of our
          members — a divine symbol of unity through time and purpose. Each
          tribe reflects the unique grace, strength, and character of those born
          in that month, yet together we form one vibrant family — united in
          faith, love, and service to God.
        </p>
      </div>

      {/* ======= IMAGE SLIDER SECTION ======= */}
      <div
        className="relative bg-cover bg-center bg-no-repeat py-20 shadow-lg"
        style={{ backgroundImage: "url('/images/tribes/OctZebulun.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-purple-900/40"></div>

        {/* Swiper */}
        <Swiper
          slidesPerView={10}
          spaceBetween={0}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true} // ✅ Enable navigation internally
          modules={[Autoplay, Pagination, Navigation]}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="mySwiper"
        >
          {images.map((item, index) => (
            <SwiperSlide key={index} className="relative group">
              <img
                src={item.src}
                alt={item.name}
                loading="lazy"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105 mt-6"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white 
                  bg-black/60 opacity-100 sm:opacity-0 sm:group-hover:opacity-100
                  transition duration-500">
                <h3 className="text-lg font-semibold mb-3">{item.name}</h3>
                <a
                  href="#"
                  className="bg-purple-900 hover:bg-red-600 text-white px-4 py-2 rounded-md transition"
                >
                  View Details
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Caption below */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mt-6">
          The Zebulun
        </h2>
      </div>
    </div>



  );
};

export default AllTribes;

