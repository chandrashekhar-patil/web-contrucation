import React, { useState } from "react";
import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";

const ContactUs = () => {
  // --- STATE MANAGEMENT ---
  const initialFormState = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    topic: "General Inquiry", // Default topic
    message: "",
  };

  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // --- DATA ---
  const contactInfo = [
    {
      title: "Company Office",
      address: "123 DHD Avenue, Pune, MH, India",
      icon: <FiMapPin size={20} />,
    },
    {
      title: "Channel Partner Office",
      address: "456 Partner Plaza, Pune, MH, India",
      icon: <FiMapPin size={20} />,
    },
    {
      title: "Employee Reference Office",
      address: "789 Colleague Court, Pune, MH, India",
      icon: <FiMapPin size={20} />,
    },
  ];

  const topics = [
    "General Inquiry",
    "Administrative Services",
    "Application Support",
    "NOC Application and DPR Planning",
    "RERA Registration Services",
    "Legal Support",
    "Property Asset Management",
    "Building Consultancy",
    "Project Management",
    "Technical Due Diligence Surveys",
    "Planned Preventative Maintenance Surveys",
    "Cost Consultancy",
    "Reinstatement Cost Assessments",
    "Landlord Representation",
    "Tenant Representation Serviced Offices",
    "Development Consultancy",
    "Lease Advisory",
    "Retail Advice",
    "Leasing",
    "Tenant Representation",
    "Commercial Services",
    "Investment Sales and Acquisitions",
    "Project Sales and Leasing",
    "Office Advice",
  ];

  // --- HANDLERS ---
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setIsSubmitted(true);
    setFormData(initialFormState);
    setTimeout(() => setIsSubmitted(false), 5000); // Hide success message after 5s
  };

  // --- RENDER ---
  return (
    <>
      <div className="bg-white font-sans text-slate-800">
        {/* Gradient Header */}
        <section className="bg-gradient-to-br from-[#002147] to-[#003366] text-white text-center py-24 px-5">
          <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl mt-4 max-w-2xl mx-auto opacity-90">
            We'd love to hear from you. Reach out through any channel below.
          </p>
        </section>

        {/* Main Content Area */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left Column: Contact Details */}
            <div className="space-y-10">
              <h3 className="text-3xl font-bold text-[#002147]">Our Offices</h3>
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-5">
                  <div className="text-white bg-[#002147] rounded-full p-3 mt-1 shadow-md">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800">
                      {info.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {info.address}
                    </p>
                  </div>
                </div>
              ))}
              <div className="flex items-start space-x-5">
                <div className="text-white bg-[#002147] rounded-full p-3 mt-1 shadow-md">
                  <FiPhone size={20} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800">Phone</h4>
                  <p className="text-gray-600">+91 95452 27252</p>
                </div>
              </div>
              <div className="flex items-start space-x-5">
                <div className="text-white bg-[#002147] rounded-full p-3 mt-1 shadow-md">
                  <FiMail size={20} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800">Email</h4>
                  <p className="text-gray-600">contact@dhd.com</p>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-100">
              <h3 className="text-3xl font-bold text-[#002147] mb-8">
                Send us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name*"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#003366] focus:border-transparent transition"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name*"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#003366] focus:border-transparent transition"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email address*"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#003366] focus:border-transparent transition"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone No.*"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#003366] focus:border-transparent transition"
                />
                <select
                  name="topic"
                  value={formData.topic}
                  onChange={handleChange}
                  className="p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#003366] focus:border-transparent transition bg-white"
                >
                  {topics.map((topic, idx) => (
                    <option key={idx} value={topic}>
                      {topic}
                    </option>
                  ))}
                </select>
                <textarea
                  name="message"
                  placeholder="Clearly describe your question*"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#003366] focus:border-transparent transition resize-y min-h-[120px]"
                />

                {isSubmitted && (
                  <div className="text-green-600 font-medium p-3 bg-green-50 rounded-md">
                    Thank you! Your message has been sent successfully.
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-[#002147] hover:bg-[#003366] text-white font-bold py-4 px-6 rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Helpline Section */}
        <section className="bg-slate-50">
          <div className="container mx-auto flex flex-col md:flex-row justify-around items-center gap-10 text-center px-5 py-20">
            <div className="max-w-md">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-[#002147]">
                Corporate Solutions{" "}
                <span className="block bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
                  Helpline
                </span>
              </h2>
              <p className="text-3xl font-extrabold text-[#003366] my-2">
                (+91) 95452 27252
              </p>
              <small className="text-sm text-slate-500">
                (Standard Calling Rates Apply)
              </small>
              <p className="mt-4 text-slate-600">
                Please contact our branches in India for further details
                regarding your solutions.
              </p>
            </div>
            <div>
              <img
                src="https://www.iresworld.com/assets/images/img15.png"
                alt="Support Woman"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/250x250/EFEFEF/AAAAAA?text=Support";
                }}
                className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full shadow-2xl border-4 border-white"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactUs;
