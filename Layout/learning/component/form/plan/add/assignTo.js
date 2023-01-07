
import { useMemo, useState } from 'react'
import assignTo from '@/assets/mokedata/assignTo.json'
import MultiSelect from 'components/MultiSelect'
import IconButton from 'components/custom/Buttons/IconButton'

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

    const removeSelected = (itemselected) => {
        let rm = selectedUserList.filter(item => item !== itemselected?.email)
        setSelectedUsersList([...rm])
    }

    const selectAll = () => {
        if(selectedUserList?.length){
            setSelectedUsersList([])
        }else{
            let list = users.map((item) => { return item.email })
            setSelectedUsersList(list)
        }
       
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
                <div className='w-full flex justify-start items-center gap-4'>
                    <div className='w-3/4'>
                        <label htmlFor="users" className="block mb-2 text-sm font-semibold text-gray-900">Select {planPayload.assignToCat}</label>
                        <MultiSelect
                            removeSelected={removeSelected}
                            selected={searchFor} setSelected={setSeachFor}
                            title={planPayload.assignToCat}
                            selectedList={selectedUserList}
                            list={users} keyname='email' />
                    </div>
                    <div className='w-1/4 flex justify-center items-center'>
                        <button onClick={selectAll} type="button" className="w-full mt-6 px-3 py-2 border border-gray-300 text-gray-900 text-sm rounded-lg flex justify-start items-center font-medium text-center bg-white focus:ring-0 focus:outline-none focus:ring-white">
                            {selectedUserList?.length ? <>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-1 text-green-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg> 
                            Selected All
                            </> : 'Select all'}
                        </button>
                    </div>
                </div>
            </div>
        </>

    )
}

export default AssignTo;