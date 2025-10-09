import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";


const Footer = ({ links }) => {

  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://facebook.com/yourchurch',
      icon: Facebook,
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/yourchurch',
      icon: Twitter,
      color: 'bg-sky-500 hover:bg-sky-600'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/yourchurch',
      icon: Instagram,
      color: 'bg-pink-600 hover:bg-pink-700'
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/yourchurch',
      icon: Youtube,
      color: 'bg-red-600 hover:bg-red-700'
    },
  ];
  return (
    
    <section className="bg-purple-900" id='footer'>
      <div className='grid grid-cols-1 md:grid-cols-4 py-8 mx-auto px-16 '>
          <div className="mx-auto justify-center">
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
          <div>
            <h2 className="text-white text-center text-[22px] font-bold">
              About us
            </h2>
            {/* <nav className="hidden lg:flex space-x-8">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-purple-900 font-medium transition-colors hover:underline-blue-300 relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-900 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              </nav> */}
          </div>
          <div>
            <h2 className="text-white text-center text-[22px] font-bold">
              Connect
            </h2>
          </div>
          <div>
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
         <p className="text-center mx-auto">
        Copyright &copy; {new Date().getFullYear()}
      </p>
    </section>
  )
}

export default Footer
