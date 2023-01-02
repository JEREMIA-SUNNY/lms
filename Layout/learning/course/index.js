import Course from "./card";
import ModuleHeader from '../component/modileHeader'
import Courses from '../../../assets/mokedata/courses.json'

const CourseLayout = () => {

    return (
        <>
            <ModuleHeader title='Course' />
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