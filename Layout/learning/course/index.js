import Course from "./card";
import ModuleHeader from '../component/modileHeader'

const CourseLayout = () => {

    return (
        <>
            <ModuleHeader title='Course' />
            <section className="my-4 w-full grid grid-cols-4 gap-5">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((item) => {
                    return (
                        <Course id={item} key={item} />
                    )
                })}
            </section>
        </>
    )
}

export default CourseLayout;