
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-lg bg-black/60 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="z-50">
          <h1 className="font-display text-2xl font-bold text-white">
            <span className="text-neon-pink">X</span>art
          </h1>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          {['Artists', 'Exhibits', 'Events', 'Editorial', 'Tech', 'Contact'].map((item) => (
            <Link 
              key={item} 
              to={`/${item.toLowerCase()}`}
              className="text-sm uppercase tracking-wider font-mono hover:text-neon-pink transition-colors"
            >
              {item}
            </Link>
          ))}
          <button 
            aria-label="Search"
            className="text-white hover:text-neon-pink transition-colors"
          >
            <Search size={20} />
          </button>
        </nav>
        
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="md:hidden text-white hover:text-neon-pink transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center z-40 transition-all duration-500 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <nav className="flex flex-col items-center space-y-6">
          {['Artists', 'Exhibits', 'Events', 'Editorial', 'Tech', 'Contact'].map((item) => (
            <Link 
              key={item} 
              to={`/${item.toLowerCase()}`}
              className="text-xl uppercase tracking-wider font-mono hover:text-neon-pink transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
