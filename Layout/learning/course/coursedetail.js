import { useRouter } from "next/router";
import DetailHeader from './detailHeader'
import CourseModule from './courseModule'
import CourseAction from "./courseAction";
import courses from '@/assets/mokedata/courses.json'
import IconButton from "components/custom/Buttons/IconButton";

const CourseDetailLayout = () => {
    const route = useRouter()
    const { query: { id } } = route
    const course = courses[Number(id) - 1]

    return (
        <>
            <CourseAction />
            <section className="my-4 w-full bg-white p-4 shadow rounded-lg border border-[#419a00]">
                <DetailHeader course={course} id={id} />
                {course?.price === "0" ? [1, 2, 3, 4, 5, 6].map((item) => {
                    return (
                        <CourseModule key={item} id={item} />
                    )
                }) :
                    <div className="w-full h-[400px] flex justify-center items-center">
                        <div>
                            <p>This is a paid course. Please complete the payment to unlock the course.</p>
                            <div className="mt-2 flex justify-center">
                                <IconButton className='rounded bg-green-600 text-white'>
                                    Pay  $ {course?.price}  Now
                                </IconButton>
                            </div>
                        </div>
                    </div>
                }
            </section>
        </>
    )
}

export default CourseDetailLayout;