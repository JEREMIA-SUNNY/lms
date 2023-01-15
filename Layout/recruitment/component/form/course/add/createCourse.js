
import CourseForm from './courseForm';
import PrimaryButton from '@/components/custom/Buttons/PrimaryButton';

const CreateCourseFrom = ({ handleInput, courseInfo, IsAssessment, setIsAssessment, IsCoursePaid, setIsCoursePaid, handlefile }) => {
    return (
        <div className="w-full h-full flex flex-col justify-between">
            <CourseForm courseInfo={courseInfo}
                IsAssessment={IsAssessment}
                setIsAssessment={setIsAssessment}
                IsCoursePaid={IsCoursePaid}
                setIsCoursePaid={setIsCoursePaid}
                handlefile={handlefile}
                handleInput={handleInput} />
            <div className='flex justify-end fixed bottom-0 right-5'>
            <PrimaryButton className='rounded-lg'>
                    <span>Add course</span>
                </PrimaryButton>
            </div>
        </div>
    )
}

export default CreateCourseFrom;