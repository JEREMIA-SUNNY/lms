import ModuleHeader from '../components/jobs/ModuleHeader'
import { useState } from "react";
import JobListUiLayout from "./joblistUI";
import CandidatesLayout from '../candidates';
// import InterviewsLayout from '../interview';
// import OffersLayout from '../offers';

const tablist = [
    { title: 'Jobs', component: <JobListUiLayout /> },
    { title: 'Candidates', component: <CandidatesLayout /> },
    { title: 'Interviews', component: '' },
    { title: 'Offers', component: '' }
]

const RecruitmentLayout = () => {
    const [searchFor, setSeachFor] = useState({})
    const [selectedTab, setSelectedTab] = useState('Jobs')

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