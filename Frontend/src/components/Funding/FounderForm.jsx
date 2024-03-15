
import React from 'react';
import { useState } from 'react';
import { PhotoIcon } from '@heroicons/react/24/solid';
import { Switch } from '@headlessui/react'
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const FounderForm=()=> {
  const [companyName, setCompanyName] = useState('');
  const [founderName, setFounderName] = useState('');
  const [founderLinks, setFounderLinks] = useState('');
  const [companyDescription, setCompanyDescription] = useState('');
  const [sector, setSector] = useState('');
  const [location, setLocation] = useState('');
  const [socialMediaLinks, setSocialMediaLinks] = useState('');
  const [otherLinks, setOtherLinks] = useState('');
  const [fundsNeeded, setFundsNeeded] =useState('');
  const [sharesDilute, setSharesDilute] = useState('');
  const [agreed, setAgreed] = useState(false)

  function handleSubmit(event) {
    event.preventDefault();
    // Handle form submission here
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
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
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
            value={founderName}
            onChange={(e) => setFounderName(e.target.value)}
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
            value={founderLinks}
            onChange={(e) => setFounderLinks(e.target.value)}
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
            value={companyDescription}
            onChange={(e) => setCompanyDescription(e.target.value)}
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
            value={sector}
            onChange={(e) => setSector(e.target.value)}
            
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
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="socialMediaLinks" className="block text-sm font-medium text-gray-900">Social Media Links</label>
          <input
            type="text"
            id="socialMediaLinks"
            name="socialMediaLinks"
            className="mt-3 p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"
            placeholder="LinkedIn, Twitter, Facebook, etc."
            value={socialMediaLinks}
            onChange={(e) => setSocialMediaLinks(e.target.value)}
            required
          />
        </div>

        <div >
          <label htmlFor="otherLinks" className="block text-sm font-medium text-gray-900">Other Links</label>
          <input
            type="text"
            id="otherLinks"
            name="otherLinks"
            className="mt-3 p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"
            placeholder="Website, GitHub repository, etc."
            value={otherLinks}
            onChange={(e) => setOtherLinks(e.target.value)}
          />
        </div>

        <div className='flex gap-10 '>
        <div>
          <label htmlFor="sharesDilute" className="block text-sm font-medium text-gray-900">Investment Needed</label>
          <input
            type="text"
            id="sharesDilute"
            name="sharesDilute"
            className="mt-3 p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"
            placeholder= "₹. In rupees"
            value={fundsNeeded}
            onChange={(e) => setFundsNeeded(e.target.value)}
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
            value={sharesDilute}
            onChange={(e) => setSharesDilute(e.target.value)}
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
                onChange={setAgreed}
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
              <a href="#" className="font-semibold text-indigo-600">
                privacy&nbsp;policy
              </a>
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