import AutoComplete from "@/components/AutoComplete";
import CustomLink from "@/components/custom/Link";
import Filter from "@/components/filter";
import AddCourseBtn from "../component/addcoursebtn";
import AddTrainingBtn from "../component/addTrainingbtn";
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
                <CustomLink href={'/app/learning/courses'} title={'Courses'} />
                <CustomLink href={'/app/learning/trainings'} title={'Trainings'} />
                <CustomLink href={'/app/learning/plan'} title={'Learning Plan'} />
            </div>
            <AutoComplete title={title} list={people} keyname='name' selected={searchFor} setSelected={setSeachFor} />
            <div className="flex items-center justify-end">
                {title === 'Course' ? <AddCourseBtn title={'Add Course'} /> : <AddTrainingBtn title={'Create Training'} />}
                <Filter />
                <Sortby />
            </div>
        </div>
    )
}

export default ModuleHeader;