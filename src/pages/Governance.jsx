import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { governanceData } from '../data/governanceData'; // Assumes governanceData is in this file
import { motion, AnimatePresence } from 'framer-motion';

// A reusable component for section titles
const ContentSection = ({ title, children }) => (
    <div className="mb-8">
        <h3 className="text-2xl font-bold text-oxford-blue mb-4 border-b-2 border-custom-silver pb-2">{title}</h3>
        <div className="space-y-4 text-medium-gray leading-relaxed">{children}</div>
    </div>
);

// --- NEW Content Components to Match Your Data ---

const CorporateGovernanceContent = ({ data }) => (
    <ContentSection title={data.title}>
        {data.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
        ))}
    </ContentSection>
);

const BoardCommitteesContent = ({ data }) => (
    <ContentSection title={data.title}>
        <div className="space-y-6">
            {data.content.map((committee, i) => (
                <div key={i} className="p-4 bg-light-gray rounded-md">
                    <h4 className="font-bold text-dark-charcoal">{committee.name}</h4>
                    <p>{committee.description}</p>
                </div>
            ))}
        </div>
    </ContentSection>
);

const PoliciesContent = ({ data }) => (
    <ContentSection title={data.title}>
        <div className="grid md:grid-cols-2 gap-6">
            {data.content.map((policy, i) => (
                <div key={i} className="border-l-4 border-action-red pl-4">
                    <h4 className="font-bold text-dark-charcoal">{policy.name}</h4>
                    <p>{policy.description}</p>
                </div>
            ))}
        </div>
    </ContentSection>
);

const ComplianceContent = ({ data }) => (
    <ContentSection title={data.title}>
         {data.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
        ))}
    </ContentSection>
);


// --- Main Governance Component (Updated) ---

const Governance = () => {
    // UPDATED: Tabs now match the keys in your new governanceData object
    const tabs = [
        'Corporate Governance',
        'Board Committees',
        'Key Policies',
        'Regulatory Compliance'
    ];
    const [activeTab, setActiveTab] = useState(tabs[0]);

    // UPDATED: This function now renders the new components with the correct data
    const renderContent = () => {
        switch(activeTab) {
            case 'Corporate Governance':
                return <CorporateGovernanceContent data={governanceData.corporateGovernance} />;
            case 'Board Committees':
                return <BoardCommitteesContent data={governanceData.boardCommittees} />;
            case 'Key Policies':
                return <PoliciesContent data={governanceData.policies} />;
            case 'Regulatory Compliance':
                return <ComplianceContent data={governanceData.compliance} />;
            default:
                return null;
        }
    };

    return (
        <div>
            <PageHeader title={governanceData.header.title} subtitle={governanceData.header.subtitle} />

            <div className="container mx-auto px-6 py-16">
                {/* Tab Navigation (No structural changes needed here) */}
                <div className="border-b border-custom-silver mb-8">
                    <nav className="flex flex-wrap -mb-px">
                        {tabs.map(tab => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`whitespace-nowrap py-4 px-6 text-sm font-medium border-b-2 transition-colors duration-300
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
                        className="bg-white p-8 rounded-lg shadow-md"
                    >
                        {renderContent()}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Governance;