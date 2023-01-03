import Training from "./card";
import ModuleHeader from '../component/modileHeader'
import Trainings from '@/assets/mokedata/courses.json'
import { useState } from "react";

const TrainingLayout = () => {
    const [searchFor, setSeachFor] = useState({})

    return (
        <>
            <ModuleHeader searchFor={searchFor} setSeachFor={setSeachFor} title='Training' />
            <section className="my-4 w-full grid grid-cols-4 gap-5">
                {Trainings?.map((item) => {
                    return (
                        <Training item={item} key={item?.id} />
                    )
                })}
            </section>
        </>
    )
}

export default TrainingLayout;