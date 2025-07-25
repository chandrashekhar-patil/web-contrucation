import PageHeader from '../components/PageHeader';
import { careersData } from '../data/careersData';
import { FiBriefcase, FiTool, FiAward, FiClipboard, FiBookOpen, FiCheck } from 'react-icons/fi';
import { motion } from 'framer-motion';

const iconMap = { FiBriefcase, FiTool, FiAward, FiClipboard, FiBookOpen };

const Careers = () => {
    const { header, opportunities, benefits, lookingFor } = careersData;

    return (
        <div>
            <PageHeader title={header.title} subtitle={header.subtitle} />
            <div className="container mx-auto px-6 py-16 space-y-20">
                {/* Opportunities */}
                <section>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {opportunities.map((opp, i) => {
                            const Icon = iconMap[opp.icon];
                            return (
                                <motion.div 
                                    key={i} 
                                    className="bg-white p-8 rounded-lg shadow-lg text-center"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="flex justify-center mb-4">
                                        <div className="bg-action-red text-white p-4 rounded-full">
                                            <Icon size={32} />
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-oxford-blue mb-2">{opp.name}</h3>
                                    <p className="text-medium-gray">{opp.description}</p>
                                </motion.div>
                            )
                        })}
                    </div>
                </section>
                {/* Benefits */}
                <section className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <h2 className="text-3xl font-bold text-oxford-blue mb-6">{benefits.title}</h2>
                        <ul className="space-y-3">
                            {benefits.items.map((item, i) => (
                                <li key={i} className="flex items-center text-lg text-dark-charcoal">
                                    <FiCheck className="text-action-red mr-3 h-5 w-5"/>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="order-1 md:order-2">
                         <img src="/src/assets/images/placeholder.jpg" alt="Team collaborating" className="rounded-lg shadow-xl"/>
                    </div>
                </section>

                 {/* CTA */}
                 <section className="bg-oxford-blue text-white text-center p-12 rounded-lg">
                    <h2 className="text-3xl font-bold mb-4">{lookingFor.title}</h2>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">{lookingFor.description}</p>
                    <a href="#" className="bg-action-red hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 text-lg">
                        View Open Positions
                    </a>
                 </section>
            </div>
        </div>
    );
};

export default Careers;