import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { privacyLinks } from '../data/privacyData';

const Footer = () => {
  return (
    <footer className="bg-oxford-blue text-light-gray">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">DHD Group</h3>
            <p className="text-sm text-gray-300">
              Building a sustainable future through innovation and excellence.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about-us" className="hover:text-action-red transition-colors">About Us</Link></li>
              <li><Link to="/our-projects" className="hover:text-action-red transition-colors">Projects</Link></li>
              <li><Link to="/careers" className="hover:text-action-red transition-colors">Careers</Link></li>
              <li><Link to="/contact-us" className="hover:text-action-red transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Privacy & Security</h3>
            <ul className="space-y-2">
              {privacyLinks.map(link => (
                 <li key={link.path}><Link to={link.path} className="hover:text-action-red transition-colors">{link.title}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-action-red transition-colors"><FaFacebook size={24} /></a>
              <a href="#" className="hover:text-action-red transition-colors"><FaTwitter size={24} /></a>
              <a href="#" className="hover:text-action-red transition-colors"><FaLinkedin size={24} /></a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>@ 2024 DHD All rights reserved. DHD Group of company and AP Group Company is an Equal Opportunity Employer, including Disability/Veterans.</p>
          <p className="mt-2">Global Financial Crimes Compliance</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;