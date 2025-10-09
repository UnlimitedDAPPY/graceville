import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

const Footer = () => {

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
      <div className='grid grid-cols-1 md:grid-cols-3 py-8'>
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
      </div>
    </section>
  )
}

export default Footer
