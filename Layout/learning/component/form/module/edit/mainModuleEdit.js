import ModuleTabsList from './moduletabslist'
import { Tab } from '@headlessui/react'
import ModuleForm from './moduleForm'
import PrimaryButton from '@/components/custom/Buttons/PrimaryButton';

const MainModuleEdit = (props) => {
    const { listofModule, IsAssessment, handleModuleName, ModuleFieldValue, moduleVideoInput } = props
    return (
        <div className='w-full'>
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
            <div className='flex justify-end fixed bottom-0 right-5'>
            <PrimaryButton className='rounded-lg'>
                    <span>Add Module</span>
                </PrimaryButton>
            </div>
        </div>
    )
}

export default MainModuleEdit