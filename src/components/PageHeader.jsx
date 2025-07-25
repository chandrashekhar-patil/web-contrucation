const PageHeader = ({ title, subtitle }) => {
    return (
      <div className="bg-oxford-blue text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
          {subtitle && <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">{subtitle}</p>}
        </div>
      </div>
    );
  };
  
  export default PageHeader;