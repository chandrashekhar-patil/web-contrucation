import PageHeader from '../components/PageHeader';
import { sectorsData } from '../data/sectorsData';
import { motion } from 'framer-motion';

const Sectors = () => {
    const { header, sectors } = sectorsData;
    return (
        <div>
            <PageHeader title={header.title} subtitle={header.subtitle} />
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sectors.map((sector, index) => (
                        <motion.div 
                            key={index}
                            className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            viewport={{ once: true }}
                        >
                            <div className="p-6 flex-grow">
                                <h3 className="text-2xl font-bold text-oxford-blue mb-3">{sector.name}</h3>
                                <p className="text-medium-gray leading-relaxed">{sector.description}</p>
                            </div>
                            <div className="bg-light-gray p-4">
                                <a href="#" className="font-semibold text-action-red hover:underline">Learn More &rarr;</a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sectors;