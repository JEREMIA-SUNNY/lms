import { useState } from "react";
import JobAction from "./Action";
import JobDetailUILayout from "./jobdetailUi";
import Application from "../application";
import Recommendations from "../recommendations";
import Shortlist from "../shortlist";
import RecruitmentJobInterview from "../interview";
import Offers from '../offers'

const tablist = [
    { title: 'Job Details', component: <JobDetailUILayout /> },
    { title: 'Applications', component: <Application /> },
    { title: 'Recommendations', component: <Recommendations /> },
    { title: 'Shortlist', component: <Shortlist /> },
    { title: 'Interviews (L1)', component: <RecruitmentJobInterview /> },
    { title: 'Interviews (L2)', component: <RecruitmentJobInterview /> },
    { title: 'Offers', component: <Offers /> }
]

const JobDetailLayout = () => {
    const [selectedTab, setSelectedTab] = useState('Job Details')

    return (
        <div className="w-full">
            <JobAction
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab} />

            {tablist.find(tab => tab.title === selectedTab).component}
        </div>
    )
}

export default JobDetailLayout;