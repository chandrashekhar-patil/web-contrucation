import React from "react";
import { aboutUsData } from "../data/aboutUsData"; // Adjust path if necessary

const AboutUs = () => {
  const data = aboutUsData;

  return (
    <>
      <div className="bg-gray-50 min-h-screen mt-20">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">{data.header}</h1>
          </div>
        </header>

        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* Our History */}
          <section
            id={data.history.id}
            className="bg-white shadow rounded-lg mb-8 overflow-hidden"
          >
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img
                  className="h-full w-full object-cover md:w-48"
                  src={data.history.imgSrc}
                  alt={data.history.alt}
                />
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {data.history.title}
                </h2>
                {data.history.content.map((p, i) => (
                  <p key={i} className={`text-gray-600 ${i > 0 ? "mt-4" : ""}`}>
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </section>

          {/* Our Vision */}
          <section
            id={data.vision.id}
            className="bg-white shadow rounded-lg mb-8 p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {data.vision.title}
            </h2>
            <p className="text-gray-600">{data.vision.content}</p>
          </section>

          {/* Our Mission */}
          <section
            id={data.mission.id}
            className="bg-white shadow rounded-lg mb-8 p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {data.mission.title}
            </h2>
            <ul className="space-y-3 text-gray-600">
              {data.mission.points.map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Who We Are */}
          <section
            id={data.whoWeAre.id}
            className="bg-white shadow rounded-lg mb-8 overflow-hidden"
          >
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img
                  className="h-full w-full object-cover md:w-48"
                  src={data.whoWeAre.imgSrc}
                  alt={data.whoWeAre.alt}
                />
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {data.whoWeAre.title}
                </h2>
                {data.whoWeAre.content.map((p, i) => (
                  <p key={i} className={`text-gray-600 ${i > 0 ? "mt-4" : ""}`}>
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </section>

          {/* What We Do */}
          <section
            id={data.whatWeDo.id}
            className="bg-white shadow rounded-lg mb-8 overflow-hidden"
          >
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img
                  className="h-full w-full object-cover md:w-48"
                  src={data.whatWeDo.imgSrc}
                  alt={data.whatWeDo.alt}
                />
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {data.whatWeDo.title}
                </h2>
                {data.whatWeDo.content.map((p, i) => (
                  <p key={i} className={`text-gray-600 ${i > 0 ? "mt-4" : ""}`}>
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </section>

          {/* Our Purpose */}
          <section
            id={data.purpose.id}
            className="bg-white shadow rounded-lg mb-8 overflow-hidden"
          >
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img
                  className="h-full w-full object-cover md:w-48"
                  src={data.purpose.imgSrc}
                  alt={data.purpose.alt}
                />
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {data.purpose.title}
                </h2>
                {data.purpose.content.map((p, i) => (
                  <p key={i} className={`text-gray-600 ${i > 0 ? "mt-4" : ""}`}>
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </section>

          {/* Sustainability */}
          <section
            id={data.sustainability.id}
            className="bg-white shadow rounded-lg mb-8 overflow-hidden"
          >
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img
                  className="h-full w-full object-cover md:w-48"
                  src={data.sustainability.imgSrc}
                  alt={data.sustainability.alt}
                />
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {data.sustainability.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {data.sustainability.intro}
                </p>
                <ul className="space-y-3 text-gray-600">
                  {data.sustainability.points.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Social Impact */}
          <section
            id={data.socialImpact.id}
            className="bg-white shadow rounded-lg mb-8 overflow-hidden"
          >
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img
                  className="h-full w-full object-cover md:w-48"
                  src={data.socialImpact.imgSrc}
                  alt={data.socialImpact.alt}
                />
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {data.socialImpact.title}
                </h2>
                {data.socialImpact.content.map((p, i) => (
                  <p key={i} className={`text-gray-600 ${i > 0 ? "mt-4" : ""}`}>
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </section>

          {/* Physical Impact */}
          <section
            id={data.physicalImpact.id}
            className="bg-white shadow rounded-lg mb-8 overflow-hidden"
          >
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img
                  className="h-full w-full object-cover md:w-48"
                  src={data.physicalImpact.imgSrc}
                  alt={data.physicalImpact.alt}
                />
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {data.physicalImpact.title}
                </h2>
                {data.physicalImpact.content.map((p, i) => (
                  <p key={i} className={`text-gray-600 ${i > 0 ? "mt-4" : ""}`}>
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </section>

          {/* Our Policies */}
          <section
            id={data.policies.id}
            className="bg-white shadow rounded-lg mb-8 p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {data.policies.title}
            </h2>
            {data.policies.items.map((policy, index) => (
              <div
                key={index}
                className={index < data.policies.items.length - 1 ? "mb-8" : ""}
              >
                <div className="flex items-center mb-4">
                  <img
                    className="h-12 w-12 rounded-full mr-4"
                    src={policy.imgSrc}
                    alt={policy.alt}
                  />
                  <h3 className="text-xl font-semibold text-gray-900">
                    {policy.title}
                  </h3>
                </div>
                <div className="pl-16">
                  {policy.intro && (
                    <p className="text-gray-600 mb-4">{policy.intro}</p>
                  )}
                  {policy.points && (
                    <ul className="space-y-2 text-gray-600 pl-16">
                      {policy.points.map((point, pIndex) => (
                        <li key={pIndex} className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {policy.outro && (
                    <p className="text-gray-600 mt-4">{policy.outro}</p>
                  )}
                  {typeof policy.content === "string" && (
                    <p className="text-gray-600">{policy.content}</p>
                  )}
                  {Array.isArray(policy.content) &&
                    policy.content.map((para, pIndex) => (
                      <p
                        key={pIndex}
                        className={`text-gray-600 ${pIndex > 0 ? "mt-4" : ""}`}
                      >
                        {para}
                      </p>
                    ))}
                </div>
              </div>
            ))}
          </section>
        </main>
      </div>
    </>
  );
};

export default AboutUs;
