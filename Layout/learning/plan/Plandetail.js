import { useRouter } from "next/router";
import PlanAction from "./planAction";
import Plans from '@/assets/mokedata/plan.json'
import CourseTrainingCard from "./courseTrainingCard";

const PlanDetailLayout = () => {
    const route = useRouter()
    // const { query } = route

    return (
        <>
            <PlanAction />
            <section className="my-4 w-full bg-white p-4 shadow rounded-lg border border-[#419a00]">
                <div className="bg-gray-100 shadow p-2 rounded-lg font-semibld">
                    <div className="flex">
                        <div className="font-semibld w-48">Plan Name: </div> <span className="text-gray-700"> here is anme</span>
                    </div>
                    <div className="flex">
                        <div className="font-semibld w-48">Status: </div> <span className="text-gray-700"> Completed</span>
                    </div>
                    <div className="flex">
                        <div className="font-semibld w-48">Assigned to: </div> <span className="text-gray-700">Marketing Department</span>
                    </div>
                    <div className="font-semibld">
                        Description: <span span className="text-gray-700">
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