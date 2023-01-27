

const ResponsibilitiesJob = ({ handleInput }) => {
    return (
        <div className="gap-4">
            <div className="mt-2">
                <label htmlFor="JobSummary" className="block mb-2 text-sm font-semibold text-gray-900">Job Summary</label>
                <textarea onChange={handleInput} id="JobSummary"
                    name="JobSummary" rows="3"
                    className="outline-gray-200 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Job Summary..." />
            </div>
        </div>
    )
}

export default ResponsibilitiesJob;