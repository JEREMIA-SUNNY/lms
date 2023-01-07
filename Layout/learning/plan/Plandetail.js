import { useRouter } from "next/router";
import PlanAction from "./planAction";
import Plans from '@/assets/mokedata/plan.json'
import CourseTrainingCard from "./courseTrainingCard";

const PlanDetailLayout = () => {
    const route = useRouter()
    const { query } = route

    return (
        <>
            <PlanAction />
            <section className="my-4 w-full bg-white p-4 shadow rounded-lg border border-[#419a00]">
                <div className="bg-gray-100 p-2 rounded-lg">
                    <div className="grid grid-cols-4 gap-4">
                        <div>
                            <p><span className="font-semibld">Plan Name: </span> <span> here is anme</span></p>
                        </div>
                        <div>
                            <p><span className="font-semibld">Courses: </span> 23<span></span></p>
                        </div>
                        <div>
                            <p><span className="font-semibld">Trainings: </span>23 <span></span></p>
                        </div>
                        <div>
                            <p><span className="font-semibld">Assigned to: </span> Marketing Department <span></span></p>
                        </div>
                    </div>
                    <p className="font-semibld">Description: </p>
                    <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. L <span></span></p>
                </div>


                <div className="mt-4 grid grid-cols-4 gap-5">
                    {Plans[0]['courseTrainingList']?.map((item, i) => {
                        return (
                            <CourseTrainingCard key={i} item={item} />
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default PlanDetailLayout;