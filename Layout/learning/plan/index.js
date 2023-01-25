import PlanCard from "./card";
import ModuleHeader from '../component/modileHeader'
import learningPlans from 'assets/mokedata/plan.json'
import { useState } from "react";

const PlanLayout = ( ) => {
    const [searchFor, setSeachFor] = useState({})
    
    return (
        <>
            <ModuleHeader searchFor={searchFor} setSeachFor={setSeachFor} title='LearningPlan' />
            <section className="my-4 w-full grid grid-cols-4 gap-5">
                {learningPlans?.map((item) => {
                    return (
                        <PlanCard item={item} key={item?.id} />
                    )
                })}
            </section>
        </>
    )
}

export default PlanLayout;