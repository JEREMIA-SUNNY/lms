import DetailHeaderSection from "components/detailHeaderSection"

const training = {
    "name": "Mueller Group",
    "publisher": "Darcie Enden",
    "price": "32",
    "complete": 0,
    "batchs": 7,
    "level": "intermediate",
    "language": "Assamese",
    "rating": "5"
}

const DetailHeader = ({ id }) => {
    return (
        <DetailHeaderSection
            gap="1"
            des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium"
            item={training}
            cols={3} />
    )
}

export default DetailHeader