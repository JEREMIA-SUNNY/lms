import AssessmentSection from "./section";


const EditAssessment = (props) => {
    const { createQuestionForm, setListOfSection, handleAllQuestionInfo, listofSection } = props

    const addSection = () => {
        setListOfSection([...listofSection, { questions: [] }])
    }

    const rmSection = () => {
        setListOfSection(listofSection.slice(0, -1))
    }

    return (
        <div className="w-full">
            <div className="mt-4 flex justify-between items-center">
                <h6 className="block mb-2  text-textSecondary font-semibold">Create Assesment</h6>
                <div className="flex justify-start items-center">
                    <button onClick={rmSection} type="button" className="mr-2 text-textSecondary border border-gray-300 focus:ring-1 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                        </svg>

                        <span className="sr-only">Icon remove</span>
                    </button>
                    <button onClick={addSection} type="button" className="mr-2 text-textSecondary border border-gray-300 focus:ring-1 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>

                        <span className="sr-only">Icon add</span>
                    </button>
                </div>
            </div>
            {
                listofSection?.map((item, i) => {
                    return (
                        <AssessmentSection key={i}
                            listofSection={listofSection}
                            setListOfSection={setListOfSection}
                            handleAllQuestionInfo={handleAllQuestionInfo}
                            createQuestionForm={createQuestionForm}
                            sItem={item} sIndex={i} />
                    )
                })
            }
        </div>
    )
}

export default EditAssessment;