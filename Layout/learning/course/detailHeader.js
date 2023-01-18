import DetailHeaderSection from "@/components/detailHeaderSection"

const DetailHeader = ({ course }) => {

    return (
        <DetailHeaderSection
            gap="1"
            des={course?.description}
            item={{
                name: course?.name,
                auther: course?.auther,
                price: course?.price,
                complete: course?.complete,
                modules: course?.modules,
                level: course?.level,
                language: course?.language,
                rating: course?.rating || 4.5
            }}
            cols={3} />
    )
}

export default DetailHeader