
import { Facebook, Instagram, Youtube } from 'lucide-react'

function Pastor() {
  const pastors = [
    {
      name: "Pastor Sola Olowolafe",
      role: "Lead Pastor",
      image: "/images/leadPastor.jpeg",
      socials: {
        facebook: "https://facebook.com/",
        instagram: "https://instagram.com/",
        youtube: "https://youtube.com/",
      },
    },
    {
      name: "Adewale Shokoya - Associate Pastor",
      role: "Associate Pastor",
      image: "/images/Associate-pastor1.jpeg",
      socials: {
        facebook: "https://facebook.com/",
        instagram: "https://instagram.com/",
        youtube: "https://youtube.com/",
      },
    },
    {
      name: "Femi Johnson - Associate Pastor",
      role: "Associate Pastor",
      image: "/images/Associate pastor.jpeg",
      socials: {
        facebook: "https://facebook.com/",
        instagram: "https://instagram.com/",
        youtube: "https://youtube.com/",
      },
    },
  ];
  return (
   

  
    <section className="py-20 bg-white" id="pastors">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center justify-center mb-8 text-center">
          <span className="flex items-center text-gray-500 text-lg uppercase tracking-[0.3em] w-full max-w-lg">
            <span className="flex-1 h-px bg-gray-400 mr-4"></span>
            Pastors
            <span className="flex-1 h-px bg-gray-400 ml-4"></span>
          </span>
        </div>

        {/* Heading & Description */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-wide">
            Meet Our Dedicated <span className="text-red-600">Pastors</span>
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto mt-3 rounded"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm md:text-base font-lora leading-relaxed">
            At <strong>RCCG Graceville</strong>, we are blessed with pastors who are passionate about God,
            people, and purpose. Their leadership is built on humility, integrity, and an unwavering
            commitment to raising believers who live by grace and walk in truth.
          </p>
        </div>

        {/* Pastors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {pastors.map(({ name, role, image, socials }) => (
            <div
              key={name}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={image}
                  alt={name}
                  className="w-full h-100 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition"></div>
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800">{name}</h3>
                <p className="text-red-500 font-semibold mb-4">{role}</p>

                {/* Social Media Icons */}
                <div className="flex justify-center gap-5">
                  <a
                    href={socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-blue-700 transition"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href={socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-pink-600 transition"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href={socials.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-red-600 transition"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pastor
