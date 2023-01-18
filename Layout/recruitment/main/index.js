import JobCard from "./card";
import ModuleHeader from '../component/modileHeader'
import jobs from '@/assets/mokedata/jobs.json'
import { useState } from "react";

const RecruitmentLayout = ( ) => {
    const [searchFor, setSeachFor] = useState({})
    
    return (
        <>
            <ModuleHeader searchFor={searchFor} setSeachFor={setSeachFor} title='Job' />
            <section className="my-4 w-full grid grid-cols-3 gap-5">
                {jobs?.map((item) => {
                    return (
                        <JobCard item={item} key={item?.id} />
                    )
                })}
            </section>
        </>
    )
}

export default RecruitmentLayout;