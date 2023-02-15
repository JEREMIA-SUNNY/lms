

const ResponsibilitiesJob = ({ handleInput }) => {
    return (
        <div className="gap-4">
            <div className="mt-2">
                <label htmlFor="JobSummary" className="block mb-2 text-sm font-semibold text-textSecondary">Job Summary</label>
                <textarea onChange={handleInput} id="JobSummary"
                    name="JobSummary" rows="6"
                    className="outline-gray-200 bg-gray-50 border border-gray-300 text-textSecondary sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Job Summary..." />
            </div>
        </div>
    )
}

export default ResponsibilitiesJob;