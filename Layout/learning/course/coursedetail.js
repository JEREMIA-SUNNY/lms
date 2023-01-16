import { useRouter } from "next/router";
import DetailHeader from './detailHeader'
import CourseModule from './courseModule'
import CourseAction from "./courseAction";
import courses from '@/assets/mokedata/courses.json'
import CheckoutSummery from "@/components/custom/checkoutSummery";

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
                    <div className="w-full flex justify-center">
                        <CheckoutSummery
                            title=''
                            itemList={[]}
                            subtotal='100'
                            discout='20'
                            discoutInPer="20"
                            total={course?.price}
                        />
                    </div>
                }
            </section>
        </>
    )
}

export default CourseDetailLayout;