import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Services', href: '#services' }, 
    { name: 'Works', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300`}
         style={{ 
           position: 'fixed', 
           top: 0, 
           left: 0, 
           right: 0, 
           padding: scrolled ? '1rem 0' : '1.5rem 0',
           background: scrolled ? 'rgba(3, 7, 18, 0.8)' : 'transparent',
           backdropFilter: scrolled ? 'blur(10px)' : 'none',
           borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
           zIndex: 1000
         }}>
      
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="logo" style={{ fontSize: '1.6rem', fontWeight: '900', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
          <div style={{ 
            width: '40px', height: '40px', background: 'var(--primary)', 
            borderRadius: '12px', display: 'flex', alignItems: 'center', 
            justifyContent: 'center', boxShadow: '0 8px 16px rgba(59, 130, 246, 0.3)' 
          }}>
            <span style={{ color: 'white', fontSize: '1.4rem', fontWeight: 'bold' }}>A</span>
          </div>
          <span style={{ letterSpacing: '-1px' }}>AKASH <span style={{ color: 'var(--primary)', opacity: 0.8 }}>ANIL</span></span>
        </div>

        {/* Desktop Menu */}
        <ul className="desktop-menu" style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
          {navLinks.map((link) => (
            <li key={link.name} className="hidden md:block">
              <a 
                href={link.href} 
                style={{ color: 'var(--text-secondary)', fontWeight: '500', fontSize: '0.95rem' }}
                onMouseOver={(e) => e.target.style.color = 'var(--primary)'}
                onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="hidden md:block">
             <a href="#contact" className="btn btn-primary" style={{ padding: '0.5rem 1.2rem', fontSize: '0.9rem' }}>Let's Talk</a>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <div className="md:hidden mobile-toggle" style={{ display: 'none' }}>
          <button onClick={() => setIsOpen(!isOpen)} style={{ background: 'none', border: 'none', color: 'var(--text-main)', fontSize: '1.5rem', cursor: 'pointer' }}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .desktop-menu { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              position: 'fixed',
              top: '0',
              left: 0,
              right: 0,
              bottom: 0,
              background: '#030712',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 999
            }}
          >
             <button onClick={() => setIsOpen(false)} style={{ position: 'absolute', top: '2rem', right: '1.5rem', background: 'none', border: 'none', color: 'white', fontSize: '2rem', cursor: 'pointer' }}>
                <FaTimes />
             </button>

            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                onClick={() => setIsOpen(false)}
                style={{ fontSize: '2rem', color: 'var(--text-main)', margin: '1rem 0', fontWeight: '700' }}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
export default Navbar;
