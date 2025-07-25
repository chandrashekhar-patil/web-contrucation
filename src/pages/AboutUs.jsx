import PageHeader from '../components/PageHeader';
import { aboutUsData } from '../data/aboutUsData';
import { motion } from 'framer-motion';

const AboutUs = () => {
    const { history, visionMission, policies } = aboutUsData;
    // Add other data sections here as you populate aboutUsData.js

  return (
    <div>
      <PageHeader title="About DHD Group" subtitle="Our journey, values, and commitment to excellence." />
      
      <div className="container mx-auto px-6 py-16 space-y-16">
        {/* History Section */}
        <motion.section 
          id={history.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold text-oxford-blue mb-4">{history.title}</h2>
            <p className="text-lg text-medium-gray leading-relaxed">{history.content}</p>
          </div>
          <div className="order-1 md:order-2">
            <img src="/src/assets/images/placeholder.jpg" alt="Our History" className="rounded-lg shadow-xl" />
          </div>
        </motion.section>

        {/* Vision & Mission */}
        <section id={visionMission.id} className="bg-white p-12 rounded-lg shadow-lg">
            <div className="grid md:grid-cols-2 gap-12">
                <div>
                    <h3 className="text-2xl font-bold text-oxford-blue mb-3">{visionMission.vision.title}</h3>
                    <p className="text-lg text-medium-gray">{visionMission.vision.content}</p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-oxford-blue mb-3">{visionMission.mission.title}</h3>
                    <ul className="space-y-2 list-disc list-inside text-lg text-medium-gray">
                        {visionMission.mission.points.map((point, i) => <li key={i}>{point}</li>)}
                    </ul>
                </div>
            </div>
        </section>

        {/* Policies Section */}
        <section id={policies.id}>
            <h2 className="text-3xl font-bold text-oxford-blue text-center mb-10">{policies.title}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {policies.items.map((item, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white p-6 rounded-lg shadow-md border-l-4 border-oxford-blue"
                    >
                        <h4 className="text-xl font-semibold text-dark-charcoal mb-2">{item.title}</h4>
                        <p className="text-medium-gray">{item.content}</p>
                    </motion.div>
                ))}
            </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;