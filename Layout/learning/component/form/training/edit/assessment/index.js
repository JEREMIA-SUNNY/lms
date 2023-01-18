import PrimaryButton from "components/custom/Buttons/PrimaryButton"
import EditAssessment from "./EditAssessment"

const MainAssessment = (props) => {
    const { createQuestionForm, listofSection, setListOfSection, handleAllQuestionInfo, courseInfo, handleCourseInput } = props

    return (
        <>
            <EditAssessment
                courseInfo={courseInfo}
                handleInput={handleCourseInput}
                listofSection={listofSection}
                setListOfSection={setListOfSection}
                createQuestionForm={createQuestionForm}
                handleAllQuestionInfo={handleAllQuestionInfo}
            />
             <div className='flex justify-end fixed bottom-0 right-5'>
                <PrimaryButton className='rounded-lg'>
                    <span>Edit Assessment</span>
                </PrimaryButton>
            </div>
        </>
    )
}

export default MainAssessment