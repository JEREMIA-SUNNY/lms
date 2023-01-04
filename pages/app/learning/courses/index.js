import { CoursesLayout } from "Layout";
import { useEffect, useState } from "react";
import { MakeProtectedApiCall } from "utils/api";
import getHeaders from "utils/getHeaders";

const Coursespage = () => {
    const [courses, setCourses] = useState([])
    
    const getCourses = async ()=>{
        let url  = 'https://mocki.io/v1/d7995c41-2de4-4831-afdd-4367036a47a3'
        const res = await MakeProtectedApiCall(url, 'GET', getHeaders())
        setCourses(res.data)
    }

    useEffect(()=>{
        getCourses()
    },[])

    return (
        <>
            <CoursesLayout courses={courses} />
        </>
    )
}

export default Coursespage;