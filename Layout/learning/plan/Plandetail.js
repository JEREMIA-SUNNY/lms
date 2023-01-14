import { useRouter } from "next/router";
import PlanAction from "./planAction";
import Plans from '@/assets/mokedata/plan.json'
import CourseTrainingCard from "./courseTrainingCard";
import PlanInfoViewUsers from "./planInfoViewUsers";

const PlanDetailLayout = () => {
    const route = useRouter()
    // const { query } = route

    return (
        <>
            <PlanAction />
            <section className="my-4 w-full bg-white p-4 shadow rounded-lg border border-[#419a00]">
                <div className="bg-gray-100 shadow p-2 rounded-lg font-semibld">
                    <div className="grid grid-cols-2 ">
                        <div className="font-semibld">Plan Name: <span className="text-gray-700"> here is anme</span></div>
                        <div className="flex justify-start items-center">
                            <div className="font-semibld">Assigned to: <span className="text-gray-700 h-8">Marketing Department {'>'} </span></div> <div > <PlanInfoViewUsers /> </div>
                        </div>
                        <div className="font-semibld">Mandatory: <span className="text-gray-700">Yes</span></div>
                        <div className="font-semibld">Due date: <span className="text-gray-700">10/02/2023</span></div>
                        <div className="font-semibld">Status: <span className="text-gray-700"> Completed</span></div>

                    </div>
                    <div className="font-semibld">
                        Description: <span className="text-gray-700">
                            n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final co
                        </span>
                    </div>
                </div>


                <div className="mt-4 grid grid-cols-4 gap-5">
                    {Plans[0]['courseTrainingList']?.map((item, i) => {
                        return (
                            <CourseTrainingCard key={i} index={i} length={Plans[0]['courseTrainingList']?.length} item={item} />
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default PlanDetailLayout;