import Course from "./course";

const LearningLayout = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="flex flex-wrap -m-4">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
                    return (
                        <Course key={item} />
                    )
                })}
            </div>
        </section>
    )
}

export default LearningLayout;