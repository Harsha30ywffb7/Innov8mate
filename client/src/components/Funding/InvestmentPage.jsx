import React from 'react';

const InvestmentPage = ({ companyData }) => {
    return (
        <div className="container mx-auto py-8">
            <div className="max-w-3xl mx-auto">
                <div className="grid grid-cols-2 gap-4">
                    <h1 className="text-3xl font-bold mb-4">{companyData.companyName}</h1>
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Founder</h2>
                        <p className="text-gray-700">{companyData.founderName}</p>
                        <a className="text-gray-500" href={companyData.founderLinks}>Click More for Founders</a>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Location</h2>
                        <p className="text-gray-700">{companyData.location}</p>
                    </div>
                </div>
                <p className="text-gray-700 mb-6">{companyData.companyDescription}</p>
                <div className="mt-6">
                    <h2 className="text-xl font-semibold mb-2">Sector</h2>
                    <p className="text-gray-700">{companyData.sector}</p>
                </div>
                <div className="mt-6">
                    <h2 className="text-xl font-semibold mb-2">Company website</h2>
                    <p className="text-gray-700">{companyData.otherLinks}</p>
                </div>
                <div className="mt-6">
                    <h2 className="text-xl font-semibold mb-2">Social Media Links</h2>
                    <a href={companyData.socialMediaLinks} target='_blank' className="text-gray-700">Company social links</a>
                </div>
                <div className="mt-6">
                    <h2 className="text-xl font-semibold mb-2">Shares Dilute</h2>
                    <p className="text-gray-700">{companyData.sharesDilute}</p>
                </div>
                <div className="mt-6">
                    <h2 className="text-xl font-semibold mb-2">Funds needed</h2>
                    <p className="text-gray-700">{companyData.fundsNeeded}</p>
                </div>
                <div className="mt-6">
                    <button className="px-6 py-3 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600"> Invest in {companyData.companyName} </button>
                </div>
            </div>
        </div>
    );
};

const CompanyInvestPage = () => {
    const appleCompanyData = {
        companyName: 'Apple Inc.',
        founderName: 'Steve Jobs',
        founderLinks: 'https://en.wikipedia.org/wiki/History_of_Apple_Inc.',
        companyDescription: '...',
        location: 'Cupertino, California, United States',
        sector: 'Technology',
        socialMediaLinks: 'https://www.linkedin.com/company/apple/',
        otherLinks: 'https://www.apple.com/',
        sharesDilute: '0%',
        fundsNeeded: '1000000'
    };
    return <InvestmentPage companyData={appleCompanyData} />;
};

export default CompanyInvestPage;
