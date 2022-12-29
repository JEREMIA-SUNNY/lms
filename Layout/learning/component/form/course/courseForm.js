import FileUploader from "../../../../../components/custom/fileUpload";
import SwitchInput from "../../../../../components/custom/switchInput";
import SelectInput from "../../../../../components/SelectInput";
import Skillform from "./skills";

const freePaid = [
    { name: 'Free', title: 'Free' },
    { name: 'Paid', title: 'Paid' },
]

const level = [
    { name: 'beginner', title: 'Beginner' },
    { name: 'intermediate', title: 'Intermediate' },
    { name: 'advance', title: 'Advance' },
]

const language = [
    { name: 'hindi', title: 'Hindi' },
    { name: 'english', title: 'English' },
    { name: 'Panjabi', title: 'Panjabi' },
    { name: 'Maradhi', title: 'Maradhi' }

]

const CourseForm = ({ handleInput, handlefile, courseInfo, IsAssessment, setIsAssessment }) => {

    return (
        <div>
            <div className="mt-4 grid grid-cols-4 gap-4">
                <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-semibold text-gray-900">Course Name</label>
                    <input onChange={handleInput} type="name" name="name" id="name" className="outline-gray-200 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="course name" required="" />
                </div>
                <div>
                    <label htmlFor="domain" className="block mb-2 text-sm font-semibold text-gray-900">Domain</label>
                    <input onChange={handleInput} type="text" name="domain" id="domain" className="outline-gray-200 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="domain" required="" />
                </div>
                <Skillform
                    courseInfo={courseInfo}
                    handleInput={handleInput} />
                <div>
                    <label htmlFor="Level" className="block mb-2 text-sm font-semibold text-gray-900">Level</label>
                    <SelectInput onChange={handleInput} name='Level' id='Level' dropdowns={level} />
                </div>
                <div>
                    <label htmlFor="language" className="block mb-2 text-sm font-semibold text-gray-900">Language</label>
                    <SelectInput onChange={handleInput} name='language' id='language' dropdowns={language} />
                </div>
                <div>
                    <label htmlFor="OwnedBy" className="block mb-2 text-sm font-semibold text-gray-900">Owned By</label>
                    <input onChange={handleInput} type="text" name="OwnedBy" id="OwnedBy" className="outline-gray-200 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="Owned By" required="" />
                </div>
                <div>
                    <label htmlFor="Endorsed" className="block mb-2 text-sm font-semibold text-gray-900">Endorsed by</label>
                    <input onChange={handleInput} type="text" name="Endorsed" id="Endorsed" className="outline-gray-200 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="Endorsed by" required="" />
                </div>
                <div>
                    <label htmlFor="module" className="block mb-2 text-sm font-semibold text-gray-900">No. of Modules</label>
                    <input onChange={(e) => {
                        if (e.target.value < 0) {
                            e.target.value = 1
                        } else {
                            handleInput(e)
                        }
                    }} type="number" defaultValue={courseInfo?.module} name="module" id="module" className="outline-gray-200 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="1" required="" />
                </div>
                <div className="mt-4">
                    <label htmlFor="IsAssessment" className="block mb-2 text-sm font-semibold text-gray-900">Assessment Required (Yes/No)</label>
                    <SwitchInput
                        name='IsAssessment'
                        value={IsAssessment}
                        onChange={setIsAssessment} />
                </div>
                <div>
                    <label htmlFor="courseType" className="block mb-2 text-sm font-semibold text-gray-900">Paid (Yes/No)</label>
                    <SelectInput onChange={handleInput} name='courseType' id='courseType' dropdowns={freePaid} />
                </div>
                {courseInfo?.courseType === 'Paid' ? <div>
                    <label htmlFor="Price" className="block mb-2 text-sm font-semibold text-gray-900">Price</label>
                    <input onChange={handleInput} type="number" name="Price" id="Price" className="outline-gray-200 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="Price" required="" />
                </div> : ''}

            </div>

            <div className="flex justify-between">
                <div className="mt-4 w-1/2">
                    <label htmlFor="skill" className="w-full block mb-2 text-sm font-semibold text-gray-900">Course Description</label>
                    <textarea onChange={handleInput} id="description" name="description" rows="6" className="outline-gray-200 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="description..." />
                </div>
                <div className="mt-8 ml-2">
                    <label htmlFor="Thumbnail" className="w-full block mb-2 text-sm font-semibold text-gray-900">Thumbnail</label>
                    <FileUploader handlefile={handlefile} />
                </div>
            </div>
        </div>
    )
}

export default CourseForm;
