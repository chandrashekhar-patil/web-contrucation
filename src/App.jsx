import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import OurExpertise from './pages/OurExpertise';
import OurApproach from './pages/OurApproach';
import OurProjects from './pages/OurProjects';
import Sectors from './pages/Sectors';
import CustomerGuide from './pages/CustomerGuide';
import Careers from './pages/Careers';
import Investors from './pages/Investors';
import ContactUs from './pages/ContactUs';
import Governance from './pages/Governance';
import PrivacyAndSecurity from './pages/PrivacyAndSecurity';

/**
 * The main App component sets up the routing for the entire website.
 * It uses React Router to define which component should be rendered for each URL path.
 * All pages are wrapped in the MainLayout to ensure a consistent Header and Footer.
 */
function App() {
  return (
    <Router>
      <Routes>
        {/* The MainLayout component wraps all pages, providing the header and footer */}
        <Route path="/" element={<MainLayout />}>
          {/* The index route is the default page for the parent route ('/') */}
          <Route index element={<Home />} />
          
          {/* Defines the route for the "About Us" page */}
          <Route path="about-us" element={<AboutUs />} />
          
          {/* Defines the route for the "Our Expertise" page */}
          <Route path="our-expertise" element={<OurExpertise />} />
          
          {/* Defines the route for the "Our Approach" page */}
          <Route path="our-approach" element={<OurApproach />} />
          
          {/* Defines the route for the "Our Projects" page */}
          <Route path="our-projects" element={<OurProjects />} />
          
          {/* Defines the route for the "Sectors" page */}
          <Route path="sectors" element={<Sectors />} />
          
          {/* Defines the route for the "Customer Guide" page */}
          <Route path="customer-guide" element={<CustomerGuide />} />
          
          {/* Defines the route for the "Careers" page */}
          <Route path="careers" element={<Careers />} />
          
          {/* Defines the route for the "Investors" page */}
          <Route path="investors" element={<Investors />} />
          
          {/* Defines the route for the "Contact Us" page */}
          <Route path="contact-us" element={<ContactUs />} />
          
          {/* Defines the route for the "Governance" page */}
          <Route path="governance" element={<Governance />} />
          
          {/* Defines the route for the "Privacy & Security" page */}
          <Route path="privacy-and-security" element={<PrivacyAndSecurity />} />

          {/* A catch-all route for any undefined paths could be added here */}
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;