import OptionAndAnswer from "./optionAns";

const QuestionOfSection = ({ qIndex, sIndex, ques, handleAllQuestionInfo }) => {
    return (
        <div className="ml-4 bg-gray-50 rounded p-2">
            <div>
                <label htmlFor="Question" className="block mb-2 text-sm font-semibold text-textSecondary">Question {qIndex + 1}</label>
                <input onChange={(e) => { handleAllQuestionInfo(e, sIndex) }} defaultValue={ques?.question} type="text" name="question" id={qIndex} className="outline-gray-200 bg-gray-50 border border-gray-300 text-textSecondary sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Type Question" required="" />
            </div>
            <OptionAndAnswer sIndex={sIndex} handleAllQuestionInfo={handleAllQuestionInfo} />
        </div>
    )
}

export default QuestionOfSection;