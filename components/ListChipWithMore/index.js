

const ListChipWithMore = ({ list, row, title }) => {
    return (
        <div className="mb-2 flex flex-wrap gap-2">
            <p className="text-sm">
                {title}
            </p>
            {
                list.slice(0, row).map((item, i) => {
                    return (
                        <div key={i} className='bg-primary/10 rounded-md text-xs px-2 py-1 text-primary'>
                            {item}
                        </div>
                    )
                })
            }
            <div className='bg-primary/10 rounded-md text-xs px-2 py-1 text-primary'>
                + {list?.length - row}
            </div>

        </div>
    )
}

export default ListChipWithMore;