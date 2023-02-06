import AutoComplete from "components/AutoComplete";
import FilterRecruitment from "components/filter/recruitment";
import AddJobBtn from "./AddJobBtn";
import Sortby from "./Sort";
import jobs from 'assets/mokedata/jobs.json'
import IconButton from "components/custom/Buttons/IconButton";

const tablist = [
    { title: 'Jobs (102)' },
    { title: 'Candidates (99)' },
    { title: 'Interviews (10)' },
    { title: 'Offers (98)' }
]

const ModuleHeader = ({ title, searchFor, setSeachFor, selectedTab, setSelectedTab }) => {

    return (
        <div className="mt-4 w-full grid grid-cols-3 gap-5">
            <ul className="flex flex-wrap gap-2">
                {tablist?.map((item) => {
                    return (
                        <li key={item?.title}>
                            <IconButton
                                onClick={() => { setSelectedTab(item?.title) }}
                                className={`${selectedTab === item?.title ? 'text-[#419a00] font-bold text-[12px]' : ''} h-10 px-2 text-[15px]`}>
                                {selectedTab === item?.title ? `[ ${item?.title} ]` : item?.title}
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