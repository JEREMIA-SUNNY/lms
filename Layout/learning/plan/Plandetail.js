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
                <div className="bg-gray-100 p-2 rounded-lg">
                    <div>
                        <p><span className="font-semibld">Plan Name: </span> <span className="text-gray-700"> here is anme</span></p>
                    </div>
                    <div>
                        <p><span className="font-semibld">Assigned to: </span> <span className="text-gray-700">Marketing Department</span></p>
                    </div>
                    <div className="grid grid-cols-4 gap-4">

                    </div>
                    <p className="font-semibld">Description: </p>
                    <p className="text-gray-700">
                        n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final co
                    </p>
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