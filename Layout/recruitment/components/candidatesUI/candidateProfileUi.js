import ShowMoreLess from 'components/ShowMoreLess';
import React from 'react';

const CandidateProfileUI = ({ candidate }) => {
    return (
        <>
            <div className='bg-[#F5F5F5] p-4 shadow rounded-lg mt-2'>
                <div className="grid gap-1 grid-cols-3 text-sm">
                    <div className='flex justify-start'>
                        <div><p className="font-medium mr-2">Full Name:</p></div>
                        <p className="text-gray-700">{candidate.fullName}</p>
                    </div>
                    <div className='flex justify-start'>
                        <div> <p className="font-medium mr-2">Gender:</p></div>
                        <p className="text-gray-700">{candidate.gender}</p>
                    </div>
                    <div className='flex justify-start'>
                        <div> <p className="font-medium mr-2">Current Location:</p></div>
                        <p className="text-gray-700">{candidate.currentLocation}</p>
                    </div>
                    <div className='flex justify-start'>
                        <div> <p className="font-medium mr-2">Email:</p></div>
                        <p className="text-gray-700">{candidate.email}</p>
                    </div>
                    <div className='flex justify-start'>
                        <div> <p className="font-medium mr-2">Phone:</p></div>
                        <p className="text-gray-700">{candidate.phone}</p>
                    </div>
                </div>
                <div className="font-medium text-sm mr-2">
                    <div className='mt-2'>
                        <p >Profile Summary:</p>
                        <ShowMoreLess />
                    </div>
                    <div className='mt-2'>
                        <p>Additional Info:</p>
                        <ShowMoreLess />
                    </div>
                </div>
            </div>
            <div className='bg-[#F5F5F5] grid grid-cols-4 gap-1 p-4 text-sm shadow rounded-lg mt-4'>
                <div className='flex justify-start'>
                    <div> <p className="font-medium mr-2">Work Location:</p></div>
                    <p className="text-gray-700">{candidate.workLocation}</p>
                </div>
                <div className='flex justify-start'>
                    <div> <p className="font-medium mr-2">Work Mode:</p></div>
                    <p className="text-gray-700">{candidate.workMode}</p>
                </div>
                <div className='flex justify-start'>
                    <div> <p className="font-medium mr-2">Work Type:</p></div>
                    <p className="text-gray-700">{candidate.workType}</p>
                </div>
                <div className='flex justify-start'>
                    <div> <p className="font-medium mr-2">Open to Shifts:</p></div>
                    <p className="text-gray-700">{candidate.openToShifts ? 'Yes' : 'No'}</p>
                </div>
                <div className='flex justify-start'>
                    <div> <p className="font-medium mr-2">Open to Travel:</p></div>
                    <p className="text-gray-700">{candidate.openToTravel ? 'Yes' : 'No'}</p>
                </div>
            </div>
        </>
    );
};

export default CandidateProfileUI;
