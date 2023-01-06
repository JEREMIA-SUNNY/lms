
import { useMemo, useState } from 'react'
import courses from '@/assets/mokedata/courses.json'
import trainings from '@/assets/mokedata/trainings.json'
import MultiSelect from 'components/MultiSelect'

const TrainingCourseForm = () => {
    const [searchFor, setSeachFor] = useState({})
    const [selectedCourseList, setSelectedCourseList] = useState([])
    const [selectedTrainingList, setSelectedTrainingList] = useState([])
    const [type, setType] = useState('Course')

    useMemo(() => {
        if (searchFor?.name) {
            let list = type === 'Course' ? selectedCourseList : selectedTrainingList
            let rm = list.filter(item => item?.id !== searchFor?.id)
            let allreadyThere = list.filter(item => item?.id === searchFor?.id)
            if (allreadyThere?.length) {
                if (type === 'Course') {
                    setSelectedCourseList([...rm])
                } else {
                    setSelectedTrainingList([...rm])
                }
            } else {
                if (type === 'Course') {
                    setSelectedCourseList([...selectedCourseList, searchFor])
                } else {
                    setSelectedTrainingList([...selectedTrainingList, searchFor])
                }
            }
        }

    }, [searchFor])

    // console.log(type, selectedTrainingList, 'selectedTrainingList')
    // console.log(type, selectedCourseList, 'selectedCourseList');

    return (
        <>
            <div className='w-1/4'>
                <label htmlFor="Type" className="block mb-2 text-sm font-semibold text-gray-900">Select Course/Training</label>
                <select value={type} onChange={(e) => { setType(e.target.value) }} name={'type'} className="outline-gray-200 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5">
                    <option>Select ... </option>
                    <option value='Course'>Course</option>
                    <option value='Training'>Training</option>
                </select>
            </div>
            <div className='w-3/4'>
                <label htmlFor="users" className="block mb-2 text-sm font-semibold text-gray-900">Select {type}</label>
                {type === 'Course' ? <MultiSelect
                    selected={searchFor} setSelected={setSeachFor}
                    title={`Select Course`}
                    selectedList={selectedCourseList}
                    list={courses} keyname='name' /> :
                    <MultiSelect
                        selected={searchFor} setSelected={setSeachFor}
                        title={`Select Training`}
                        selectedList={selectedCourseList}
                        list={trainings} keyname='name' />
                }
            </div>
        </>

    )
}

export default TrainingCourseForm;