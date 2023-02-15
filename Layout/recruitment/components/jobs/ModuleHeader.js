import AutoComplete from "components/AutoComplete";
import FilterRecruitment from "components/filter/recruitment";
import AddJobBtn from "./AddJobBtn";
import Sortby from "./Sort";
import jobs from 'assets/mokedata/jobs.json'
import IconButton from "components/custom/Buttons/IconButton";

const tablist = [
    { title: 'Jobs', count: 90 },
    { title: 'Candidates', count: 20 },
    { title: 'Interviews', count: 10 },
    { title: 'Offers', count: 100 }
]

const ModuleHeader = ({ title, searchFor, setSeachFor, selectedTab, setSelectedTab }) => {

    return (
        <div className="mt-4 w-full flex justify-between">
            <ul className="flex flex-wrap w-96">
                {tablist?.map((item) => {
                    const { title, count } = item
                    return (
                        <li key={item?.title}>
                            <IconButton
                                onClick={() => { setSelectedTab(title) }}
                                className={`${selectedTab === title ? 'text-[#419a00] font-medium text-sm' : ''} h-10 px-2 text-sm`}>
                                {selectedTab === title ? `[ ${title} ${count !== undefined ? `(${count})` : ''} ]` : title}
                            </IconButton>
                        </li>
                    )
                })}
            </ul>
            <div className="w-72">
                <AutoComplete title={title} list={jobs} keyname='Job title' selected={searchFor} setSelected={setSeachFor} />
            </div>
            <div className="flex items-center justify-end w-96">
                <AddJobBtn />
                <FilterRecruitment />
                <Sortby />
            </div>
        </div>
    )
}

export default ModuleHeader;