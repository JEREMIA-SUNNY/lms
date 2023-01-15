import AddAssessment from "./AddAssessment"

const MainAssessment = (props) => {
    const { createQuestionForm, listofSection, setListOfSection, handleAllQuestionInfo, courseInfo, handleCourseInput } = props

    return (
        <>
            <AddAssessment
                courseInfo={courseInfo}
                handleInput={handleCourseInput}
                listofSection={listofSection}
                setListOfSection={setListOfSection}
                createQuestionForm={createQuestionForm}
                handleAllQuestionInfo={handleAllQuestionInfo}
            />
        </>
    )
}

export default MainAssessment