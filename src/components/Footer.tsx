
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <Link to="/">
              <h2 className="font-display text-3xl font-bold">
                <span className="text-neon-pink">X</span>art
              </h2>
            </Link>
            <p className="text-sm text-gray-400 max-w-xs">
              Xart Exhibit showcases boundary-pushing AR/VR art, connecting artists, technology, and audiences in immersive experiences.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-neon-pink transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-pink transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-pink transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-pink transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-mono uppercase text-sm tracking-wider mb-4">Explore</h3>
            <ul className="space-y-2">
              {['Artists', 'Exhibits', 'Events', 'Editorial', 'Tech'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-mono uppercase text-sm tracking-wider mb-4">Support</h3>
            <ul className="space-y-2">
              {['Contact', 'Submissions', 'Sponsorship', 'FAQ', 'Privacy'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-mono uppercase text-sm tracking-wider mb-4">Newsletter</h3>
            <p className="text-sm text-gray-400 mb-4">Stay updated with the latest in AR/VR art</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/5 border border-white/10 rounded-l px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-neon-pink"
                aria-label="Email address"
              />
              <button 
                type="submit" 
                className="bg-neon-pink hover:bg-opacity-80 rounded-r px-3 transition-colors"
                aria-label="Subscribe"
              >
                <ArrowRight size={18} className="text-black" />
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Xart Exhibit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
