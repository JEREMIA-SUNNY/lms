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
            <div className="w-96">
                <Tablist list={['Profile', 'Skills and Qualifications']} />
            </div>
            <Tab.Panels>
                <Tab.Panel className='focus:outline-none'>
                    <div className="w-full h-[74vh] overflow-scroll my-2 py-4 bg-[#F5F5F5] p-4 shadow rounded-lg border border-[#419a00]">
                        <CandidateProfileUI candidate={mockData} />
                    </div>
                </Tab.Panel>
                <Tab.Panel className='focus:outline-none'>
                    <div className="w-full h-[74vh] overflow-scroll py-4">
                        <CandidateSkillQualification />
                    </div>
                </Tab.Panel>
            </Tab.Panels>
        </Tab.Group>
    )
}

export default CandidateDetailTabs;