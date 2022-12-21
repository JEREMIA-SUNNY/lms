import SelectInput from "../../../components/SelectInput";

const status = [
    { name: 'active', title: 'Active' },
    { name: 'inactive', title: 'In Active' },
]
const level = [
    { name: 'beginner', title: 'Beginner' },
    { name: 'intermediate', title: 'Intermediate' },
    { name: 'advance', title: 'Advance' },
]
const CourseForm = () => {
    return (
        <div className="w-full">
            <div className="mt-4 grid grid-cols-3 gap-4">
                <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-semibold text-gray-900">Course Name</label>
                    <input type="name" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="course name" required="" />
                </div>
                <div>
                    <label htmlFor="domain" className="block mb-2 text-sm font-semibold text-gray-900">Domain</label>
                    <input type="text" name="domain" id="domain" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="domain" required="" />
                </div>
                <div>
                    <label htmlFor="skills" className="block mb-2 text-sm font-semibold text-gray-900">Skill</label>
                    <input type="text" name="skills" id="skills" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="skill" required="" />
                </div>
                <div>
                    <label htmlFor="Published" className="block mb-2 text-sm font-semibold text-gray-900">Published by</label>
                    <input type="text" name="Published" id="Published" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="Published by" required="" />
                </div>
                <div>
                    <label htmlFor="Endorsed" className="block mb-2 text-sm font-semibold text-gray-900">Endorsed by</label>
                    <input type="text" name="Endorsed" id="Endorsed" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="Endorsed by" required="" />
                </div>
                <div>
                    <label htmlFor="modules" className="block mb-2 text-sm font-semibold text-gray-900">Module</label>
                    <input type="number" name="modules" id="modules" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="5" required="" />
                </div>
                <div>
                    <label htmlFor="Status" className="block mb-2 text-sm font-semibold text-gray-900">Status</label>
                    <SelectInput name='status' id='status' dropdowns={status} />
                </div>
                <div>
                    <label htmlFor="Level" className="block mb-2 text-sm font-semibold text-gray-900">Level</label>
                    <SelectInput name='Level' id='Level' dropdowns={level} />
                </div>
            </div>

            <div className="w-full mt-4">
                <label htmlFor="skills" className="w-full block mb-2 text-sm font-semibold text-gray-900">Description</label>
                <textarea id="about" name="about" rows="3" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="description..." />
            </div>
        </div>
    )
}

export default CourseForm;
