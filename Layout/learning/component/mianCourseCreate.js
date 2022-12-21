import { useState } from 'react'
import { Tab } from '@headlessui/react'
import CourseForm from './form/course/courseForm'
import Tablist from '../../../components/custom/TabList'

const tablist = ['Course detail', 'Modules', 'Start Assesment']

const MainCourseCreate = () => {
    const [courseInfo, setCourseInfo] = useState({})
    const [addcourseInfo, setAddcourseInfo] = useState(null)

    const handleInput = (e) => {
        const { value, name } = e.target
        setCourseInfo({ ...courseInfo, [name]: value })
    }

    return (
        <div className="w-full overflow-scroll h-full">
            {addcourseInfo ? <Tab.Group>
                <Tablist list={tablist} />
                <Tab.Panels>
                    <Tab.Panel>
                        <CourseForm handleInput={handleInput} />
                        <div className='flex justify-end'>
                            <button onClick={() => { setAddcourseInfo(courseInfo) }} type="button" className="flex items-center mt-2 py-2 px-3 text-[#419a00] border border-[#419a00] rounded-lg focus:ring-1 focus:outline-none focus:ring-green-600">
                                <span className='mr-2'>Add course</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>
                            </button>
                        </div>
                    </Tab.Panel>
                    <Tab.Panel>
                        <h1>Module</h1>
                    </Tab.Panel>
                    <Tab.Panel>
                        <h1>start ass</h1>
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group> : <>
                <CourseForm handleInput={handleInput} />
                <div className='flex justify-end'>
                    <button onClick={() => { setAddcourseInfo(courseInfo) }} type="button" className="flex items-center mt-2 py-2 px-3 text-[#419a00] border border-[#419a00] rounded-lg focus:ring-1 focus:outline-none focus:ring-green-600">
                        <span className='mr-2'>Add course</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                    </button>
                </div>
            </>}
        </div>
    )
}

export default MainCourseCreate;