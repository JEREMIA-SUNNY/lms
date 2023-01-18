import AutoComplete from "@/components/AutoComplete";
import Filter from "@/components/filter";
import AddJobBtn from "./AddJobBtn";
import Sortby from "./Sort";
import jobs from '@/assets/mokedata/jobs.json'

const ModuleHeader = ({ title, searchFor, setSeachFor }) => {

    return (
        <div className="mt-4 w-full grid grid-cols-3 gap-5">
            <div className="flex items-center justify-start">

            </div>
            <AutoComplete title={title} list={jobs} keyname='Job title' selected={searchFor} setSelected={setSeachFor} />
            <div className="flex items-center justify-end">
                <AddJobBtn />
                <Filter />
                <Sortby />
            </div>
        </div>
    )
}

export default ModuleHeader;