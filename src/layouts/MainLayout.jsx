import { Outlet } from 'react-router-dom';
import Header from '../components/Header'; // Your Header component
import Footer from '../components/Footer'; // Your Footer component

const MainLayout = () => {
  return (
    // This parent div allows the header and footer to be full-width.
    <div className="flex flex-col min-h-screen">
      
      {/* The Header component is a direct child, so it will span the full width. */}
      <Header />

      {/* The main content area for your pages. */}
      <main className="flex-grow w-full">
        {/* The 'container' class is applied HERE to constrain only the page content, not the header. */}
        <div className="container mx-auto px-6 py-8">
          <Outlet /> {/* This renders the content of your pages (Home, About, etc.) */}
        </div>
      </main>
      
      {/* The Footer component is also a direct child and can be full-width. */}
      <Footer />

    </div>
  );
};

export default MainLayout;