import IconButton from "components/custom/Buttons/IconButton"

const ChipSelectOption = (props) => {
    const { list, setSelected, selected } = props
    return (
        <div className="flex flex-wrap gap-2 ">
            {
                list?.map((item) => {
                    return (
                        <IconButton className={`rounded ${selected === item ? 'text-white bg-green-600' : 'border border-green-600'}`} onClick={() => { setSelected(item) }} >
                            {item}
                        </IconButton>
                    )
                })
            }
        </div>
    )
}

export default ChipSelectOption