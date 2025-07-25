import Hero from "../components/Hero";
import { homeData } from "../data/homeData";
import { Link } from "react-router-dom";
import { FaBuilding } from "react-icons/fa";
import { FiHardDrive, FiFeather } from "react-icons/fi";
import { motion } from "framer-motion";

const iconMap = {
  FaBuilding,
  FiHardDrive,
  FiFeather,
};

const Home = () => {
  const { hero, aboutSummary, expertiseHighlights } = homeData;

  return (
    <div className="bg-light-gray">
      <Hero
        title={hero.title}
        subtitle={hero.subtitle}
        ctaText={hero.ctaText}
        ctaLink={hero.ctaLink}
        imageUrl={hero.imageUrl}
      />

      {/* About Us Summary */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-oxford-blue mb-4"
          >
            {aboutSummary.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-medium-gray max-w-3xl mx-auto mb-8"
          >
            {aboutSummary.content}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              to={aboutSummary.ctaLink}
              className="text-action-red font-semibold hover:underline"
            >
              {aboutSummary.ctaText} &rarr;
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Expertise Highlights */}
      <section className="py-20 bg-light-gray">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-oxford-blue text-center mb-12">
            {expertiseHighlights.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expertiseHighlights.items.map((item, index) => {
              const IconComponent = iconMap[item.icon];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-white p-8 rounded-lg shadow-lg text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="bg-oxford-blue text-white rounded-full p-4">
                      {IconComponent && <IconComponent size={32} />}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-oxford-blue mb-2">
                    {item.title}
                  </h3>
                  <p className="text-medium-gray">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-oxford-blue py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to build the future?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Let's discuss how we can bring your vision to life.
          </p>
          <Link
            to="/contact-us"
            className="bg-action-red hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 text-lg"
          >
            Become a Partner
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
