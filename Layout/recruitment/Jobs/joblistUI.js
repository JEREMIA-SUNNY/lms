import JobCard from "./Jobcard";
import jobs from 'assets/mokedata/jobs.json'

const JobListUiLayout = () => {

    return (
        <>
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

export default JobListUiLayout;