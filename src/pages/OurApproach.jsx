import PageHeader from '../components/PageHeader';
import { ourApproachData } from '../data/ourApproachData';
import { motion } from 'framer-motion';

const Section = ({ title, content, children }) => (
    <motion.section 
        className="py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
    >
        <h2 className="text-3xl font-bold text-oxford-blue mb-4">{title}</h2>
        <div className="text-lg text-medium-gray space-y-4 leading-relaxed">
            {content && <p>{content}</p>}
            {children}
        </div>
    </motion.section>
);

const OurApproach = () => {
    const { header, intro, covidResponse, modernMethods, bim, supplyChain, sustainability } = ourApproachData;

    return (
        <div>
            <PageHeader title={header.title} subtitle={header.subtitle} />
            <div className="container mx-auto px-6 divide-y divide-gray-200">
                <Section title={intro.title}>
                    <p>{intro.content}</p>
                </Section>
                <Section title={covidResponse.title} content={covidResponse.content} />
                <Section title={modernMethods.title} content={modernMethods.content} />
                <Section title={bim.title} content={bim.content} />
                <Section title={supplyChain.title} content={supplyChain.content} />
                <Section title={sustainability.title}>
                    <p className="text-xl italic text-action-red">{sustainability.tagline}</p>
                    <p>{sustainability.content}</p>
                </Section>
            </div>
        </div>
    );
};

export default OurApproach;