import AddAssessment from "./AddAssessment"
import { Tab } from '@headlessui/react'
import ModuleTabsList from "../moduletabslist"

const MainAssessment = (props) => {
    const { trainingInfo,
        handleTrainingInput,
        listofSection,
        setListOfSection,
        createQuestionForm,
        handleAllQuestionInfo, listofModule } = props

    return (
        <>
            <Tab.Group>
                <ModuleTabsList listofModule={listofModule} />
                <Tab.Panels className='h-[90%]'>
                    {
                        listofModule.map((module, i) => {
                            return (
                                <Tab.Panel key={i} className='h-full'>
                                    <AddAssessment
                                        module={module}
                                        trainingInfo={trainingInfo}
                                        handleInput={handleTrainingInput}
                                        listofSection={listofSection}
                                        setListOfSection={setListOfSection}
                                        createQuestionForm={createQuestionForm}
                                        handleAllQuestionInfo={handleAllQuestionInfo}
                                    />
                                </Tab.Panel>
                            )
                        })
                    }
                </Tab.Panels>
            </Tab.Group>

        </>
    )
}

export default MainAssessment