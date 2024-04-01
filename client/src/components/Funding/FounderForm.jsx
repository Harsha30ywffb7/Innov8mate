
import React from 'react';
import { useState } from 'react';
import { PhotoIcon } from '@heroicons/react/24/solid';
import { Switch } from '@headlessui/react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const FounderForm=()=> {

  const[agreed, setAgreed] = useState(false);
  const navigate = useNavigate()

  const [companyData, setCompanyData] = useState({
    companyName: '',
    founderName: '',
    founderProfileLink: '',
    founderDescription: '',
    description: '',
    sector: '',
    location: '',
    website: '',
    socialMediaLink: '',
    sharesDiluted: '',
    investmentNeeded:''
  });


 const handleAgreed = ()=>{
  setAgreed(!agreed);
 }

   const handleSubmit=async(e)=> {
    e.preventDefault();
    // Handle form submission here
    try {
      // Assuming you're storing the user information in localStorage under "user"
      const user = localStorage.getItem('Username');
      console.log(user);
      
      const company = {
        companyName: companyData.companyName,
        founder: {
          name: companyData.founderName,
          profileLink: companyData.founderProfileLink,
          description: companyData.founderDescription,
        },
        description: companyData.description,
        sector: companyData.sector,
        location: companyData.location,
        companyLinks: {
          website: companyData.website,
          socialMediaLink:companyData.socialMediaLink,
        },
        sharesDiluted: companyData.sharesDiluted,
        investmentNeeded: companyData.investmentNeeded,
        userUniqueId: user,
      };

      console.log("before axios in frontend")

      const response = await axios.post('http://localhost:5000/funding/addcompany',company);

      console.log("After axios in frontend")

      

      console.log('Company Added:', response.data);
      navigate('/funding')
      // Handle response or redirect user as necessary
    } catch (error) {
      console.error('Error adding company:', error.response ? error.response.data : error.message);
      // Handle errors, maybe set an error message in your component's state
    }
  }

  return (
  <>
  {/* <BackspaceIcon onClick={() => window.history.back()} className="absolute top-0 left-0 mt-4 ml-4 text-gray-600 hover:text-gray-900 focus:outline-none mx-auto h-12 w-12" /> */}
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute top-0 left-0 mt-4 ml-4 text-gray-600 hover:text-gray-900 focus:outline-none mx-auto h-6 w-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
</svg>

     
      
    <form onSubmit={handleSubmit} className="mt-10 w-6/12 mx-auto bg-white p-6 rounded-lg shadow-md">
      <p className="text-2xl font-semibold text-gray-900 mb-4 text-center">Company Details</p>

      <div className="grid grid-cols-1 gap-y-6">
      <div>
          <label htmlFor="companyName" className="block text-sm font-medium text-gray-900">Company Name</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            className="mt-3  p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"
            placeholder="company Name"
            value={companyData.companyName}
            onChange={(e) => setCompanyData({...companyData,companyName:e.target.value})}
            required
          />
        </div>

        <div>
          <label htmlFor="founderName" className="block text-sm font-medium text-gray-900">Founder Name</label>
          <input
            type="text"
            id="founderName"
            name="founderName"
            className="mt-3 p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"
            placeholder="Founder name"
            value={companyData.founderName}
            onChange={(e) => setCompanyData({...companyData,founderName:e.target.value})}
            required
          />
        </div>

        <div>
          <label htmlFor="founderLinks" className="block text-sm font-medium text-gray-900">Founder Links</label>
          <input
            type="url"
            id="founderLinks"
            name="founderLinks"
            className="mt-3 p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"
            placeholder="LinkedIn, personal website, etc."
            value={companyData.founderProfileLink}
            onChange={(e) => setCompanyData({...companyData,founderProfileLink:e.target.value})}
            required
          />
        </div>

        <div>
          <label htmlFor="founderDescription" className="block text-sm font-medium text-gray-900">Founder Description</label>
          <input
            type="text"
            id="founderDescription"
            name="founderDescription"
            className="mt-3 p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"
            placeholder="LinkedIn, personal website, etc."
            value={companyData.founderDescription}
            onChange={(e) => setCompanyData({...companyData,founderDescription:e.target.value})}
            required
          />
        </div>

        <div>
          <label htmlFor="companyDescription" className="block text-sm font-medium text-gray-900">Company Description</label>
          <textarea
            id="companyDescription"
            name="companyDescription"
            rows="3"
            className="mt-3 p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"
            placeholder="Briefly describe your company..."
            value={companyData.description}
            onChange={(e) => setCompanyData({...companyData,description:e.target.value})}
            required
          ></textarea>
        </div>

        <div className="col-span-full">
              <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                Cover photo
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold"
                    >
                      <span className='text-sm'>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>

        <div>
          <label htmlFor="sector" className="block text-sm font-medium text-gray-900">Sector</label>
          <select
            id="sector"
            name="sector"
            className="mt-3 p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"
            value={companyData.sector}
            onChange={(e) => setCompanyData({...companyData,sector:e.target.value})}
            
          >
            <option value="">Select Sector</option>
            <option value="Technology">Technology</option>
            <option value="Finance">Finance</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Other">Other</option>
          </select>
          
        </div>

        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-900">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            className="mt-3 p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"
            placeholder="City, Country"
            value={companyData.location}
            onChange={(e) => setCompanyData({...companyData,location:e.target.value})}
            required
          />
        </div>

        <div>
          <label htmlFor="website" className="block text-sm font-medium text-gray-900">Company website</label>
          <input
            type="url"
            id="website"
            name="website"
            className="mt-3 p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"
            placeholder="Website, GitHub repository, etc."
            value={companyData.website}
            onChange={(e) => setCompanyData({...companyData,website:e.target.value})}
            required
          />
        </div>

        <div >
          <label htmlFor="socialMediaLink" className="block text-sm font-medium text-gray-900">social Media Links</label>
          <input
            type="url"
            id="socialMediaLink"
            name="socialMediaLink"
            className="mt-3 p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"
            placeholder="LinkedIn, Twitter, Facebook, etc."
            value={companyData.socialMediaLink}
            onChange={(e) => setCompanyData({...companyData,socialMediaLink:e.target.value})}
          />
        </div>

        <div className='flex gap-10 '>
        <div>
          <label htmlFor="investmentNeeded" className="block text-sm font-medium text-gray-900">Investment Needed</label>
          <input
            type="text"
            id="investmentNeeded"
            name="investmentNeeded"
            className="mt-3 p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"
            placeholder= "₹. In rupees"
            value={companyData.investmentNeeded}
            onChange={(e) => setCompanyData({...companyData,investmentNeeded:e.target.value})}
            required
          />
        </div>

        <div>
          <label htmlFor="sharesDilute" className="block text-sm font-medium text-gray-900">Shares Dilute</label>
          <input
            type="text"
            id="sharesDilute"
            name="sharesDilute"
            className="mt-3 p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"
            placeholder="Percentage of shares to dilute"
            value={companyData.sharesDiluted}
            onChange={(e) => setCompanyData({...companyData,sharesDiluted:e.target.value})}
            required
          />
        </div>
        </div>
      </div>

      <div className='my-10'>
      <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={handleAgreed}
                className={classNames(
                  agreed ? 'bg-indigo-600' : 'bg-gray-200',
                  'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                )}
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    agreed ? 'translate-x-3.5' : 'translate-x-0',
                    'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                  )}
                />
              </Switch>
            </div>
            <Switch.Label className="text-sm leading-6 text-gray-600">
              By selecting this, you agree to our{' '}
              <Link to="/about" className="font-semibold text-indigo-600">
                privacy&nbsp;policy
              </Link>
              .
            </Switch.Label>
          </Switch.Group>
      </div>

      <div className="mt-6">
        <button
          type="submit"
          className="ml-44  w-6/12 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Find Investors
        </button>
      </div>
    </form>
  </>
    
  );
}

export default FounderForm;