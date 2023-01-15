
import { useMemo, useState } from 'react'
import courses from '@/assets/mokedata/courses.json'
import trainings from '@/assets/mokedata/trainings.json'
import MultiSelect from 'components/MultiSelect'
import CourseTrainingCard from './courseTrainingCard'

const TrainingCourseForm = () => {
    const [searchFor, setSeachFor] = useState({})
    const [selectedListId, setSelectedListId] = useState([])
    const [selectedCourseList, setSelectedCourseList] = useState([])
    const [selectedTrainingList, setSelectedTrainingList] = useState([])
    const [type, setType] = useState('Course')

    useMemo(() => {
        if (searchFor.name) {
            setSelectedListId([...selectedListId, searchFor?.name])
            if (type === 'Course') {
                setSelectedCourseList([...selectedCourseList, searchFor])
            } else {
                setSelectedTrainingList([...selectedTrainingList, searchFor])
            }
        }

    }, [searchFor])


    const removeSelected = (itemselected) => {
        let rmId = selectedListId.filter(item => item !== itemselected.name)
        let rmC = selectedCourseList.filter(item => item?.name !== itemselected.name)
        let rmT = selectedTrainingList.filter(item => item?.name !== itemselected.name)
        setSelectedListId([...rmId])
        setSelectedTrainingList([...rmT])
        setSelectedCourseList([...rmC])
    }

    return (
        <>
            <div className='flex w-full gap-4'>
                <div className='w-1/2 mt-1 ml-2'>
                    <label htmlFor="users" className="block mb-2 text-sm font-semibold text-gray-900"> Select component</label>
                    <select value={type} onChange={(e) => {
                        setType(e.target.value)
                        setSeachFor({})

                    }} name={'type'} className="outline-gray-200 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5">
                        <option value='Course'>Course</option>
                        <option value='Training'>Training</option>
                    </select>
                </div>
                <div className='w-1/2'>
                    <label htmlFor="users" className="block mb-2 text-sm font-semibold text-gray-900">Select {type}</label>
                    <MultiSelect
                        selected={searchFor} setSelected={setSeachFor}
                        title={type}
                        removeSelected={removeSelected}
                        selectedList={selectedListId}
                        list={type === 'Course' ? courses : trainings} keyname='name' />
                </div>
            </div>
            <div className='w-full mt-2'>
                <div className='grid grid-cols-4 gap-2'>
                    {
                        selectedCourseList.concat(selectedTrainingList)?.map((item, index) => {
                            return (<CourseTrainingCard removeSelected={removeSelected}
                                length={selectedCourseList.concat(selectedTrainingList)?.length}
                                key={item?.name}
                                item={item} index={index} />)
                        })
                    }
                </div>
            </div>
        </>


    )
}

export default TrainingCourseForm;