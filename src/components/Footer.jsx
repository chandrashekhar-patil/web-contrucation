import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Mail, Phone } from "lucide-react";
import { privacyLinks } from "../data/privacyData"; // Uses your provided data file

const Footer = () => {
  // Get the current year dynamically for the copyright notice
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { title: "About Us", path: "/about-us" },
    { title: "Our Expertise", path: "/our-expertise" },
    { title: "Projects", path: "/our-projects" },
    { title: "Careers", path: "/careers" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand Info & Socials */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white text-lg leading-none">
                  DHD GROUP
                </span>
              </div>
            </Link>
            <p className="text-sm text-gray-400">
              Building a sustainable future through innovation and excellence.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="#"
                className="text-gray-400 hover:text-red-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-red-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-red-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-base font-semibold text-white mb-4 tracking-wider uppercase">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    to={link.path}
                    className="hover:text-red-500 transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Policies & Legal */}
          <div>
            <h3 className="text-base font-semibold text-white mb-4 tracking-wider uppercase">
              Legal & Policies
            </h3>
            <ul className="space-y-3">
              {privacyLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    to={link.path}
                    className="hover:text-red-500 transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h3 className="text-base font-semibold text-white mb-4 tracking-wider uppercase">
              Contact Info
            </h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-red-500 flex-shrink-0" />
                <span>+91 123 456 7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-red-500 flex-shrink-0" />
                <span>contact@dhdgroup.com</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1">&#9679;</span>
                <span>DHD Group, Pune, Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p className="mb-2">Global Financial Crimes Compliance</p>
          <p>
            © {currentYear} DHD All rights reserved. DHD Group of company and AP
            Group Company is an Equal Opportunity Employer, including
            Disability/Veterans.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
