import PageHeader from '../components/PageHeader';
import { investorData } from '../data/investorData';
import { FiCheck } from 'react-icons/fi';

const Investors = () => {
    const { landAcquisition, constructionPartnerships, strategicAlliances, apGroup } = investorData;

    return (
        <div>
            <PageHeader title="Investors & Partners" subtitle="Forging powerful alliances to build a better future." />
            <div className="container mx-auto px-6 py-16 space-y-16">
                {/* Land Acquisition */}
                <section className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-oxford-blue mb-4">{landAcquisition.title}</h2>
                        <p className="text-lg text-medium-gray mb-6">{landAcquisition.intro}</p>
                        <div className="space-y-4">
                            {landAcquisition.structures.map((s, i) => (
                                <div key={i}>
                                    <h4 className="font-semibold text-dark-charcoal">{s.name}</h4>
                                    <p className="text-medium-gray">{s.description}</p>
                                </div>
                            ))}
                        </div>
                        <p className="mt-6 bg-light-gray p-4 rounded-md text-sm text-dark-charcoal">{landAcquisition.proposalInfo}</p>
                    </div>
                    <div>
                        <img src="/src/assets/images/placeholder.jpg" alt="Land development plot" className="rounded-lg shadow-xl"/>
                    </div>
                </section>
                
                {/* Partnership Sections */}
                <section className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold text-oxford-blue mb-4">{constructionPartnerships.title}</h3>
                        <p className="text-medium-gray mb-4">{constructionPartnerships.intro}</p>
                        <ul className="space-y-2">
                           {constructionPartnerships.strengths.map((s, i) => <li key={i} className="flex"><FiCheck className="text-action-red mr-2 mt-1"/>{s}</li>)}
                        </ul>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold text-oxford-blue mb-4">{strategicAlliances.title}</h3>
                        <p className="text-medium-gray">{strategicAlliances.intro}</p>
                    </div>
                </section>
                
                {/* AP Group */}
                <section className="bg-oxford-blue text-white p-12 rounded-lg">
                    <h2 className="text-3xl font-bold text-center mb-4">{apGroup.title}</h2>
                    <p className="text-lg text-center text-gray-300 max-w-3xl mx-auto mb-8">{apGroup.intro}</p>
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        {apGroup.impact.map((fact, i) => (
                            <div key={i} className="bg-white/20 p-4 rounded-md">
                                <p className="font-bold text-xl">{fact.split(' ')[0]}</p>
                                <p className="text-gray-200">{fact.substring(fact.indexOf(' ') + 1)}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Investors;