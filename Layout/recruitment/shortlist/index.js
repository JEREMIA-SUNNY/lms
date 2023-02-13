
import appliedUser from "assets/mokedata/appliedUser.json"
import CandidateModalInfo from "../components/candidatesUI/candidateModalinfo"

const Shortlist = () => {
    return (
        <div className="mt-4 grid gap-4 grid-cols-3">
            {appliedUser?.map((item,i) => {
                return (
                    <CandidateModalInfo key={i}  item={item}/>
                )
            })
            }
        </div>
    )
}

export default Shortlist