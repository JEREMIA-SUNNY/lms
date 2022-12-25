import { useCallback, useMemo, useState } from 'react'
import { Tab } from '@headlessui/react'
import Tablist from '../../../../../components/custom/TabList'
import CreateCourseFrom from './createCourse'
import MainModuleCreate from '../module/mainModuleCreate'

const tablist = ['Course detail', 'Modules', 'Start Assesment']

const MainCourseCreate = () => {
    const [courseInfo, setCourseInfo] = useState({ module: 1, IsAssessment: true })
    const [listofModule, setListOfModule] = useState([])

    // over here it controls the module tabs
    useMemo(() => {
        let copyprelist = listofModule
        if (listofModule?.length > Number(courseInfo?.module)) {
            copyprelist.splice(0, Number(courseInfo?.module))
            setListOfModule([...copyprelist])
            return
        } else {
            Array.from(Array(Number(courseInfo?.module)).keys()).forEach((element, i) => {
                if (copyprelist?.length < Number(courseInfo?.module)) {
                    copyprelist.push({ modulename: '', videos: [] })
                }
            });
            setListOfModule([...copyprelist])
            return
        }
    }, [courseInfo?.module])

    const handleCourseInput = (e) => {
        const { value, name } = e.target
        setCourseInfo({ ...courseInfo, [name]: value })
    }

    const handleModuleName = (e) => {
        const { value, name, id } = e.target
        const copymodule = listofModule
        if (copymodule[id]) {
            copymodule[id] = { [name]: value, videos: [] }
        }
        setListOfModule([...copymodule])
    }

    const ModuleFieldValue = (e) => {
        const { value, name, id } = e.target
        const copymodule = listofModule
        if (copymodule[id]) {
            copymodule[id] = { ...copymodule[id], [name]: value }
        }
        setListOfModule([...copymodule])
    }

    const moduleVideoInput = (e, listIndex) => {
        const copymodule = listofModule
        const { value, name, id } = e.target
        const pointvideo = copymodule[listIndex]['videos'][Number(id)]
        copymodule[listIndex]['videos'][Number(id)] = { ...pointvideo, [name]: value }
        setListOfModule(copymodule)
    }

    console.log(courseInfo)

    return (
        <div className="w-full overflow-scroll h-full">
            <Tab.Group>
                <Tablist courseInfo={courseInfo} list={courseInfo?.IsAssessment ? tablist : ['Course detail', 'Modules']} />
                <Tab.Panels className='h-[90%]'>
                    <Tab.Panel className='h-full'>
                        <CreateCourseFrom
                            courseInfo={courseInfo}
                            handleInput={handleCourseInput} />
                    </Tab.Panel>
                    <Tab.Panel className='h-full'>
                        <MainModuleCreate handleModuleName={handleModuleName}
                            ModuleFieldValue={ModuleFieldValue}
                            moduleVideoInput={moduleVideoInput}
                            courseInfo={courseInfo}
                            listofModule={listofModule} />
                    </Tab.Panel>
                    {courseInfo?.IsAssessment ? <Tab.Panel className='h-full'>
                        <h1>start ass</h1>
                    </Tab.Panel> : ''}
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}

export default MainCourseCreate;