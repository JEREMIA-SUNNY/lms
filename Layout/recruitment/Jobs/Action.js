// import GoBackButton from 'components/goBackBtn'
import IconButton from 'components/custom/Buttons/IconButton'
import EditJobBtn from '../components/jobs/editJobBtn'
import { useState } from 'react'
import DeleteAlert from 'components/DeleteAlert'
import { useRouter } from 'next/router'
import CandidatesFilter from 'components/filter/recruitment/CandidatesFilter'

const tablist = [
    { title: 'Job Details' },
    { title: 'Applications' },
    { title: 'Recommendations' },
    { title: 'Shortlist' },
    { title: 'Interviews (L1)' },
    { title: 'Interviews (L2)' },
    { title: 'Offers' }
]

const JobAction = ({ selectedTab, setSelectedTab }) => {
    const route = useRouter()
    const { query: { id } } = route
    const [isOpen, setIsOpen] = useState(false)

    const onCloseDelete = () => {
        setIsOpen(!isOpen)
    }

    const confirmDelete = () => {
        setIsOpen(!isOpen)
        // router.push('/app/recruitment')
    }

    return (
        <div className="mt-4 flex items-center justify-between">
            {/* <GoBackButton title={'Job Details'} /> */}
            <ul className="flex flex-wrap gap-2">
                {tablist?.map((item) => {
                    return (
                        <li key={item?.title}>
                            <IconButton
                                onClick={() => { setSelectedTab(item?.title) }}
                                className={`${selectedTab === item?.title ? 'text-[#419a00] font-bold text-[12px]' : ''} h-10 px-2 text-[15px]`}>
                                {selectedTab === item?.title ? `[ ${item?.title} (200) ]` : item?.title}
                            </IconButton>
                        </li>
                    )
                })}
            </ul>
            <div className="h-10 flex justify-start items-center text-[#419a00]">
                <EditJobBtn />
                <DeleteAlert
                    isOpen={isOpen}
                    title='Delete Job ?'
                    des='You are about to delete this Job permanentaly'
                    button={
                        <IconButton className='bg-white text-[#419a00]' onClick={() => { setIsOpen(true) }}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                            </svg>
                        </IconButton>
                    }
                    onClose={onCloseDelete}
                    confirm={confirmDelete}
                />
                <IconButton className='bg-white text-[#419a00] shadow-lg'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                </IconButton>
                <IconButton className='bg-white text-[#419a00] shadow-lg'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                    </svg>
                </IconButton>
                <CandidatesFilter />
            </div>
        </div>
    )
}

export default JobAction