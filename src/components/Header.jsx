import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiChevronDown, FiExternalLink } from 'react-icons/fi';
import { menuData, governanceData } from '../data/menuData'; // Assuming you have a menuData file

// Complete menu data structure
const Header = () => {
  const [hoveredPath, setHoveredPath] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const activeLinkStyle = {
    color: '#DC2626', // red-600
    borderBottom: '2px solid #DC2626'
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">D</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-900 text-lg leading-none">DHD</span>
              <span className="text-xs text-gray-600">GROUP</span>
            </div>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden xl:flex items-center space-x-1">
          {menuData.map((item) => (
            <div
              key={item.path}
              className="relative group"
              onMouseEnter={() => setHoveredPath(item.path)}
              onMouseLeave={() => setHoveredPath(null)}
            >
              <NavLink
                to={item.path}
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-red-600 transition-colors duration-200 rounded-md hover:bg-gray-50"
                style={({ isActive }) => isActive ? activeLinkStyle : undefined}
              >
                {item.title}
                {item.subMenu && (
                  <FiChevronDown className="ml-1 w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                )}
              </NavLink>

              {/* Mega Menu */}
              <AnimatePresence>
                {hoveredPath === item.path && item.subMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className={`absolute left-0 mt-1 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50 ${
                      item.subMenu.length > 8 
                        ? 'w-80 grid grid-cols-2 gap-1 p-4' 
                        : 'w-64'
                    }`}
                  >
                    {item.subMenu.map((subItem) => (
                      <div key={subItem.path} className="relative">
                        {subItem.external ? (
                          <a
                            href={subItem.external}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between px-3 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-md transition-colors duration-150"
                          >
                            {subItem.title}
                            <FiExternalLink className="w-3 h-3 ml-2" />
                          </a>
                        ) : (
                          <Link
                            to={subItem.path}
                            className="block px-3 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-md transition-colors duration-150"
                          >
                            {subItem.title}
                          </Link>
                        )}
                      </div>
                    ))}
                    
                    {/* Special handling for About Us -> Governance */}
                    {item.title === "About Us" && (
                      <div className="border-t border-gray-100 mt-2 pt-2">
                        <div className="px-3 py-1">
                          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Governance</span>
                        </div>
                        {governanceData.map((govItem) => (
                          <Link
                            key={govItem.path}
                            to={govItem.path}
                            className="block px-3 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-md transition-colors duration-150"
                          >
                            {govItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="xl:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="p-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
          >
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
            transition={{ duration: 0.3 }}
            className="xl:hidden bg-white border-t border-gray-100"
          >
            <div className="max-h-96 overflow-y-auto">
              <nav className="flex flex-col px-6 py-4 space-y-2">
                {menuData.map(item => (
                  <div key={item.path} className="border-b border-gray-100 pb-2">
                    <NavLink 
                      to={item.path} 
                      onClick={() => setMobileMenuOpen(false)} 
                      className="block py-2 font-medium text-gray-700 hover:text-red-600 transition-colors duration-200"
                      style={({ isActive }) => isActive ? { color: '#DC2626' } : undefined}
                    >
                      {item.title}
                    </NavLink>
                    {item.subMenu && (
                      <div className="pl-4 mt-2 space-y-1">
                        {item.subMenu.map(subItem => (
                          <div key={subItem.path}>
                            {subItem.external ? (
                              <a
                                href={subItem.external}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-center py-1 text-sm text-gray-600 hover:text-red-600 transition-colors duration-200"
                              >
                                {subItem.title}
                                <FiExternalLink className="w-3 h-3 ml-1" />
                              </a>
                            ) : (
                              <NavLink 
                                to={subItem.path} 
                                onClick={() => setMobileMenuOpen(false)} 
                                className="block py-1 text-sm text-gray-600 hover:text-red-600 transition-colors duration-200"
                              >
                                {subItem.title}
                              </NavLink>
                            )}
                          </div>
                        ))}
                        
                        {/* Governance items for About Us in mobile */}
                        {item.title === "About Us" && (
                          <div className="border-t border-gray-100 mt-2 pt-2">
                            <div className="py-1">
                              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Governance</span>
                            </div>
                            {governanceData.map((govItem) => (
                              <NavLink
                                key={govItem.path}
                                to={govItem.path}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block py-1 text-sm text-gray-600 hover:text-red-600 transition-colors duration-200"
                              >
                                {govItem.title}
                              </NavLink>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;