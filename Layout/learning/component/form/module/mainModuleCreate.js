import ModuleTabsList from './moduletabslist'
import { Tab } from '@headlessui/react'
import ModuleForm from './moduleForm'

const MainModuleCreate = ({ listofModule, IsAssessment, handleModuleName, ModuleFieldValue, moduleVideoInput }) => {

    return (
        <Tab.Group>
            <ModuleTabsList listofModule={listofModule} />
            <Tab.Panels className='h-[90%]'>
                {
                    listofModule.map((item, i) => {
                        return (
                            <Tab.Panel key={i} className='h-full'>
                                <ModuleForm handleModuleName={handleModuleName}
                                    IsAssessment={IsAssessment}
                                    moduleVideoInput={moduleVideoInput}
                                    ModuleFieldValue={ModuleFieldValue} item={item} index={i} />
                            </Tab.Panel>
                        )
                    })
                }
            </Tab.Panels>
        </Tab.Group>
    )
}

export default MainModuleCreate