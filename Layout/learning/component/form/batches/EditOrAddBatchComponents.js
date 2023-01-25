import Tablist from "components/custom/TabList";
import { Tab } from "@headlessui/react";
import BatchesAdd from "./add";
import BatchesEdit from "./edit";

const EditOrAddBatchComponents = (props) => {
    const { handlebatchInfo, batchSession, setBatchSession, IsBatchePaid, setIsBatchePaid, batchInfo } = props

    return (
        <Tab.Group>
            <div className="w-[200px]">
                <Tablist list={['Edit', 'Add']} />
            </div>
            <Tab.Panels>
                <Tab.Panel>
                    <BatchesEdit batchInfo={batchInfo}
                        batchSession={batchSession}
                        IsBatchePaid={IsBatchePaid}
                        setIsBatchePaid={setIsBatchePaid}
                        setBatchSession={setBatchSession}
                        handlebatchInfo={handlebatchInfo} />
                </Tab.Panel>
                <Tab.Panel>
                    <BatchesAdd batchInfo={batchInfo}
                        batchSession={batchSession}
                        IsBatchePaid={IsBatchePaid}
                        setIsBatchePaid={setIsBatchePaid}
                        setBatchSession={setBatchSession}
                        handlebatchInfo={handlebatchInfo} />
                </Tab.Panel>
            </Tab.Panels>

        </Tab.Group>
    )
}

export default EditOrAddBatchComponents;