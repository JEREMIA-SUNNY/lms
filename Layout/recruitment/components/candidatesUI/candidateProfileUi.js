import ShowMoreLess from 'components/ShowMoreLess';
import React from 'react';

const CandidateProfileUI = ({ candidate }) => {
    return (
        <>
            <div className='bg-[#F5F5F5] p-4 shadow rounded-lg mt-2'>
                <div className="grid gap-1 grid-cols-2">
                    <div className='flex justify-start'>
                        <div className='w-1/2 '> <p className="font-semibold">Full Name:</p></div>
                        <p className="text-gray-700">{candidate.fullName}</p>
                    </div>
                    <div className='flex justify-start'>
                        <div className='w-1/2 '> <p className="font-semibold">Gender:</p></div>
                        <p className="text-gray-700">{candidate.gender}</p>
                    </div>
                    <div className='flex justify-start'>
                        <div className='w-1/2 '> <p className="font-semibold">Current Location:</p></div>
                        <p className="text-gray-700">{candidate.currentLocation}</p>
                    </div>
                    <div className='flex justify-start'>
                        <div className='w-1/2 '> <p className="font-semibold">Email:</p></div>
                        <p className="text-gray-700">{candidate.email}</p>
                    </div>
                    <div className='flex justify-start'>
                        <div className='w-1/2 '> <p className="font-semibold">Phone:</p></div>
                        <p className="text-gray-700">{candidate.phone}</p>
                    </div>
                    <div className='flex justify-start'>
                        <div className='w-1/2 '> <p className="font-semibold">Source:</p></div>
                        <p className="text-gray-700">{candidate.source}</p>
                    </div>
                    <div className='flex justify-start'>
                        <div className='w-1/2 '> <p className="font-semibold">Vendor Name:</p></div>
                        <p className="text-gray-700">{candidate.vendorName}</p>
                    </div>

                </div>
                <div className='mt-2'>
                    <p className="font-semibold mr-2">Additional Info:</p>
                    <p className="text-gray-700">{candidate.additionalInfo}</p>
                </div>
                <div className='mt-2'>
                    <p className="font-semibold mr-2">Profile Summary:</p>
                    <ShowMoreLess />
                </div>
            </div>
            <div className='bg-[#F5F5F5] grid grid-cols-3 gap-1 p-4 shadow rounded-lg mt-4'>
                <div className='flex justify-start'>
                    <div className='w-1/2 '> <p className="font-semibold">Work Location:</p></div>
                    <p className="text-gray-700">{candidate.workLocation}</p>
                </div>
                <div className='flex justify-start'>
                    <div className='w-1/2 '> <p className="font-semibold">Work Mode:</p></div>
                    <p className="text-gray-700">{candidate.workMode}</p>
                </div>
                <div className='flex justify-start'>
                    <div className='w-1/2 '> <p className="font-semibold">Work Type:</p></div>
                    <p className="text-gray-700">{candidate.workType}</p>
                </div>
                <div className='flex justify-start'>
                    <div className='w-1/2 '> <p className="font-semibold">Open to Shifts:</p></div>
                    <p className="text-gray-700">{candidate.openToShifts ? 'Yes' : 'No'}</p>
                </div>
                <div className='flex justify-start'>
                    <div className='w-1/2 '> <p className="font-semibold">Open to Travel:</p></div>
                    <p className="text-gray-700">{candidate.openToTravel ? 'Yes' : 'No'}</p>
                </div>
            </div>
        </>
    );
};

export default CandidateProfileUI;
