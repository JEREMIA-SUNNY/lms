import { useRouter } from "next/router";
import DetailHeader from './detailHeader'
import CourseModule from './courseModule'
import CourseAction from "./courseAction";

const CourseDetailLayout = () => {
    const route = useRouter()
    const { query } = route

    return (
        <>
            <CourseAction />
            <section className="my-4 w-full bg-white p-4 shadow rounded-lg border border-[#419a00]">
                <DetailHeader id={query?.id} />
                {
                    [1, 2, 3, 4, 5, 6].map((item) => {
                        return (
                            <CourseModule key={item} id={item} />
                        )
                    })
                }
            </section>
        </>
    )
}

export default CourseDetailLayout;