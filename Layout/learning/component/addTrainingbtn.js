
import MainTrainingCreate from './form/training/mianTrainingCreate'
import Modal from '../../../components/Modal'

const AddTrainingBtn = ({ title }) => {

    return (
        <Modal ui={<div className="mt-2 w-full h-[80vh]">
            <MainTrainingCreate />
        </div>}
            title={title}
            TitleIcon={<div className="mr-2 text-[#419a00]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>} />

    )
}

export default AddTrainingBtn;