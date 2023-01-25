import { useState } from "react";
import studentList from 'assets/mokedata/student.json'
import StudentAddForm from "./studentAddForm";

const MainAddStudentInBatch = () => {
    const [selectedstudent, setSelectedStudent] = useState([])
    const [searchFor, setSeachFor] = useState({})

    return (
        <>
            <StudentAddForm searchFor={searchFor} setSeachFor={setSeachFor} studentList={studentList} />
        </>
    )
}

export default MainAddStudentInBatch;