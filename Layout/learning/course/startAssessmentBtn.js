import Modal from "@/components/Modal";
import StartAssessmentForm from "./startAssessmentForm";

const StartAssessmentBtn = () => {

    return (
        <div className='flex justify-center items-center'>
            <Modal ui={<StartAssessmentForm />} title={''} button={true}
                TitleIcon='Start Assessment'
            />
        </div>
    )
}

export default StartAssessmentBtn;