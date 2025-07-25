import PageHeader from '../components/PageHeader';
import { ourProjectsData } from '../data/ourProjectsData';
import { motion } from 'framer-motion';

const OurProjects = () => {
    const { header, newBuild, projectBrief, valueEngineering } = ourProjectsData;

    return (
        <div>
            <PageHeader title={header.title} subtitle={header.subtitle} />

            <div className="container mx-auto px-6 py-16">
                <div className="grid lg:grid-cols-5 gap-12">
                    
                    {/* Main Content */}
                    <div className="lg:col-span-3 space-y-12">
                        <motion.section
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                        >
                            <h2 className="text-3xl font-bold text-oxford-blue mb-4">{newBuild.title}</h2>
                            <p className="text-lg text-medium-gray leading-relaxed">{newBuild.content}</p>
                        </motion.section>
                        
                        <motion.section
                             initial={{ opacity: 0, x: -50 }}
                             animate={{ opacity: 1, x: 0 }}
                             transition={{ duration: 0.7, delay: 0.2 }}
                        >
                            <h2 className="text-3xl font-bold text-oxford-blue mb-4">{valueEngineering.title}</h2>
                            <p className="text-lg text-medium-gray leading-relaxed">{valueEngineering.content}</p>
                        </motion.section>
                    </div>

                    {/* Project Brief Card */}
                    <motion.div 
                        className="lg:col-span-2 bg-white p-8 rounded-lg shadow-xl self-start"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <h3 className="text-2xl font-bold text-action-red mb-6 border-b-2 border-action-red pb-3">{projectBrief.title}</h3>
                        <div className="space-y-4 text-dark-charcoal">
                            <p><strong className="font-semibold">Client:</strong> {projectBrief.client}</p>
                            <p><strong className="font-semibold">Location:</strong> {projectBrief.location}</p>
                            <p><strong className="font-semibold">Description:</strong> {projectBrief.description}</p>
                            <p><strong className="font-semibold">Total Area:</strong> {projectBrief.area}</p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default OurProjects;