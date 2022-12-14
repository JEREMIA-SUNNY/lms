import Course from "./course";

const LearningLayout = () => {
    return (

        <section className="my-4 w-full grid grid-cols-4 gap-5">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((item) => {
                return (
                    <Course key={item} />
                )
            })}
        </section>
    )
}

export default LearningLayout;