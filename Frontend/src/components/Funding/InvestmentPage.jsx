/*
Needs a form that takes input from user details.
*/
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
            <h2 className="text-xl font-semibold mb-2">Location
           
            </h2>
            <p className="text-gray-700">{companyData.location}</p>
          </div>
        </div>

       
        <p className="text-gray-700 mb-6">{companyData.companyDescription}</p>

        

        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Sector</h2>
          <p className="text-gray-700">{companyData.sector} </p>
        </div>

       

        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Company website</h2>
          <p className="text-gray-700">{companyData.otherLinks}</p>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Social Media Links</h2>
          <p className="text-gray-700">{companyData.socialMediaLinks}</p>
        </div>


        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Shares Dilute</h2>
          <p className="text-gray-700">{companyData.sharesDilute}</p>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Fundes needed</h2>
          <p className="text-gray-700">{companyData.sharesDilute}</p>
        </div>

        <div className="mt-6">
          <button className="px-6 py-3 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600">
            Invest in {companyData.companyName}
          </button>
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
    companyDescription:
      'Apple Inc. is an American multinational technology company that designs, develops, and sells consumer electronics, computer software, and online services.Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias excepturi atque tempora doloremque, pariatur quae debitis exercitationem doloribus, quibusdam blanditiis enim quod suscipit quia qui aperiam quasi sunt voluptatem similique laborum. Provident quidem rem id cum error, officia quaerat ea iure? Atque esse deleniti delectus, magnam voluptas incidunt? Placeat ab at dolor et amet possimus, aliquid, ipsam neque suscipit molestiae, voluptatibus nobis recusandae expedita! Nobis suscipit odit totam beatae consectetur necessitatibus dolore est voluptates excepturi dolorem ab quibusdam aperiam, minus inventore sequi, asperiores vitae praesentium illo. Nobis, enim, nesciunt libero quidem voluptates doloribus accusantium deleniti exercitationem ipsum commodi necessitatibus nisi.',
    location: 'Cupertino, California, United States',
    sector: 'Technology',
    socialMediaLinks: 'https://www.linkedin.com/company/apple/',
    otherLinks: 'https://www.apple.com/',
    sharesDilute: '0%', // Assuming Apple doesn't dilute shares for investment,
    fundsNeeded:"1000000"
  };

  return <InvestmentPage companyData={appleCompanyData} />;
};

export default CompanyInvestPage;
