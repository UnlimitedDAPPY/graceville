import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { HeaderLinks, groupLinks } from "./NavLink";


const Footer = () => {

  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://facebook.com/rccggraceville',
      icon: Facebook,
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/rccggraceville',
      icon: Twitter,
      color: 'bg-sky-500 hover:bg-sky-600'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/rccggraceville',
      icon: Instagram,
      color: 'bg-pink-600 hover:bg-pink-700'
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/rccggraceville',
      icon: Youtube,
      color: 'bg-red-600 hover:bg-red-700'
    },
  ];
  return (
    
    <section className="bg-purple-900" id='footer'>
      <div className='grid grid-cols-1 md:grid-cols-4 py-8 mx-auto px-16 '>
          <div className="mx-auto justify-center py-10">
            <img src="images/gv-logo.webp" alt="logo" className="w-32 md:w-40"/>
            <p className="text-white">
              We are Graceville fortify by grace
            </p>
            <div className="flex justify-center space-x-4 my-8">
              {socialLinks.map(({ name, url, icon: Icon, color }) => (
              <a
          key={name}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${color} text-white p-3 rounded-full transition-all duration-300 hover:scale-110`}
          aria-label={`Follow us on ${name}`}
        >
          <Icon className="w-5 h-5" />
        </a>
      ))}
    </div>
          </div>
          
          <div className="py-10">
  <div className="max-w-6xl mx-auto px-6">
    <div className="flex flex-col items-center space-y-4">
      <h2 className="text-lg text-[22px] font-bold text-white mb-4">
        About Us
      </h2>

      <nav className="flex flex-col items-center space-y-2">
        {HeaderLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-white hover:text-red-600 font-medium transition-colors hover:underline-blue-300 relative group"
          >
            {link.name}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-900 transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </nav>
    </div>

    
  </div>
</div>

  <div className="py-10">
            <div className="max-w-6xl mx-auto px-6">
    <div className="flex flex-col items-center space-y-4">
      <h2 className="text-lg text-[22px] font-bold text-white mb-4">
        Connect
      </h2>

      <nav className="flex flex-col items-center space-y-2">
        {groupLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-white hover:text-red-600 font-medium transition-colors hover:underline-blue-300 relative group"
          >
            {link.name}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-900 transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </nav>
    </div>

    
  </div>
  </div>
          <div className="py-10">
            <h2 className="text-white text-center text-[22px] font-bold">
              Service Hour
            </h2>
            <p className="text-white text-center mb-4">Sunday Sevice <br />
              <span className="">9:00AM - 11:30AM</span>
            </p>
            <p className="text-white text-center mb-4">Midweek Sevice <br />
              <span className="">6:00AM - 11:30AM</span>
            </p>
              
              
          </div>
        
      </div>
         <div className="border-t border-gray-300 py-4">
          <p className="text-center text-white text-sm">
        Copyright &copy; {new Date().getFullYear()}
      </p>
         </div>

      {/* <p className="text-center text-gray-500 text-sm mt-8">
      © {new Date().getFullYear()} Your Website. All rights reserved.
    </p> */}
    </section>
  )
}

export default Footer
