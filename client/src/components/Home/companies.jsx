import React from 'react';
 // Import CSS file for styling

const logos = [
  "https://source.unsplash.com/400x400/?tesla",
  "https://source.unsplash.com/720x720/?google",
  "https://source.unsplash.com/400x400/?microsoft",
  "https://source.unsplash.com/400x400/?facebook",
  "https://source.unsplash.com/400x400/?capgemini"

  // Add more logos as needed
];

const CompanyLogos = ({ imageUrl }) => {
  return (
    <div className="w-48 h-36 m-5">
      <img src={imageUrl} alt="CompanyImage" className="rounded-lg m-5 object-fill" />
    </div>
  );
};

const CompanyPartners = () => {
  return (
    <div className="flex justify-center m-5 flex-wrap">
      {logos.map((eachLogo, index) => (
        <CompanyLogos key={index} imageUrl={eachLogo} />
      ))}
    </div>
  );
};

export default CompanyPartners;
