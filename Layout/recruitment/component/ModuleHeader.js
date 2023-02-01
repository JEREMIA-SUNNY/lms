import AutoComplete from "components/AutoComplete";
import FilterRecruitment from "components/filter/recruitment";
import AddJobBtn from "./AddJobBtn";
import Sortby from "./Sort";
import jobs from 'assets/mokedata/jobs.json'
import CustomLink from "components/custom/Link";

const ModuleHeader = ({ title, searchFor, setSeachFor }) => {

    return (
        <div className="mt-4 w-full grid grid-cols-3 gap-5">
            <div className="flex items-center justify-start">
                <CustomLink href={'/app/recruitment/jobs'} title={'Jobs'} />
                <CustomLink href={'/app/recruitment/candidates'} title={'Candidates'} />
                <CustomLink href={'/app/recruitment/interviews'} title={'Interviews'} />
                <CustomLink href={'/app/recruitment/offers'} title={'Offers'} />
            </div>
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