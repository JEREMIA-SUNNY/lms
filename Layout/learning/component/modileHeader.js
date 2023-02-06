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
        <div className="mt-4 w-full grid grid-cols-3 gap-5">
            <div className="flex items-center justify-start">
                <CustomLink href={'/app/learning/courses'} title={'Courses (100)'} />
                <CustomLink href={'/app/learning/trainings'} title={'Trainings (120)'} />
                <CustomLink href={'/app/learning/plan'} title={'Learning Plan (99)'} />
            </div>
            <AutoComplete title={title} list={people} keyname='name' selected={searchFor} setSelected={setSeachFor} />
            <div className="flex items-center justify-end">
                {title === 'Course' ? <AddCourseBtn title={'Add Course'} /> : ''}
                {title === 'LearningPlan' ? <AddPlanBtn title={'Create New plan'} /> : ''}
                {title === 'Training' ? <AddTrainingBtn title={'Create Training'} />:''}
                <FilterLearing />
                <Sortby />
            </div>
        </div>
    )
}

export default ModuleHeader;