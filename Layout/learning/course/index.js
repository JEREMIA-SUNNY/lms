import Course from "./card";
import ModuleHeader from '../component/modileHeader'
import Courses from '../../../assets/mokedata/courses.json'
import { useState } from "react";

const CourseLayout = () => {
    const [searchFor, setSeachFor] = useState({})
    return (
        <>
            <ModuleHeader searchFor={searchFor} setSeachFor={setSeachFor} title='Course' />
            <section className="my-4 w-full grid grid-cols-4 gap-5">
                {Courses?.map((item) => {
                    return (
                        <Course item={item} key={item?.id} />
                    )
                })}
            </section>
        </>
    )
}

export default CourseLayout;