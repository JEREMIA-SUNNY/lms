import { Tab } from "@headlessui/react";
import PrimaryButton from "@/components/custom/Buttons/PrimaryButton";
import Tablist from "@/components/custom/TabList";
import BatchesForm from "./batchesform";
import Sessions from './session/session'
import MainAddStudentInBatch from "./student";

const BatchesAdd = (props) => {
    const { handlebatchInfo, batchSession, setBatchSession, IsBatchePaid, setIsBatchePaid } = props

    return (
        <>
            <BatchesForm
                batchSession={batchSession}
                IsBatchePaid={IsBatchePaid}
                setIsBatchePaid={setIsBatchePaid}
                setBatchSession={setBatchSession}
                handlebatchInfo={handlebatchInfo} />
            <div className="my-4">
                <Tab.Group>
                    <div className="w-[300px]">
                        <Tablist list={['Sessions', 'Students']} />
                    </div>
                    <Tab.Panels>
                        <Tab.Panel>
                            <Sessions batchSession={batchSession}
                                setBatchSession={setBatchSession} />
                        </Tab.Panel>
                        <Tab.Panel>
                            <MainAddStudentInBatch />
                        </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </div>

            <div className='flex justify-end fixed bottom-0 right-5'>
                <PrimaryButton className='rounded-lg '>
                    <span>Add Batch</span>
                </PrimaryButton>
            </div>
        </>
    )
}

export default BatchesAdd;