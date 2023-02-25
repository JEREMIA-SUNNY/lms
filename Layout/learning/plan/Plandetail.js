import { useRouter } from "next/router";
import PlanAction from "./planAction";
import Plans from 'assets/mokedata/plan.json'
import CourseTrainingCard from "./courseTrainingCard";
import PlanInfoViewUsers from "./planInfoViewUsers";

const PlanDetailLayout = () => {
    const route = useRouter()
    // const { query } = route

    return (
        <>
            <PlanAction />
            <section className="my-4 w-full bg-white p-4 shadow rounded-lg">
                <div className="bg-gray-100 shadow p-2 rounded-lg font-semibld">
                    <div className="grid grid-cols-4">
                        <div className='flex'>
                            <div className="w-1/2 font-semibld">Plan Name <span className="text-textSecondary"> : here is anme</span></div>
                        </div>
                        <div className='flex'>
                            <div className="w-1/2 font-semibld">Mandatory <span className="text-textSecondary">:Yes</span></div>
                        </div>
                        <div className='flex'>
                            <div className="w-1/2 font-semibld">Due date <span className="text-textSecondary">:10/02/2023</span></div>
                        </div>
                        <div className='flex'>
                            <div className="w-1/2 font-semibld">Status <span className="text-textSecondary"> :Completed</span></div>
                        </div>
                    </div>
                    <div className="flex justify-start items-center">
                        <div className="font-semibld">Assigned to</div>
                        <div className="flex justify-start items-center"> <span className="text-textSecondary">: Marketing Department </span> <PlanInfoViewUsers /> </div>
                    </div>
                    <div>
                        <span className="font-semibold">Description </span>  <span className="text-textSecondary">: n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final c</span>
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