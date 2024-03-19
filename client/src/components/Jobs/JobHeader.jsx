import React from 'react'

const JobHeader = () => {
    return (
        <div>
            <div className='flex bg-orange-100 py-2 px-3'>
                <div>
                    <input type="text" name="search" id="searchbar"
                        className='ml-28 py-2 px-2 my-3 rounded-md' placeholder='  Search Jobs' />
                    <button className='px-1 py-1 bg-orange-500 text-white mx-5 rounded-lg my-3'>Search</button>
                </div>

                <div className='flex ml-10 m-4'>
                    <div className="mx-5">
                        <label className='font-semibold'>
                            Job Type :
                            <select className='rounded-lg font-medium ml-2 px-1 py-1'>
                                <option value="Part-Time">select</option>
                                <option value="Part-Time">Part-Time</option>
                                <option value="FullTime">Full-Time</option>
                                <option value="Contract">Contract</option>
                            </select>
                        </label>
                    </div>
                    <div className="mx-5">
                        <label className='font-semibold '>
                            Job Level :
                            <select className='rounded-lg font-medium ml-2 py-1 px-1'>
                                <option value="Part-Time">select</option>
                                <option value="oldest">Any</option>
                                <option value="latest">Senior</option>
                                <option value="oldest">Director</option>
                            </select>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobHeader;