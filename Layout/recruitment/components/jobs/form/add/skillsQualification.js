
import CustomMultipleSelect from "components/CustomMultilpleSelect";

const SkillsAndQualifications = (props) => {
    const { subjects, setSubjects, setSkills, skills, Technology, setTechnology, handleInput } = props

    return (
        <div>
            <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                    <label htmlFor="qualification" className="block mb-2 text-sm font-semibold text-textSecondary">Qualification</label>
                    <select
                        name="qualification"
                        id="qualification"
                        onChange={handleInput} className="outline-gray-200 bg-gray-50 border border-gray-300 text-textSecondary text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5">
                        <option>Select ...</option>
                        <option value="Bachelor of Computer Science (BCS)">Bachelor of Computer Science (BCS)/</option>
                        <option value="Bachelor of Technology (B.Tech)">Bachelor of Technology (B.Tech)/</option>
                        <option value="Bachelor of Business Administration (BBA)">Bachelor of Business Administration (BBA)/</option>
                        <option value="Bachelor of Science (B.Sc)">Bachelor of Science (B.Sc)/</option>
                        <option value="Bachelor of Arts (BA)">Bachelor of Arts (BA)/</option>
                        <option value="Bachelor of Commerce (B.Com)">Bachelor of Commerce (B.Com)/</option>
                        <option value="Bachelor of Education (B.Ed)">Bachelor of Education (B.Ed)/</option>
                        <option value="Bachelor of Law (LLB)">Bachelor of Law (LLB)/</option>
                        <option value="Bachelor of Medicine and Bachelor of Surgery (MBBS)">Bachelor of Medicine and Bachelor of Surgery (MBBS)/</option>
                        <option value="Bachelor of Nursing (BN)">Bachelor of Nursing (BN)/</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="stream" className="block mb-2 text-sm font-semibold text-textSecondary">Stream</label>
                    <select
                        name="stream"
                        id="stream"
                        onChange={handleInput} className="outline-gray-200 bg-gray-50 border border-gray-300 text-textSecondary text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5">
                        <option>Select ...</option>
                        <option value="Science Stream">Science Stream/</option>
                        <option value="Commerce Stream">Commerce Stream/</option>
                        <option value="Arts Stream">Arts Stream</option>
                        <option value="Technical Stream">Technical Stream</option>
                    </select>
                </div>
                <CustomMultipleSelect selecteditem={subjects}
                    setSelected={setSubjects}
                    title='Subject'
                    limit={8}
                    placeholder="English, Maths, etc"
                    name='subjects' />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
                <CustomMultipleSelect selecteditem={skills}
                    setSelected={setSkills}
                    limit={8}
                    title='Skills'
                    name='skill' />
                <CustomMultipleSelect selecteditem={Technology}
                    setSelected={setTechnology}
                    limit={8}
                    title='Technologies'
                    name='Technologies' />
            </div>
        </div>
    )
}

export default SkillsAndQualifications