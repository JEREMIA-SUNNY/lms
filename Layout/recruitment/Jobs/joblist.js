import ModuleHeader from '../component/jobs/ModuleHeader'
import { useState } from "react";
import JobListUiLayout from "./joblistUI";
import CandidatesLayout from '../candidates';
import InterviewsLayout from '../interview';
import OffersLayout from '../offers';

const tablist = [
    { title: 'Jobs (102)', component: <JobListUiLayout /> },
    { title: 'Candidates (99)', component: <CandidatesLayout /> },
    { title: 'Interviews (10)', component: <InterviewsLayout /> },
    { title: 'Offers (98)', component: <OffersLayout /> }
]

const RecruitmentLayout = () => {
    const [searchFor, setSeachFor] = useState({})
    const [selectedTab, setSelectedTab] = useState('Jobs (102)')

    return (
        <>
            <ModuleHeader
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
                searchFor={searchFor}
                setSeachFor={setSeachFor}
                title='Job' />
            {tablist.find(tab => tab.title === selectedTab).component}
        </>
    )
}

export default RecruitmentLayout;