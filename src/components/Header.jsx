import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { menuData } from '../data/menuData';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [hoveredPath, setHoveredPath] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const activeLinkStyle = {
    color: '#D90429', // action-red
    borderBottom: '2px solid #D90429'
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex-shrink-0">
          <img src="/logo.svg" alt="DHD Logo" className="h-10" />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-6">
          {menuData.map((item) => (
            <div
              key={item.path}
              className="relative"
              onMouseEnter={() => setHoveredPath(item.path)}
              onMouseLeave={() => setHoveredPath(null)}
            >
              <NavLink
                to={item.path}
                className="text-oxford-blue hover:text-action-red transition-colors duration-300 pb-2"
                style={({ isActive }) => isActive ? activeLinkStyle : undefined}
              >
                {item.title}
              </NavLink>
              <AnimatePresence>
                {hoveredPath === item.path && item.subMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg py-2"
                  >
                    {item.subMenu.map((subItem) => (
                      <Link
                        key={subItem.path}
                        to={subItem.path}
                        className="block px-4 py-2 text-sm text-dark-charcoal hover:bg-light-gray hover:text-action-red"
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-oxford-blue">
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white"
          >
            <nav className="flex flex-col px-6 pb-4">
              {menuData.map(item => (
                <div key={item.path} className="py-2 border-b border-light-gray">
                    <NavLink to={item.path} onClick={() => setMobileMenuOpen(false)} className="text-oxford-blue hover:text-action-red block">{item.title}</NavLink>
                    {item.subMenu && (
                        <div className="pl-4 mt-2">
                        {item.subMenu.map(subItem => (
                            <NavLink key={subItem.path} to={subItem.path} onClick={() => setMobileMenuOpen(false)} className="block py-1 text-sm text-dark-charcoal hover:text-action-red">{subItem.title}</NavLink>
                        ))}
                        </div>
                    )}
                </div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;