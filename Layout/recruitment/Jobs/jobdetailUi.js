
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
    "Experience": "1-3 years"
}

const JobDetailUILayout = () => {

    return (
        <>
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
                    <div className="mt-2">
                        <div className="capitalize">
                            <p className="font-semibold">Skills: </p>
                        </div>
                        <div>
                            <p className="text-gray-700"> SQL, Excel, R, Python.</p>
                        </div>
                    </div>
                    <div className="mt-2">
                        <div className="capitalize">
                            <p className="font-semibold">Technology: </p>
                        </div>
                        <div>
                            <p className="text-gray-700"> Tableau, Power BI, Alteryx.</p>
                        </div>
                    </div>
                    <div className="mt-2">
                        <div className="capitalize">
                            <p className="font-semibold">Job Summary: </p>
                        </div>
                        <div>
                            <p className="text-gray-700"> We are seeking a data analyst to join our team to support our data-driven decision making.</p>
                        </div>
                    </div>
                    <div className="mt-2">
                        <div className="capitalize">
                            <p className="font-semibold">Job Responsibilities</p>
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

export default JobDetailUILayout;