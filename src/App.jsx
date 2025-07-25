import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
// It's good practice to have a 404 page
// import NotFoundPage from './pages/NotFoundPage'; 

/**
 * The main App component sets up the routing for the entire website.
 * It uses React Router to define which component should be rendered for each URL path.
 * This version includes placeholder routes for all sub-menu items to ensure all links work.
 */
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* Main Pages */}
          <Route index element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="our-expertise" element={<OurExpertise />} />
          <Route path="our-approach" element={<OurApproach />} />
          <Route path="our-projects" element={<OurProjects />} />
          <Route path="sectors" element={<Sectors />} />
          <Route path="customer-guide" element={<CustomerGuide />} />
          <Route path="careers" element={<Careers />} />
          <Route path="investors" element={<Investors />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="governance" element={<Governance />} />
          <Route path="privacy-and-security" element={<PrivacyAndSecurity />} />
          <Route path="become-partner" element={<ContactUs />} /> {/* Assuming this links to Contact */}

          {/* --- Sub-page routes to make all menu links functional --- */}
          {/* In a real app, you might create specific components or have the parent page handle these */}
          
          {/* About Us Sub-Routes */}
          <Route path="about-us/:section" element={<AboutUs />} />

          {/* Our Expertise Sub-Routes */}
          <Route path="our-expertise/:service" element={<OurExpertise />} />

          {/* Our Approach Sub-Routes */}
          <Route path="our-approach/:method" element={<OurApproach />} />

          {/* Our Projects Sub-Routes */}
          <Route path="our-projects/:project" element={<OurProjects />} />

          {/* Sectors Sub-Routes */}
          <Route path="sectors/:sector" element={<Sectors />} />

          {/* Customer Guide Sub-Routes */}
          <Route path="customer-guide/:guide" element={<CustomerGuide />} />

          {/* Careers Sub-Routes */}
          <Route path="careers/:topic" element={<Careers />} />
          
          {/* Contact Us Sub-Routes */}
          <Route path="contact-us/:office" element={<ContactUs />} />

          {/* Investors Sub-Routes */}
          <Route path="investors/:topic" element={<Investors />} />

          {/* Governance Sub-Routes */}
          <Route path="governance/:topic" element={<Governance />} />

          {/* A catch-all route for any undefined paths */}
          {/* <Route path="*" element={<NotFoundPage />} /> */}
          {/* For now, redirect any unknown path to home */}
          <Route path="*" element={<Navigate to="/" replace />} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;