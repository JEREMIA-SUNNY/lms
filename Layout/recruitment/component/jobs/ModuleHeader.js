import AutoComplete from "components/AutoComplete";
import FilterRecruitment from "components/filter/recruitment";
import AddJobBtn from "./AddJobBtn";
import Sortby from "./Sort";
import jobs from 'assets/mokedata/jobs.json'
import IconButton from "components/custom/Buttons/IconButton";

const tablist = [
    { title: 'Jobs' },
    { title: 'Candidates' },
    { title: 'Interviews' },
    { title: 'Offers' }
]

const ModuleHeader = ({ title, searchFor, setSeachFor, selectedTab, setSelectedTab }) => {

    return (
        <div className="mt-4 w-full grid grid-cols-3 gap-5">
             <ul className="flex flex-wrap gap-2">
                {tablist?.map((item) => {
                    return (
                        <li key={item?.title}>
                            <IconButton
                                className={`${selectedTab === item?.title ? 'bg-white text-green-600 rounded-md' : 'text-gray-900'}`}
                                onClick={() => { setSelectedTab(item?.title) }}>
                                {item?.title}
                            </IconButton>
                        </li>
                    )
                })}
            </ul>
            <AutoComplete title={title} list={jobs} keyname='Job title' selected={searchFor} setSelected={setSeachFor} />
            <div className="flex items-center justify-end">
                <AddJobBtn />
                <FilterRecruitment />
                <Sortby />
            </div>
        </div>
    )
}

export default ModuleHeader;