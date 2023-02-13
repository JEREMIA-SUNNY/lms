import React from 'react';

const CandidateProfileUI = ({ candidate }) => {
    return (
        <div className='bg-[#F5F5F5]'>
            <div className="grid gap-1 grid-cols-2 mt-2">
                <div className='flex justify-start'>
                    <div className='w-1/2 '> <h1 className="font-semibold">Full Name:</h1></div>
                    <span className="text-gray-700">{candidate.fullName}</span>
                </div>
                <div className='flex justify-start'>
                    <div className='w-1/2 '> <h1 className="font-semibold">Gender:</h1></div>
                    <span className="text-gray-700">{candidate.gender}</span>
                </div>
                <div className='flex justify-start'>
                    <div className='w-1/2 '> <h1 className="font-semibold">Current Location:</h1></div>
                    <span className="text-gray-700">{candidate.currentLocation}</span>
                </div>
                <div className='flex justify-start'>
                    <div className='w-1/2 '> <h1 className="font-semibold">Email:</h1></div>
                    <span className="text-gray-700">{candidate.email}</span>
                </div>
                <div className='flex justify-start'>
                    <div className='w-1/2 '> <h1 className="font-semibold">Phone:</h1></div>
                    <span className="text-gray-700">{candidate.phone}</span>
                </div>
                <div className='flex justify-start'>
                    <div className='w-1/2 '> <h1 className="font-semibold">Source:</h1></div>
                    <span className="text-gray-700">{candidate.source}</span>
                </div>
                <div className='flex justify-start'>
                    <div className='w-1/2 '> <h1 className="font-semibold">Vendor Name:</h1></div>
                    <span className="text-gray-700">{candidate.vendorName}</span>
                </div>
                <div className='flex justify-start'>
                    <div className='w-1/2 '> <h1 className="font-semibold">Work Location:</h1></div>
                    <span className="text-gray-700">{candidate.workLocation}</span>
                </div>
                <div className='flex justify-start'>
                    <div className='w-1/2 '> <h1 className="font-semibold">Work Mode:</h1></div>
                    <span className="text-gray-700">{candidate.workMode}</span>
                </div>
                <div className='flex justify-start'>
                    <div className='w-1/2 '> <h1 className="font-semibold">Work Type:</h1></div>
                    <span className="text-gray-700">{candidate.workType}</span>
                </div>
                <div className='flex justify-start'>
                    <div className='w-1/2 '> <h1 className="font-semibold">Open to Shifts:</h1></div>
                    <span className="text-gray-700">{candidate.openToShifts ? 'Yes' : 'No'}</span>
                </div>
                <div className='flex justify-start'>
                    <div className='w-1/2 '> <h1 className="font-semibold">Open to Travel:</h1></div>
                    <span className="text-gray-700">{candidate.openToTravel ? 'Yes' : 'No'}</span>
                </div>
            </div>
            <div className='mt-2'>
                <h1 className="font-semibold mr-2">Additional Info:</h1>
                <p className="text-gray-700">{candidate.additionalInfo}</p>
            </div>
            <div className='mt-2'>
                <h1 className="font-semibold mr-2">Profile Summary:</h1>
                <p className="text-gray-700">{candidate.profileSummary}</p>
            </div>
        </div>
    );
};

export default CandidateProfileUI;
