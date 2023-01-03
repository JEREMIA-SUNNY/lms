
import MainCourseCreate from './form/course/add/mianCourseCreate'
import Modal from '@/components/Modal'

const AddCourseBtn = ({ title }) => {

    return (
        <Modal ui={<div className="mt-2 w-full h-[80vh]">
            <MainCourseCreate />
        </div>}
            title={title}
            TitleIcon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            } />

    )
}

export default AddCourseBtn;