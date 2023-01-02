import Training from "./card";
import ModuleHeader from '../component/modileHeader'
import Trainings from '../../../assets/courses.json'

const TrainingLayout = () => {

    return (
        <>
            <ModuleHeader title='Training' />
            <section className="my-4 w-full grid grid-cols-4 gap-5">
                {Trainings?.map((item) => {
                    return (
                        <Training item={item} key={item?.id} />
                    )
                })}
            </section>
        </>
    )
}

export default TrainingLayout;