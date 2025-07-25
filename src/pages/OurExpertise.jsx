import PageHeader from '../components/PageHeader';
import { ourExpertiseData } from '../data/ourExpertiseData';
import { FiCheckCircle } from 'react-icons/fi';
import { motion } from 'framer-motion';

const OurExpertise = () => {
  // FIX 1: Changed 'coreSectors' to 'generalExpertise' to match the data object
  const { header, horticulture, generalExpertise, sustainabilityDesign } = ourExpertiseData;

  return (
    <div>
      <PageHeader title={header.title} subtitle={header.subtitle} />
      <div className="container mx-auto px-6 py-16 space-y-20">
        
        {/* Horticulture Section (No changes needed here) */}
        <section>
            <div className="text-center">
                <h2 className="text-3xl font-bold text-oxford-blue">{horticulture.title}</h2>
                <p className="mt-2 text-xl text-action-red font-semibold">{horticulture.tagline}</p>
                <p className="mt-4 text-lg text-medium-gray max-w-3xl mx-auto">{horticulture.intro}</p>
            </div>
            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {horticulture.services.map((service, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
                    >
                        <h3 className="text-xl font-semibold text-oxford-blue mb-2">{service.title}</h3>
                        <p className="text-medium-gray">{service.content}</p>
                    </motion.div>
                ))}
            </div>
        </section>

        {/* Core Sectors (Updated to use 'generalExpertise') */}
        <section>
             <div className="text-center">
                <h2 className="text-3xl font-bold text-oxford-blue mb-10">{generalExpertise.title}</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-10">
                {generalExpertise.items.map((item, i) => (
                     <div key={i} className="flex items-start space-x-4">
                        <FiCheckCircle className="text-action-red h-6 w-6 mt-1 flex-shrink-0"/>
                        <div>
                            <h3 className="text-xl font-bold text-dark-charcoal">{item.title}</h3>
                            <p className="text-medium-gray mt-1">{item.content}</p>
                        </div>
                     </div>
                ))}
            </div>
        </section>

        {/* FIX 2: Sustainability Design (Updated to display 'tagline' and 'content' instead of mapping 'points') */}
        <section className="bg-oxford-blue text-white p-12 rounded-lg">
            <h2 className="text-3xl font-bold text-center">{sustainabilityDesign.title}</h2>
            <p className="text-lg text-center mt-4 text-gray-300 max-w-4xl mx-auto">{sustainabilityDesign.intro}</p>
            <div className="mt-8 text-center">
                <p className="font-semibold text-xl italic mb-2">{sustainabilityDesign.tagline}</p>
                <p className="text-gray-300 max-w-3xl mx-auto">{sustainabilityDesign.content}</p>
            </div>
        </section>

      </div>
    </div>
  );
};

export default OurExpertise;