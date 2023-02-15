import Course from "./card";
import ModuleHeader from '../component/modileHeader'
import Courses from 'assets/mokedata/courses.json'
import { useState } from "react";

const CourseLayout = ({ courses = Courses }) => {
    const [searchFor, setSeachFor] = useState({})

    return (
        <>
        <ModuleHeader searchFor={searchFor} setSeachFor={setSeachFor} title='Course' />
        <section className="my-4 w-full grid sm:grid-cols-4 2xl:grid-cols-5 gap-5">
            {courses?.map((item) => {
                return (
                    <Course item={item} key={item?.id} />
                )
            })}
        </section>
        </>
    )
}

export default CourseLayout;