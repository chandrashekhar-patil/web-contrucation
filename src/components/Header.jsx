import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiChevronDown, FiExternalLink } from "react-icons/fi";
import { menuData } from "../data/menuData";

const Header = () => {
  const [hoveredPath, setHoveredPath] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [mobileMenuOpen]);

  const activeLinkStyle = { color: "#DC2626" };

  const LinkItem = ({ item, onClick }) => (
    item.external ? (
      <a href={item.external} target="_blank" rel="noopener noreferrer" onClick={onClick} className="flex items-center justify-between px-3 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-md transition-colors duration-150">
        {item.title}
        <FiExternalLink className="w-3 h-3 ml-2 text-gray-400" />
      </a>
    ) : (
      <Link to={item.path} onClick={onClick} className="block px-3 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-md transition-colors duration-150">
        {item.title}
      </Link>
    )
  );

  return (
    <>
      <header className="bg-white/80 backdrop-blur-lg shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-gray-800 text-base leading-none">DHD</span>
                <span className="text-xs text-gray-500">GROUP</span>
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-2">
            {menuData.map((item) => (
              <div
                key={item.path || item.title}
                className="relative"
                onMouseEnter={() => setHoveredPath(item.path)}
                onMouseLeave={() => setHoveredPath(null)}
              >
                <NavLink to={item.path} className="flex items-center whitespace-nowrap px-3 py-2 text-sm font-medium text-gray-700 hover:text-red-600 transition-colors duration-200 rounded-md" style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}>
                  {item.title}
                  {item.subMenu && <FiChevronDown className="ml-1 w-4 h-4" />}
                </NavLink>

                {/* Desktop Dropdown Menu Logic */}
                <AnimatePresence>
                  {hoveredPath === item.path && item.subMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white rounded-lg shadow-xl border border-gray-100 p-4 z-50 ${item.isMegaMenu ? 'w-[600px]' : 'w-60'}`}
                    >
                      {item.isMegaMenu ? (
                        // Render Mega Menu
                        <div className="grid grid-cols-3 gap-x-6 gap-y-4">
                          {item.subMenu.map(column => (
                            <div key={column.heading}>
                              <h3 className="text-sm font-semibold text-gray-900 border-b border-gray-200 pb-2 mb-2">{column.heading}</h3>
                              <ul className="space-y-1">
                                {column.links.map(link => <li key={link.path || link.title}><LinkItem item={link} /></li>)}
                              </ul>
                            </div>
                          ))}
                        </div>
                      ) : (
                        // Render Simple Dropdown
                        <ul className="space-y-1">
                          {item.subMenu[0].links.map(link => <li key={link.path || link.title}><LinkItem item={link} /></li>)}
                        </ul>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setMobileMenuOpen(true)} className="p-2 text-gray-700 rounded-md" aria-label="Open menu">
              <FiMenu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setMobileMenuOpen(false)} className="fixed inset-0 bg-black/50 z-50" />
            <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', stiffness: 300, damping: 30 }} className="fixed top-0 right-0 h-full w-full max-w-sm bg-white z-50 flex flex-col">
              <div className="flex items-center justify-between p-4 border-b border-gray-100">
                <h2 className="font-bold text-lg text-gray-800">Menu</h2>
                <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-gray-700 rounded-md" aria-label="Close menu"><FiX size={24} /></button>
              </div>
              <nav className="flex-grow overflow-y-auto p-4">
                {menuData.map((item) => (
                  <div key={item.path || item.title} className="py-2 border-b border-gray-100 last:border-b-0">
                    <NavLink to={item.path} className="block py-2 font-medium text-gray-700" onClick={() => !item.subMenu && setMobileMenuOpen(false)} style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}>
                      {item.title}
                    </NavLink>
                    {item.subMenu && (
                      <div className="pl-4 mt-2 space-y-1">
                        {item.subMenu.map(column => (
                           <div key={column.heading} className="mb-3">
                              {column.heading && <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">{column.heading}</h4>}
                               {column.links.map(link => <LinkItem key={link.path || link.title} item={link} onClick={() => setMobileMenuOpen(false)} />)}
                           </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;