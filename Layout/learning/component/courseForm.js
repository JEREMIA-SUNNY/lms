

const CourseForm = () => {
    return (
        <div className="w-full">
            <div className="mt-4 grid grid-cols-3 gap-4">
                <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Course Name</label>
                    <input type="name" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="course name" required="" />
                </div>
                <div>
                    <label htmlFor="domain" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Domain</label>
                    <input type="text" name="domain" id="domain" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="domain" required="" />
                </div>
                <div>
                    <label htmlFor="skills" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Skill</label>
                    <input type="text" name="skills" id="skills" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="skill" required="" />
                </div>
                <div>
                    <label htmlFor="modules" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Module</label>
                    <input type="number" name="modules" id="modules" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="5" required="" />
                </div>
            </div>

            <div className="w-full mt-4">
                <label htmlFor="skills" className="w-full block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                <textarea id="about" name="about" rows="3" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="description..." />
            </div>
        </div>
    )
}

export default CourseForm;
