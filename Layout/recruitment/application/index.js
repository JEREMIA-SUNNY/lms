import CandidateInfoCard from "../component/candidateInfoCard"

const appliedUser = [
    {
        designation: 'Frontend Developer',
        name: 'John Smith'
    },
    {
        designation: 'Frontend Developer',
        name: 'Naresh Gautam'
    },
    {
        designation: 'Backend Developer',
        name: 'Rohit Kumar'
    },
    {
        designation: 'Backend Developer',
        name: 'Sunil Kumar'
    }

]

const Application = () => {
    return (
        <div className="mt-4 grid gap-4 grid-cols-4">
            {appliedUser?.map((item,i) => {
                return (
                    <CandidateInfoCard key={i}  item={item}/>
                )
            })
            }
        </div>
    )
}

export default Application