import { useState } from "react";
import JobAction from "./Action";
import JobDetailUILayout from "./jobdetailUi";
import Application from "../application";
import Recommendations from "../recommendations";
import Shortlist from "../shortlist";

const tablist = [
    { title: 'Job Details', component: <JobDetailUILayout /> },
    { title: 'Applications', component: <Application /> },
    { title: 'Recommendations', component: <Recommendations /> },
    { title: 'Shortlist', component: <Shortlist /> },
    { title: 'Interviews (L1)', component: <h1>under progress</h1> },
    { title: 'Interviews (L2)', component: <h1>under progress</h1> },
    { title: 'Offers', component: <h1>under progress</h1> }
]

const JobDetailLayout = () => {
    const [selectedTab, setSelectedTab] = useState('Job Details')
    // const route = useRouter()
    // const { query } = route

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