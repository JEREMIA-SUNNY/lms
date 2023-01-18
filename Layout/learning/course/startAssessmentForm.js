
import { useState } from "react";
import questions from '@/assets/mokedata/questionAndOption'
import PrimaryButton from "components/custom/Buttons/PrimaryButton";

function Question({ index, question, options, onOptionSelected }) {
    const [selected, setSelected] = useState(null);

    const handleOptionSelected = (option) => {
        setSelected(option);
        onOptionSelected(option);
    };

    return (
        <div className="p-4">
            <p className="font-semibold">{index + 1}.  {question}</p>
            <div className="flex justify-start items-center gap-4">
                {options.map((option, index) => (
                    <button
                        key={index}
                        className={`min-w-[140px] mr-4 mt-2 bg-white hover:bg-gray-100 text-sm text-gray-800 font-medium py-2 px-4 rounded-lg ${selected === option
                            ? "border-2 border-green-500"
                            : "border border-gray-400"
                            }`}
                        onClick={() => handleOptionSelected(option)}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
}

const StartAssessmentForm = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <div className="w-full overflow-scroll h-full">
            {
                questions?.map((item, i) => {
                    return (
                        <Question
                            key={i}
                            index={i}
                            question={item?.question}
                            options={item?.options}
                            onOptionSelected={(option) => setSelectedOption(option)}
                        />
                    )
                })
            }

            {selectedOption && (
                <p className="text-center text-xl font-medium my-4">
                    You selected: {selectedOption}
                </p>
            )}
            <div className='flex justify-end fixed bottom-0 right-5'>
                <PrimaryButton className='rounded-lg'>
                    <span>Submit</span>
                </PrimaryButton>
            </div>
        </div>
    );
}


export default StartAssessmentForm;