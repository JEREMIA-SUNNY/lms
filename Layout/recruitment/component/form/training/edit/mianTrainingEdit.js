import { useState } from 'react'
import { Tab } from '@headlessui/react'
import Tablist from '@/components/custom/TabList'
import EditTrainingFrom from './editTraining'
import MainAssessment from './assessment'
import EditOrAddBatchComponents from '../../batches/EditOrAddBatchComponents'

const tablist = ['Training Details', 'Batches', 'Assessment Details']

const MainTrainingEdit = () => {
    const [trainingInfo, setTrainingInfo] = useState({ section: 1, module: 1, IsAssessment: true })
    const [listofSection, setListOfSection] = useState([])
    const [IsAssessment, setIsAssessment] = useState(false)
    const [IsTrainingPaid, setIsTrainingPaid] = useState(false)
    const [IsBatchePaid, setIsBatchePaid] = useState(false)
    const [batchInfo, setbatchInfo] = useState({})
    const [batchSession, setBatchSession] = useState([])

    const handlebatchInfo = (e) => {
        const { name, value, id } = e.target
        setbatchInfo({ ...batchInfo, [name]: value })
    }

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

    return (
        <div className="w-full overflow-scroll h-full">
            <Tab.Group>
                <div className='w-full mb-2'>
                <Tablist trainingInfo={trainingInfo} list={IsAssessment ? tablist : ['Training Details', 'Batches']} />
                </div>
                <Tab.Panels className='h-[90%]'>
                    <Tab.Panel className='h-full'>
                        <EditTrainingFrom
                            IsTrainingPaid={IsTrainingPaid}
                            setIsTrainingPaid={setIsTrainingPaid}
                            handlefile={handlefile}
                            IsAssessment={IsAssessment}
                            setIsAssessment={setIsAssessment}
                            trainingInfo={trainingInfo}
                            handleInput={handleTrainingInput} />
                    </Tab.Panel>
                    <Tab.Panel className='h-full'>
                        <EditOrAddBatchComponents 
                            batchInfo={batchInfo}
                            batchSession={batchSession}
                            IsBatchePaid={IsBatchePaid}
                            setIsBatchePaid={setIsBatchePaid}
                            setBatchSession={setBatchSession}
                            handlebatchInfo={handlebatchInfo} />
                    </Tab.Panel>
                    {IsAssessment ? <Tab.Panel className='h-full'>
                        <MainAssessment
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

export default MainTrainingEdit;