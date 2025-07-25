import PageHeader from '../components/PageHeader';
import { customerGuideData } from '../data/customerGuideData';
import { motion } from 'framer-motion';

const CustomerGuide = () => {
    const { complaintGuide, nriGuide } = customerGuideData;

    return (
        <div>
            <PageHeader title="Customer & Investor Guides" subtitle="Clear, transparent information for our clients and partners." />
            <div className="container mx-auto px-6 py-16 space-y-20">
                {/* Complaint Guide */}
                <section>
                    <h2 className="text-3xl font-bold text-oxford-blue text-center mb-4">{complaintGuide.title}</h2>
                    <p className="text-lg text-medium-gray text-center max-w-3xl mx-auto mb-12">{complaintGuide.intro}</p>
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        {complaintGuide.tiers.map((tier, i) => (
                             <motion.div 
                                key={i} 
                                className="bg-white p-8 rounded-lg shadow-lg"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: i * 0.2 }}
                                viewport={{ once: true }}
                            >
                                <div className="text-4xl font-extrabold text-action-red mb-4">{tier.name.split(':')[0]}</div>
                                <h3 className="text-xl font-semibold text-dark-charcoal mb-2">{tier.name.split(':')[1]}</h3>
                                <p className="text-medium-gray">{tier.content}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* NRI Guide */}
                <section className="bg-white p-12 rounded-lg shadow-xl">
                    <h2 className="text-3xl font-bold text-oxford-blue mb-4">{nriGuide.title}</h2>
                    <p className="text-lg text-medium-gray mb-8">{nriGuide.intro}</p>
                    <div className="space-y-6">
                        {nriGuide.sections.map((section, i) => (
                            <div key={i} className="border-l-4 border-oxford-blue pl-4">
                                <h4 className="text-xl font-semibold text-dark-charcoal">{section.name}</h4>
                                <p className="text-medium-gray mt-1">{section.content}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default CustomerGuide;