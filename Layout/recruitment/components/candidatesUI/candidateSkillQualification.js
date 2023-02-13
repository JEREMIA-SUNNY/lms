

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
        <div className="w-full h-full">
            <h1 className="font-semibold"> Total Experience {data?.totalExperience}</h1>
            <div className="grid gap-2 grid-cols-2 bg-[#F5F5F5] p-4 shadow rounded-lg border border-[#419a00]">
                {
                    data?.academicQualification?.map((info, i) => {
                        return (
                            <div key={i}>
                                <div className="flex">
                                    <h1 className="font-semibold mr-2">Degree:</h1>
                                    <p>{info.degree}</p>
                                </div>
                                <div className="flex">
                                    <h1 className="font-semibold mr-2">Institution:</h1>
                                    <p>{info.institution}</p>
                                </div>
                                <div className="flex">
                                    <h1 className="font-semibold mr-2">Year:</h1>
                                    <p>{info.year}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <h1 className="font-semibold my-2"> Previous Experience</h1>
            <div className="grid gap-2 grid-cols-2 bg-[#F5F5F5] p-4 shadow rounded-lg border border-[#419a00]">
                {
                    data?.previousExperience?.map((info, i) => {
                        return (
                            <div key={i}>
                                <div className="flex">
                                    <h1 className="font-semibold mr-2">Position:</h1>
                                    <p>{info.position}</p>
                                </div>
                                <div className="flex">
                                    <h1 className="font-semibold mr-2">Company:</h1>
                                    <p>{info.company}</p>
                                </div>
                                <div className="flex">
                                    <h1 className="font-semibold mr-2">Duration:</h1>
                                    <p>{info.duration}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <h1 className="font-semibold mt-2"> Skills</h1>
            <div className="grid gap-2 grid-cols-3 bg-[#F5F5F5] p-4 shadow rounded-lg border border-[#419a00] my-2">
                {
                    data?.skills?.map((info, i) => {
                        return (
                            <div key={i}>
                                <div className="flex">
                                    <h1 className="font-semibold mr-2">Skill:</h1>
                                    <p>{info.skill}</p>
                                </div>
                                <div className="flex">
                                    <h1 className="font-semibold mr-2">Proficiency:</h1>
                                    <p>{info.proficiency}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <h1 className="font-semibold mt-2"> Technology</h1>
            <div className="grid gap-2 grid-cols-3 bg-[#F5F5F5] p-4 shadow rounded-lg border border-[#419a00] my-2">
                {
                    data?.technologies?.map((info, i) => {
                        return (
                            <div key={i}>
                                <div className="flex">
                                    <h1 className="font-semibold mr-2">Technology:</h1>
                                    <p>{info.technology}</p>
                                </div>
                                <div className="flex">
                                    <h1 className="font-semibold mr-2">Proficiency:</h1>
                                    <p>{info.proficiency}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default CandidateSkillQualification;