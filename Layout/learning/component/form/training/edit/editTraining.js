
import PrimaryButton from '@/components/custom/Buttons/PrimaryButton';
import TrainingForm from './trainingForm';

const EditTrainingFrom = (props) => {
    const { handleInput, trainingInfo, IsAssessment, setIsAssessment, handlefile, IsTrainingPaid, setIsTrainingPaid } = props
    return (
        <div className="w-full h-full flex flex-col justify-between">
            <TrainingForm trainingInfo={trainingInfo}
                IsAssessment={IsAssessment}
                setIsTrainingPaid={setIsTrainingPaid}
                IsTrainingPaid={IsTrainingPaid}
                handlefile={handlefile}
                setIsAssessment={setIsAssessment}
                handleInput={handleInput} />
            <div className='flex justify-end fixed bottom-0 right-5'>
                <PrimaryButton>
                    <span>Edit Training</span>
                </PrimaryButton>
            </div>
        </div>
    )
}

export default EditTrainingFrom;