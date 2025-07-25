import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { privacyData } from '../data/privacyData'; // Assuming you have created this data file
import { motion, AnimatePresence } from 'framer-motion';

// A reusable component for rendering sections within a policy
const PolicySection = ({ title, children, level = 'h3' }) => {
    const headingClasses = {
        h3: "text-xl font-bold text-oxford-blue mb-3 border-b border-custom-silver pb-2",
        h4: "text-lg font-semibold text-dark-charcoal mt-6 mb-2"
    };
    const HeadingTag = level;

    return (
        <div className="mb-6">
            <HeadingTag className={headingClasses[level]}>{title}</HeadingTag>
            <div className="space-y-3 text-medium-gray leading-relaxed">{children}</div>
        </div>
    );
};

// Content Component for the Data Management Policy Tab
const DataManagementPolicyContent = ({ data }) => (
    <>
        <p className="mb-6 text-sm italic">Effective Date: {data.effectiveDate}</p>
        <p className="mb-8">{data.policyStatement}</p>
        
        <PolicySection title="Guiding Principles">
            <ul className="list-disc list-inside space-y-2">
                {data.guidingPrinciples.map((principle, i) => <li key={i}>{principle}</li>)}
            </ul>
        </PolicySection>

        <PolicySection title="Data Administration">
            {Object.entries(data.dataAdministration).map(([key, value]) => (
                 <PolicySection key={key} title={value.title} level="h4">
                    <p>{value.content}</p>
                </PolicySection>
            ))}
        </PolicySection>

         <PolicySection title="Data Management Roles and Responsibilities">
            {Object.entries(data.rolesAndResponsibilities).map(([key, value]) => (
                 <PolicySection key={key} title={value.title} level="h4">
                    <p>{value.content}</p>
                </PolicySection>
            ))}
        </PolicySection>
    </>
);

// Content Component for the Responsible Use Policy Tab
const ResponsibleUsePolicyContent = ({ data }) => (
    <>
        <p className="mb-8">{data.intro}</p>

        <PolicySection title="Policy Requirements and Specifications">
            <p>{data.obligationIntro}</p>
            <ul className="list-disc list-inside space-y-2 font-medium text-dark-charcoal">
                {data.obligations.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
            <p className="mt-4">{data.obligationScope}</p>
        </PolicySection>
        
        <PolicySection title="Computer Security Specifications">
            {data.computerSecurity.map((section, i) => (
                <PolicySection key={i} title={section.title} level="h4">
                    <ul className="list-disc list-inside space-y-2">
                        {section.points.map((point, j) => <li key={j}>{point}</li>)}
                    </ul>
                </PolicySection>
            ))}
        </PolicySection>
         <PolicySection title="Data Security">
            {data.dataSecurity.map((section, i) => (
                <PolicySection key={i} title={section.title} level="h4">
                    <ul className="list-disc list-inside space-y-2">
                        {section.points.map((point, j) => <li key={j}>{point}</li>)}
                    </ul>
                </PolicySection>
            ))}
        </PolicySection>
    </>
);


const PrivacyAndSecurity = () => {
    const tabs = ['Data Management Policy', 'Responsible Use Policy'];
    const [activeTab, setActiveTab] = useState(tabs[0]);

    const renderContent = () => {
        switch(activeTab) {
            case 'Data Management Policy':
                return <DataManagementPolicyContent data={privacyData.dataManagementPolicy} />;
            case 'Responsible Use Policy':
                return <ResponsibleUsePolicyContent data={privacyData.responsibleUsePolicy} />;
            default:
                return null;
        }
    };

    return (
        <div>
            <PageHeader title="Privacy & Security" subtitle="Our policies for data management and the responsible use of our digital resources." />
            
            <div className="container mx-auto px-6 py-16">
                 {/* Tab Navigation */}
                <div className="border-b border-custom-silver mb-8">
                    <nav className="flex flex-wrap -mb-px">
                        {tabs.map(tab => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`whitespace-nowrap py-4 px-6 text-sm md:text-base font-medium border-b-2 transition-colors duration-300
                                    ${activeTab === tab 
                                        ? 'border-action-red text-action-red' 
                                        : 'border-transparent text-medium-gray hover:text-dark-charcoal'}`
                                }
                            >
                                {tab}
                            </button>
                        ))}
                    </nav>
                </div>

                {/* Tab Content */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white p-6 md:p-10 rounded-lg shadow-md"
                    >
                        {renderContent()}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default PrivacyAndSecurity;