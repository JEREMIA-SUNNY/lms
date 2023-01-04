
import AutoComplete from '@/components/AutoComplete'
import StudentTable from './studentTable';
import Modal from '@/components/Modal'

const StudentAddForm = (props) => {
    const { studentList, searchFor, setSeachFor } = props

    return (
        <div className="mt-4 w-full flex">
            <div className='w-[90%] flex gap-4'>
                <div className='w-[360px]'>
                    <AutoComplete
                        selected={searchFor} setSelected={setSeachFor}
                        title={'Student Name'}
                        list={studentList} keyname='student' />
                </div>
                <div>
                    <AutoComplete
                        selected={searchFor} setSelected={setSeachFor}
                        title={'Student Id'}
                        list={studentList} keyname='studentId' />
                </div>
                <div>
                    <AutoComplete
                        selected={searchFor} setSelected={setSeachFor}
                        title={'Phone'} list={studentList} keyname='phone' />
                </div>
            </div>
            <div className='w-[10%]'>
                <Modal ui={<div className="mt-2 w-full h-[80vh]">
                    <StudentTable />
                </div>}
                    title={'Request'}
                    TitleIcon={<div className='flex items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                        </svg>
                        Approve
                    </div>} />

                {/* <AutoComplete title={'Enter Student Name'} list={studentList} keyname='student' /> */}
            </div>
        </div>
    )
}

export default StudentAddForm;