import { Tab } from "@headlessui/react";
import Tablist from "components/custom/TabList";
import CandidateProfileUI from "./candidateProfileUi";
import CandidateSkillQualification from "./candidateSkillQualification";

const mockData = {
    candidateId: '1001',
    fullName: 'Jane Doe',
    gender: 'Female',
    currentLocation: 'New York, NY',
    email: 'jane.doe@example.com',
    phone: '555-555-5555',
    source: 'Indeed',
    vendorName: 'Acme Corp',
    profileSummary: 'Experienced software engineer with a passion for building high-quality, scalable applications.',
    additionalInfo: 'I have 5 years of experience in the software industry and have a strong understanding of various programming languages, including Java, Python, and JavaScript.',
    resume: 'https://www.example.com/resumes/jane-doe',
    workLocation: 'Remote',
    workMode: 'Full-time',
    workType: 'Contract',
    openToShifts: true,
    openToTravel: false,
    dateOfBirth: '1990-01-01',
    postalAddress: '123 Main St, New York, NY 10001'
};

const CandidateDetailTabs = () => {
    return (
        <Tab.Group>
            <div className="flex justify-between items-center">
                <div className="w-96">
                    <Tablist list={['Profile & Preferences', 'Skills & Qualifications']} />
                </div>
                <div className="flex justify-start items-center">
                    <p className="mr-2">Vendor: <span className="text-sm text-gray-900">{mockData?.vendorName}</span></p>
                    <p className="mr-2">Source: <span className="text-sm text-gray-900">{mockData?.source}</span></p>
                    <div className='text-green-600 flex justify-start items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75" />
                        </svg>
                        <a target='_blank' href='/sample.pdf'>
                            Resume
                        </a>
                    </div>
                </div>
            </div>
            <Tab.Panels>
                <Tab.Panel className='focus:outline-none'>
                    <div className="w-full h-[70vh] overflow-scroll">
                        <CandidateProfileUI candidate={mockData} />
                    </div>
                </Tab.Panel>
                <Tab.Panel className='focus:outline-none'>
                    <div className="w-full h-[70vh] overflow-scroll py-4">
                        <CandidateSkillQualification />
                    </div>
                </Tab.Panel>
            </Tab.Panels>
        </Tab.Group>
    )
}

export default CandidateDetailTabs;