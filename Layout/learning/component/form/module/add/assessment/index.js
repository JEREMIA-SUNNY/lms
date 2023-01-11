import AddAssessment from "./AddAssessment"
import { Tab } from '@headlessui/react'
import ModuleTabsList from "../moduletabslist"
import PrimaryButton from '@/components/custom/Buttons/PrimaryButton';

const MainAssessment = (props) => {
    const { trainingInfo,
        handleTrainingInput,
        listofSection,
        setListOfSection,
        createQuestionForm,
        handleAllQuestionInfo, listofModule } = props

    return (
        <div className="w-full">
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
            <div className='flex justify-end fixed bottom-0 right-5'>
            <PrimaryButton className='rounded-lg'>
                    <span>Add Assessment</span>
                </PrimaryButton>
            </div>

        </div>
    )
}

export default MainAssessment