import PageHeader from '../components/PageHeader';
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi';

const ContactUs = () => {
    // This data would ideally be in a data file
    const contactInfo = [
        { title: "Company Office", address: "123 DHD Avenue, Pune, MH, India", icon: <FiMapPin/> },
        { title: "Channel Partner Office", address: "456 Partner Plaza, Pune, MH, India", icon: <FiMapPin/> },
        { title: "Employee Reference Office", address: "789 Colleague Court, Pune, MH, India", icon: <FiMapPin/> },
    ];
    
  return (
    <div>
      <PageHeader title="Contact Us" subtitle="We'd love to hear from you. Reach out to us through any of the channels below." />
      
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-oxford-blue mb-6">Send us a Message</h3>
                <form className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-dark-charcoal">Full Name</label>
                        <input type="text" id="name" name="name" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-oxford-blue focus:border-oxford-blue" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-dark-charcoal">Email Address</label>
                        <input type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-oxford-blue focus:border-oxford-blue" />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-dark-charcoal">Message</label>
                        <textarea id="message" name="message" rows="5" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-oxford-blue focus:border-oxford-blue"></textarea>
                    </div>
                    <div>
                        <button type="submit" className="w-full bg-action-red hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md transition-colors duration-300">
                            Submit Inquiry
                        </button>
                    </div>
                </form>
            </div>

            {/* Contact Details */}
            <div className="space-y-8">
                <h3 className="text-2xl font-bold text-oxford-blue">Our Offices</h3>
                {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                        <div className="text-action-red mt-1">{info.icon}</div>
                        <div>
                            <h4 className="font-semibold text-dark-charcoal">{info.title}</h4>
                            <p className="text-medium-gray">{info.address}</p>
                        </div>
                    </div>
                ))}
                 <div className="flex items-start space-x-4">
                    <div className="text-action-red mt-1"><FiPhone/></div>
                    <div>
                        <h4 className="font-semibold text-dark-charcoal">Phone</h4>
                        <p className="text-medium-gray">+91 123 456 7890</p>
                    </div>
                </div>
                 <div className="flex items-start space-x-4">
                    <div className="text-action-red mt-1"><FiMail/></div>
                    <div>
                        <h4 className="font-semibold text-dark-charcoal">Email</h4>
                        <p className="text-medium-gray">contact@dhd.com</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;