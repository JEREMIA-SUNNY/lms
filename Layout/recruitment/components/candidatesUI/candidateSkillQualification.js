
const data = {
    "totalExperience": "5 years",
    "academicQualification": [
        {
            "degree": "Bachelor of Science in Computer Science",
            "institution": "University of XYZ",
            "year": "2015-2019"
        },
        {
            "degree": "Master of Science in Computer Science",
            "institution": "University of ABC",
            "year": "2019-2021"
        },
        {
            "degree": "Certificate in Data Science",
            "institution": "XYZ Institute",
            "year": "2021"
        }
    ],
    "previousExperience": [
        {
            "position": "Software Engineer",
            "company": "ABC Inc.",
            "duration": "2019-2021"
        },
        {
            "position": "Data Analyst",
            "company": "XYZ Ltd.",
            "duration": "2021-2022"
        },
        {
            "position": "Full Stack Developer",
            "company": "PQR Corp.",
            "duration": "2022-2023"
        }
    ],
    "skills": [
        {
            "skill": "JavaScript",
            "proficiency": "Expert"
        },
        {
            "skill": "Python",
            "proficiency": "Advanced"
        },
        {
            "skill": "React",
            "proficiency": "Intermediate"
        }
    ],
    "technologies": [
        {
            "technology": "Node.js",
            "proficiency": "Expert"
        },
        {
            "technology": "MongoDB",
            "proficiency": "Advanced"
        },
        {
            "technology": "Docker",
            "proficiency": "Intermediate"
        }
    ]
}

const CandidateSkillQualification = () => {
    return (
        <div className="w-full h-full grid gap-2 grid-cols-2">
            <div>
                <h1 className=" font-medium my-2"> Education background </h1>
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-textSecondary uppercase bg-gray-50">
                        <tr scope="col" className="bg-gray-100 border-b">
                            <th className="border py-2 px-2">
                                Degree
                            </th>
                            <th className="border py-2 px-2">
                                Institution
                            </th>
                            <th className="border py-2 px-2">
                                Year
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.academicQualification?.map((item, i) => {
                                return (
                                    <tr key={i} className="bg-white border-b">
                                        <td className="border py-2 px-2">
                                            {item?.degree}
                                        </td>
                                        <td className="border py-2 px-2">
                                            {item?.institution}
                                        </td>
                                        <td className="border py-2 px-2">
                                            {item?.year}
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>
            <div>
                <h1 className=" font-medium my-2">Total Experience :{data?.totalExperience} </h1>
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-textSecondary uppercase bg-gray-50">
                        <tr scope="col" className="bg-gray-100 border-b">
                            <th className="border py-2 px-2">
                                Position
                            </th>
                            <th className="border py-2 px-2">
                                Company
                            </th>
                            <th className="border py-2 px-2">
                                Duration
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.previousExperience?.map((item, i) => {
                                return (
                                    <tr key={i} className="bg-white border-b">
                                        <td className="border py-2 px-2">
                                            {item?.position}
                                        </td>
                                        <td className="border py-2 px-2">
                                            {item?.company}
                                        </td>
                                        <td className="border py-2 px-2">
                                            {item?.duration}
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>
            <div>
                <h1 className=" font-medium my-2">Skills Proficiency</h1>
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-textSecondary uppercase bg-gray-50">
                        <tr scope="col" className="bg-gray-100 border-b">
                            <th className="border py-2 px-2">
                                skill
                            </th>
                            <th className="border py-2 px-2">
                                proficiency
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.skills?.map((item, i) => {
                                return (
                                    <tr key={i} className="bg-white border-b">
                                        <td className="border py-2 px-2">
                                            {item?.skill}
                                        </td>
                                        <td className="border py-2 px-2">
                                            {item?.proficiency}
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>
            <div>
                <h1 className=" font-medium my-2">Technology Proficiency</h1>
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-textSecondary uppercase bg-gray-50">
                        <tr scope="col" className="bg-gray-100 border-b">
                            <th className="border py-2 px-2">
                                technology
                            </th>
                            <th className="border py-2 px-2">
                                proficiency
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.technologies?.map((item, i) => {
                                return (
                                    <tr key={i} className="bg-white border-b">
                                        <td className="border py-2 px-2">
                                            {item?.technology}
                                        </td>
                                        <td className="border py-2 px-2">
                                            {item?.proficiency}
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CandidateSkillQualification;