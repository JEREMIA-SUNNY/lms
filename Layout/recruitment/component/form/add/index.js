import { Tab } from "@headlessui/react";
import Tablist from "components/custom/TabList";
import { useState } from "react";
import JobDetailForm from "./jobDetailForm";
import ResponsibilitiesSummary from "./ResponsibilitiesSummary";
import Responsibilities from './ResponsibilitiesForm'
import PrimaryButton from "components/custom/Buttons/PrimaryButton";

const MainAddJobForm = () => {
    const [skills, setSkills] = useState([])
    const [Technology, setTechnology] = useState([])
    const [responsibilities, setResponsibilities] = useState([{}])

    const handleInput = (e) => {
        // const { name, value } = e.target
    }

    return (
        <div className="w-full">
            <Tab.Group>
                <div className="w-1/2">
                    <Tablist list={['Job Details', 'Job Responsibilities']} />
                </div>
                <Tab.Panels>
                    <Tab.Panel>
                        <JobDetailForm
                            skills={skills}
                            setSkills={setSkills}
                            Technology={Technology}
                            setTechnology={setTechnology}
                            handleInput={handleInput}
                        />
                    </Tab.Panel>
                    <Tab.Panel>
                        <ResponsibilitiesSummary handleInput={handleInput} />
                        <Responsibilities
                            responsibilities={responsibilities}
                            setResponsibilities={setResponsibilities}
                        />
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
            <div className='flex justify-end fixed bottom-0 right-5'>
                <PrimaryButton className='rounded-lg'>
                    <span>Create</span>
                </PrimaryButton>
            </div>
        </div>
    )
}

export default MainAddJobForm;