
import { useMemo, useState } from 'react'
import assignTo from '@/assets/mokedata/assignTo.json'
import MultiSelect from 'components/MultiSelect'
import AutoComplete from 'components/AutoComplete'
import courses from '@/assets/mokedata/courses.json'

const AssignTo = ({ handleInput, planPayload }) => {
    const [users, setusers] = useState([])
    const [searchFor, setSeachFor] = useState({})
    const [selectedUserList, setSelectedUsersList] = useState([])

    useMemo(() => {
        const result = assignTo?.assignTo?.filter((item => item?.type === planPayload.assignToCat))
        if (result?.length) {
            setusers(result[0]['users'])
        }
    }, [planPayload.assignToCat])

    return (
        <>
            <div>
                <label htmlFor="assignToCat" className="block mb-2 text-sm font-semibold text-gray-900">Select Course</label>
                <AutoComplete title={'Select Course'} list={courses} keyname='name' selected={searchFor} setSelected={setSeachFor} />
            </div>
        </>

    )
}

export default AssignTo;