import { Film, Youtube, Linkedin, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Youtube, href: '#', label: 'YouTube', color: 'hover:text-red-500' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-500' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-500' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-cyan-500' }
  ];

  return (
    <footer className="bg-black border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg">
                <Film className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">VideoEditor</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Professional video editing and post-production services. Transforming raw footage into captivating stories that leave lasting impressions.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className={`p-3 bg-gray-900 rounded-lg text-gray-400 ${social.color} transition-all duration-300 hover:scale-110`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Work', 'Skills', 'About', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              {['Video Editing', 'Color Grading', 'Motion Graphics', 'Sound Design'].map((service) => (
                <li key={service}>
                  <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            {currentYear} VideoEditor. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
