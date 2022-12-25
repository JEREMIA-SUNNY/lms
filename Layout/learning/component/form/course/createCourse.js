
import CourseForm from './courseForm';

const CreateCourseFrom = ({ handleInput, courseInfo }) => {
    return (
        <div className="w-full h-full flex flex-col justify-between">
            <CourseForm courseInfo={courseInfo} handleInput={handleInput} />
            <div className='flex justify-end'>
                <button type="button" className="flex items-center mt-2 py-2 px-3 text-[#419a00] border border-[#419a00] rounded-lg focus:ring-1 focus:outline-none focus:ring-green-600">
                    <span className='mr-2'>Add course</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default CreateCourseFrom;