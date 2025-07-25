import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { governanceData } from '../data/governanceData'; // This file will be created next
import { motion, AnimatePresence } from 'framer-motion';

// A reusable component for sections with a title and content
const ContentSection = ({ title, children }) => (
    <div className="mb-8">
        <h3 className="text-xl font-bold text-oxford-blue mb-3 border-b border-custom-silver pb-2">{title}</h3>
        <div className="space-y-4 text-medium-gray leading-relaxed">{children}</div>
    </div>
);

// Component to render the main Corporate Governance content
const CorporateGovernanceContent = ({ data }) => (
    <>
        <p className="mb-6 text-lg leading-relaxed">{data.intro}</p>
        <p className="mb-8 leading-relaxed">{data.boardDiversity}</p>
        <ContentSection title="Summary of the Chairman's role">
            <ul className="list-disc list-inside space-y-2">
                {data.chairmanRole.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
        </ContentSection>
        <ContentSection title="Summary of the Chief Executive's role">
             <ul className="list-disc list-inside space-y-2">
                {data.ceoRole.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
        </ContentSection>
         <ContentSection title="Summary of the Senior Independent Director's role">
             <ul className="list-disc list-inside space-y-2">
                {data.sidRole.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
        </ContentSection>
        <ContentSection title="Our Committees">
            <p>{data.committees.intro}</p>
            <div className="flex flex-wrap gap-4 mt-4">
                {data.committees.list.map((committee, i) => (
                    <span key={i} className="bg-light-gray px-4 py-2 rounded-full text-dark-charcoal font-medium">{committee}</span>
                ))}
            </div>
        </ContentSection>
    </>
);

// Component for the Modern Slavery Statement
const ModernSlaveryContent = ({ data }) => (
    <>
        <p className="mb-6 text-sm italic">{data.statementDate}</p>
        <ContentSection title="Introduction">{data.introduction}</ContentSection>
        <ContentSection title="Organisation's Structure">{data.organisationStructure}</ContentSection>
        <ContentSection title="Our Business">{data.ourBusiness}</ContentSection>
        <ContentSection title="Supply Chain Risk">
            <p>{data.supplyChainRisk.intro}</p>
            <ul className="list-disc list-inside pl-4 space-y-1">
                {data.supplyChainRisk.risks.map((risk, i) => <li key={i}>{risk}</li>)}
            </ul>
        </ContentSection>
        <ContentSection title="Our Policies on Slavery and Human Trafficking">{data.ourPolicies}</ContentSection>
         <ContentSection title="Further Steps">
             <ul className="list-disc list-inside space-y-2">
                {data.furtherSteps.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
        </ContentSection>
    </>
);

// Component for the Supervisor Board Charter
const SupervisorBoardContent = ({ data }) => (
    <>
        <p className="mb-8 leading-relaxed">{data.intro}</p>
        <h3 className="text-xl font-bold text-oxford-blue mb-4">Task Description of the Risk Committee (RiCo)</h3>
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-custom-silver">
                <thead className="bg-oxford-blue text-white">
                    <tr>
                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Task</th>
                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Description</th>
                    </tr>
                </thead>
                <tbody className="text-dark-charcoal">
                    {data.tasks.map((task, index) => (
                        <tr key={index} className="border-b border-custom-silver hover:bg-light-gray">
                            <td className="py-3 px-4 font-semibold align-top">{task.task}</td>
                            <td className="py-3 px-4 leading-relaxed">{task.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </>
);

const Governance = () => {
    const tabs = [
        'Corporate Governance',
        'Modern Slavery Statement',
        'Supervisor Board',
    ];
    // Add 'Our Auditors', 'Risk Department', etc. as you create their data
    const [activeTab, setActiveTab] = useState(tabs[0]);

    const renderContent = () => {
        switch(activeTab) {
            case 'Corporate Governance':
                return <CorporateGovernanceContent data={governanceData.corporateGovernance} />;
            case 'Modern Slavery Statement':
                return <ModernSlaveryContent data={governanceData.modernSlavery} />;
            case 'Supervisor Board':
                return <SupervisorBoardContent data={governanceData.supervisorBoard} />;
            default:
                return null;
        }
    };

    return (
        <div>
            <PageHeader title="Governance" subtitle="Our commitment to robust corporate governance, ethical practices, and transparency." />

            <div className="container mx-auto px-6 py-16">
                {/* Tab Navigation */}
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