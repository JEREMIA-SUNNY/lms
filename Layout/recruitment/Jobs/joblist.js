import ModuleHeader from '../component/jobs/ModuleHeader'
import { useState } from "react";
import JobListUiLayout from "./joblistUI";
import CandidatesLayout from '../candidates';
import InterviewsLayout from '../interview';
import OffersLayout from '../offers';

const tablist = [
    { title: 'Jobs', component: <JobListUiLayout /> },
    { title: 'Candidates', component: <CandidatesLayout /> },
    { title: 'Interviews', component: <InterviewsLayout /> },
    { title: 'Offers', component: <OffersLayout /> }
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