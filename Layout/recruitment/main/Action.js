import GoBackButton from '@/components/goBackBtn'
import IconButton from '@/components/custom/Buttons/IconButton'
import EditPanBtn from '../component/editPlanBtn'
import { useState } from 'react'
import DeleteAlert from '@/components/DeleteAlert'
import { useRouter } from 'next/router'

const JobAction = () => {
    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false)

    const onCloseDelete = () => {
        setIsOpen(!isOpen)
    }

    const confirmDelete = () => {
        setIsOpen(!isOpen)
        router.push('/app/recruitment')
    }

    return (
        <div className="mt-4 flex items-center justify-between">
            <GoBackButton title={'Job Details'} />
            <div className="h-10 flex justify-start text-[#419a00]">
                <EditPanBtn />
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
            </div>
        </div>
    )
}

export default JobAction