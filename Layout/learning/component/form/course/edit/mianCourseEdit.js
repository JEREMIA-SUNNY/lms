import { useMemo, useState } from 'react'
import { Tab } from '@headlessui/react'
import Tablist from 'components/custom/TabList'
import EditCourseFrom from './editCourse'
import MainAssessment from '../../module/edit/assessment'
import MainModuleEdit from '../../module/edit/mainModuleEdit'

const tablist = ['Course Details', 'Module Details', 'Assessment Details']

const MainCourseEdit = () => {
    const [courseInfo, setCourseInfo] = useState({ section: 1, module: 1, IsAssessment: "Yes" })
    const [listofModule, setListOfModule] = useState([{ questions: [] }])
    const [listofSection, setListOfSection] = useState([])
    const [IsAssessment, setIsAssessment] = useState('Yes')
    const [IsCoursePaid, setIsCoursePaid] = useState('No')

    // over here it controls the module tabs
    useMemo(() => {
        let copyprelist = listofModule
        if (listofModule?.length > Number(courseInfo?.module)) {
            copyprelist.splice(0, Number(courseInfo?.module))
            setListOfModule([...copyprelist])
            setCourseInfo({ ...courseInfo, modules: copyprelist })
            return
        } else {
            Array.from(Array(Number(courseInfo?.module)).keys()).forEach((element, i) => {
                if (copyprelist?.length < Number(courseInfo?.module)) {
                    copyprelist.push({ modulename: '', videos: [] })
                }
            });
            setListOfModule([...copyprelist])
            setCourseInfo({ ...courseInfo, modules: copyprelist })
            return
        }
    }, [courseInfo?.module])

    const handleCourseInput = (e) => {
        const { value, name } = e.target
        setCourseInfo({ ...courseInfo, [name]: value, modules: listofModule })
    }

    const handleModuleName = (e) => {
        const { value, name, id } = e.target
        const copymodule = listofModule
        if (copymodule[id]) {
            copymodule[id] = { [name]: value, videos: [] }
        }
        setListOfModule([...copymodule])
        setCourseInfo({ ...courseInfo, modules: copymodule })
    }

    const ModuleFieldValue = (e) => {
        const { value, name, id } = e.target
        const copymodule = listofModule
        if (copymodule[id]) {
            copymodule[id] = { ...copymodule[id], [name]: value }
        }
        setListOfModule([...copymodule])
        setCourseInfo({ ...courseInfo, modules: copymodule })
    }

    const moduleVideoInput = (e, listIndex) => {
        const copymodule = listofModule
        const { value, name, id } = e.target
        const pointvideo = copymodule[listIndex]['videos'][Number(id)]
        copymodule[listIndex]['videos'][Number(id)] = { ...pointvideo, [name]: value }
        setListOfModule(copymodule)
        setCourseInfo({ ...courseInfo, modules: copymodule })
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
        setCourseInfo({ ...courseInfo, thumbnail: file })
    }

    return (
        <div className="w-full overflow-scroll h-full">
            <Tab.Group>
                <Tablist list={IsAssessment === 'Yes' ? tablist : ['Course Details', 'Module Details']} />
                <Tab.Panels className='h-[90%]'>
                    <Tab.Panel className='h-full'>
                        <EditCourseFrom
                            handlefile={handlefile}
                            IsAssessment={IsAssessment}
                            IsCoursePaid={IsCoursePaid}
                            setIsAssessment={setIsAssessment}
                            setIsCoursePaid={setIsCoursePaid}
                            courseInfo={courseInfo}
                            handleInput={handleCourseInput} />
                    </Tab.Panel>
                    <Tab.Panel className='h-full'>
                        <MainModuleEdit handleModuleName={handleModuleName}
                            ModuleFieldValue={ModuleFieldValue}
                            moduleVideoInput={moduleVideoInput}
                            IsAssessment={IsAssessment}
                            listofModule={listofModule} />
                    </Tab.Panel>
                    {IsAssessment === 'Yes' ? <Tab.Panel className='h-full'>
                        <MainAssessment
                            listofModule={listofModule}
                            courseInfo={courseInfo}
                            handleCourseInput={handleCourseInput}
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

export default MainCourseEdit;