import React from 'react';
import useCompanies from '../../Utils/hooks/useCompaniesList';
import { useParams } from 'react-router-dom';

const InvestmentPage = ({ companyData }) => {
    console.log(companyData)
    if (!companyData) return null

    const { companyLinks, companyName, description, founder, location, sector, sharesDiluted } = companyData

    return (
        <div className="container mx-auto py-8">
            <div className="max-w-3xl mx-auto shadow-lg p-5 ">
                <div className="grid grid-cols-2 gap-4">
                    <h1 className="text-3xl font-bold mb-4">{companyName}</h1>
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Founder</h2>
                        <p className="text-gray-700">{founder?.name}</p>
                        <a className="text-gray-500" href={founder?.profileLink} target='_blank'>Click More for Founders</a>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Location</h2>
                        <p className="text-gray-700">{location}</p>
                    </div>
                </div>
                <div>
                    <h2 className="text-xl font-semibold mb-2">Description</h2>
                    <p className="text-gray-700 mb-6">{description}</p>
                </div>
                <div className="mt-6">
                    <h2 className="text-xl font-semibold mb-2">Sector</h2>
                    <p className="text-gray-700">{sector}</p>
                </div>
                <div className="mt-6">
                    <h2 className="text-xl font-semibold mb-2">Company website</h2>
                    <a className="text-gray-700" href={companyLinks?.website} target='_blank'>Click visit company webiste</a>
                </div>
                <div className="mt-6">
                    <h2 className="text-xl font-semibold mb-2">Social Media Links</h2>
                    <a href={companyLinks?.socialMediaLink} target='_blank' className="text-gray-700 cursor-pointer">Company social links</a>
                </div>
                <div className="mt-6">
                    <h2 className="text-xl font-semibold mb-2">Shares Dilute</h2>
                    <p className="text-gray-700">{sharesDiluted}</p>
                </div>
                <div className="mt-6">
                    <h2 className="text-xl font-semibold mb-2">Funds needed</h2>
                    <p className="text-gray-700">{100000}</p>
                </div>
                <div className="mt-6">
                    <button className="px-6 py-3 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600"> Invest in {companyData.companyName} </button>
                </div>
            </div>
        </div>
    );
};

const CompanyInvestPage = () => {
    const allcompanies = useCompanies();
    const { id } = useParams()
    const company = allcompanies.find(c => c._id == id)
    console.log(company)

    return <InvestmentPage companyData={company} />;
};

export default CompanyInvestPage;
