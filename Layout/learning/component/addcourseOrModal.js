
import MainCourseCreate from './mianCourseCreate'
import Modal from '../../../components/Modal'

const AddCourseOrTraining = ({ title }) => {

    return (
        <Modal ui={<div className="mt-2 w-full h-[80vh]">
            <MainCourseCreate />
        </div>}
            title={title}
            TitleIcon={<div className="rounded-lg border-0 inline-flex items-center justify-center text-gray-500 mr-2 mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#419a00"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-8-2h2v-4h4v-2h-4V7h-2v4H7v2h4z" /></svg>
            </div>} />

    )
}

export default AddCourseOrTraining;