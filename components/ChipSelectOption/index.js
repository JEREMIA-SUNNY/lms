import IconButton from "components/custom/Buttons/IconButton"

const ChipSelectOption = (props) => {
    const { list, setSelected, selected } = props
    return (
        <div className="flex flex-wrap gap-2 ">
            {
                list?.map((item) => {
                    return (
                        <IconButton className={`rounded ${selected === item ? 'text-white bg-primary' : 'border border-primary'}`} onClick={() => { setSelected(item) }} >
                            {item}
                        </IconButton>
                    )
                })
            }
        </div>
    )
}

export default ChipSelectOption