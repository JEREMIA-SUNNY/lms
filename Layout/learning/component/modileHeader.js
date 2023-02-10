import AutoComplete from "components/AutoComplete";
import CustomLink from "components/custom/Link";
import FilterLearing from "components/filter/learning";
import AddCourseBtn from "../component/addcoursebtn";
import AddTrainingBtn from "../component/addTrainingbtn";
import AddPlanBtn from "./addPlanBtn";
import Sortby from "./Sort";

const people = [
    { id: 1, name: 'Wade Cooper' },
    { id: 2, name: 'Arlene Mccoy' },
    { id: 3, name: 'Devon Webb' },
    { id: 4, name: 'Tom Cook' },
    { id: 5, name: 'Tanya Fox' },
    { id: 6, name: 'Hellen Schmidt' },
    { id: 7, name: 'Tanya Fox' },
    { id: 8, name: 'more kjwe Hellen Schmidt' },
    { id: 9, name: 'Tanyaqwkef q  Fox' },
    { id: 10, name: 'naresh Hellen Schmidt' },
]

const ModuleHeader = ({ title, searchFor, setSeachFor }) => {

    return (
        <div className="mt-4 w-full flex justify-between gap-5">
            <div className="flex items-center justify-start">
                <CustomLink href={'/app/learning/courses'} count={90} title={'Courses'} />
                <CustomLink href={'/app/learning/trainings'} count={20} title={'Trainings'} />
                <CustomLink href={'/app/learning/plan'} count={10} title={'Learning Plan'} />
            </div>
            <div className=" w-72 ">
                <AutoComplete title={title} list={people} keyname='name' selected={searchFor} setSelected={setSeachFor} />
            </div>
            <div className="flex items-center justify-end">
                {title === 'Course' ? <AddCourseBtn title={'Add Course'} /> : ''}
                {title === 'LearningPlan' ? <AddPlanBtn title={'Create New plan'} /> : ''}
                {title === 'Training' ? <AddTrainingBtn title={'Create Training'} /> : ''}
                <FilterLearing />
                <Sortby />
            </div>
        </div>
    )
}

export default ModuleHeader;