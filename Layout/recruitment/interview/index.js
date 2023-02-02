
import CandidateInfoCard from "../component/candidateInfoCard"
import appliedUser from "assets/mokedata/appliedUser.json"

const InterviewsLayout = () => {
    return (
        <div className="mt-4 grid gap-4 grid-cols-3">
            {appliedUser?.map((item,i) => {
                return (
                    <CandidateInfoCard key={i}  item={item}/>
                )
            })
            }
        </div>
    )
}

export default InterviewsLayout