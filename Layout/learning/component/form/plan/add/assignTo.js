
import { useMemo, useState } from 'react'
import assignTo from '@/assets/mokedata/assignTo.json'
import MultiSelect from 'components/MultiSelect'

const AssignTo = ({ handleInput, planPayload }) => {
    const [users, setusers] = useState([])
    const [searchFor, setSeachFor] = useState({})
    const [selectedUserList, setSelectedUsersList] = useState([])

    useMemo(() => {
        setSelectedUsersList([])
        const result = assignTo?.assignTo?.filter((item => item?.type === planPayload.assignToCat))
        if (result?.length) {
            setusers(result[0]['users'])
        }
    }, [planPayload.assignToCat])

    useMemo(() => {
        if (searchFor?.email) {
            setSelectedUsersList([...selectedUserList, searchFor.email])
        }
        
    }, [searchFor?.email])

    const removeSelected = (itemselected)=>{
        let rm = selectedUserList.filter(item => item !== itemselected?.email)
        setSelectedUsersList([...rm])
    }

    return (
        <>
            <div className='w-1/2'>
                <label htmlFor="assignToCat" className="block mb-2 text-sm font-semibold text-gray-900">Assign To Category</label>
                <select onChange={handleInput} name='assignToCat' className="outline-gray-200 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5">
                    {assignTo?.assignTo?.map((item, i) => {
                        return (
                            <option key={i} value={item?.type}>{item?.type}</option>
                        )
                    })}
                </select>
            </div>
            <div className='w-1/2'>
                <label htmlFor="users" className="block mb-2 text-sm font-semibold text-gray-900">Select users</label>
                <MultiSelect
                    removeSelected={removeSelected}
                    selected={searchFor} setSelected={setSeachFor}
                    title={'Search users'}
                    selectedList={selectedUserList}
                    list={users} keyname='email' />
            </div>
        </>

    )
}

export default AssignTo;