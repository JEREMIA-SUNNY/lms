import { useRouter } from "next/router";
import JobAction from "./Action";

const aJob = {
    "status": 'Open',
    "Job title": "Data Analyst",
    "Job code": "DA456",
    "Job group": "Analytics",
    "Location": "New York, NY",
    "Department": "Data Science",
    "Service Line": "Business Intelligence",
    "Business Unit": "Finance",
    "Hire Type": "Full-time",
    "Level": "Entry-level",
    "Skills": "SQL, Excel, R, Python",
    "Technology": "Tableau, Power BI, Alteryx",
    "Experience": "1-3 years",
}

const JobDetailLayout = () => {
    const route = useRouter()
    const { query } = route

    return (
        <>
            <JobAction />
            <section className="my-4 w-full bg-white p-4 shadow rounded-lg border border-[#419a00]">

                <div className="rounded-lg shadow bg-[#F5F5F5] p-4">
                    <div className={`grid grid-cols-${3} gap-${2}`}>
                        {Object.keys(aJob).map((el, i) => {
                            return (
                                <div key={i} className='flex'>
                                    <div className="w-1/2 capitalize">
                                        <span className="font-semibold">{el}</span>
                                    </div>
                                    <div>
                                        <span className="text-gray-700">: {aJob[el]}</span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="mt-4">
                        <div className="capitalize">
                            <span className="font-semibold">Job Summary: </span>
                        </div>
                        <div>
                            <span className="text-gray-700"> We are seeking a data analyst to join our team to support our data-driven decision making.</span>
                        </div>
                    </div>
                    <div>
                        <div className="capitalize">
                            <span className="font-semibold">Job Summary</span>
                        </div>
                        <div>
                            <div className="text-gray-700">
                                <p>• Collect, clean, and process large datasets.</p>
                                <p>• Create and maintain data visualizations and dashboards.</p>
                                <p>• Perform statistical analysis and provide insights.</p>
                                <p>• Collaborate with cross-functional teams to deliver data-driven solutions.</p>
                                <p>• Communicate findings and recommendations to stakeholders.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default JobDetailLayout;