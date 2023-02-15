
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
            <section className="text-sm my-4 w-full bg-white p-4 shadow rounded-lg">
                <div className="rounded-lg shadow bg-[#F5F5F5] h-[64vh] overflow-auto p-4">
                    <div className={`grid grid-cols-${3} gap-${2}`}>
                        {Object.keys(aJob).map((el, i) => {
                            return (
                                <div key={i} className='flex'>
                                    <div className="w-1/2 capitalize">
                                        <span className="font-medium">{el}</span>
                                    </div>
                                    <div>
                                        <span className="text-textSecondary">: {aJob[el]}</span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="grid grid-cols-2 gap-2 mt-8">
                        <div>
                            <div className="mt-2">
                                <div className="capitalize">
                                    <p className="font-medium">Skills: </p>
                                </div>
                                <div>
                                    <p className="text-textSecondary"> SQL, Excel, R, Python.</p>
                                </div>
                            </div>
                            <div className="mt-2">
                                <div className="capitalize">
                                    <p className="font-medium">Technology: </p>
                                </div>
                                <div>
                                    <p className="text-textSecondary"> Tableau, Power BI, Alteryx.</p>
                                </div>
                            </div>
                            <div className="mt-2">
                                <div className="capitalize">
                                    <p className="font-medium">Job Summary: </p>
                                </div>
                                <div>
                                    <p className="text-textSecondary"> We are seeking a data analyst to join our team to support our data-driven decision making.</p>
                                </div>
                            </div>
                        </div>
                        <div>

                            <div className="mt-2">
                                <div className="capitalize">
                                    <p className="font-medium">Job Responsibilities</p>
                                </div>
                                <div>
                                    <div className="text-textSecondary">
                                        <p>• Collect, clean, and process large datasets.</p>
                                        <p>• Create and maintain data visualizations and dashboards.</p>
                                        <p>• Perform statistical analysis and provide insights.</p>
                                        <p>• Collaborate with cross-functional teams to deliver data-driven solutions.</p>
                                        <p>• Communicate findings and recommendations to stakeholders.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default JobDetailUILayout;