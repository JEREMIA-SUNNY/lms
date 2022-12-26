import { useState } from 'react'
import { Tab } from '@headlessui/react'
import Tablist from '../../../../../components/custom/TabList'
import CreateTrainingFrom from './createTraining'
import MainAddAssessment from '../assessment/mainAddAssessment'

const tablist = ['Training detail', 'Batches', 'Start Assesment']

const MainTrainingCreate = () => {
    const [trainingInfo, setTrainingInfo] = useState({ section: 1, module: 1, IsAssessment: true })
    const [listofSection, setListOfSection] = useState([])
    const [IsAssessment, setIsAssessment] = useState(false)

    const handleTrainingInput = (e) => {
        const { value, name } = e.target
        setTrainingInfo({ ...trainingInfo, [name]: value })
    }

    const createQuestionForm = (e) => {
        const { value, name, id } = e.target
        let copyprelist = listofSection
        copyprelist[Number(id)] = { questions: [] }
        Array.from(Array(Number(value)).keys()).forEach((element, i) => {
            copyprelist[Number(id)]['questions'].push({})
        });
        setListOfSection([...copyprelist])
    }

    const handleAllQuestionInfo = (e, sIndex) => {
        const { value, name, id } = e.target
        const copyprelist = listofSection
        let question = copyprelist[sIndex]
        question['questions'][Number(id)] = { ...question['questions'][Number(id)], [name]: value }
    }

    const handlefile = (file) => {
        setTrainingInfo({ ...trainingInfo, thumbnail: file })
    }

    console.log(trainingInfo)
    return (
        <div className="w-full overflow-scroll h-full">
            <Tab.Group>
                <Tablist trainingInfo={trainingInfo} list={IsAssessment ? tablist : ['Training detail', 'Batches']} />
                <Tab.Panels className='h-[90%]'>
                    <Tab.Panel className='h-full'>
                        <CreateTrainingFrom
                            handlefile={handlefile}
                            IsAssessment={IsAssessment}
                            setIsAssessment={setIsAssessment}
                            trainingInfo={trainingInfo}
                            handleInput={handleTrainingInput} />
                    </Tab.Panel>
                    <Tab.Panel className='h-full'>
                        {/* <MainModuleCreate handleModuleName={handleModuleName}
                            ModuleFieldValue={ModuleFieldValue}
                            moduleVideoInput={moduleVideoInput}
                            trainingInfo={trainingInfo}
                            listofModule={listofModule} /> */}
                    </Tab.Panel>
                    {IsAssessment ? <Tab.Panel className='h-full'>
                        <MainAddAssessment
                            trainingInfo={trainingInfo}
                            handleInput={handleTrainingInput}
                            listofSection={listofSection}
                            setListOfSection={setListOfSection}
                            createQuestionForm={createQuestionForm}
                            handleAllQuestionInfo={handleAllQuestionInfo}
                        />
                    </Tab.Panel> : ''}
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}

export default MainTrainingCreate;