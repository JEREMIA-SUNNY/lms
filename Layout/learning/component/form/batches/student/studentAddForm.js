
import AutoComplete from '../../../../../../components/AutoComplete'

const StudentAddForm = (props) => {
    const { studentList, searchFor, setSeachFor } = props

    return (
        <div className="mt-4 grid grid-cols-4 gap-4">
            <div>
                <AutoComplete
                    selected={searchFor} setSelected={setSeachFor}
                    title={'Student Name'}
                    list={studentList} keyname='student' />
            </div>
            <div>
                <AutoComplete
                    selected={searchFor} setSelected={setSeachFor}
                    title={'Student Id'}
                    list={studentList} keyname='studentId' />
            </div>
            <div>
                <AutoComplete
                    selected={searchFor} setSelected={setSeachFor}
                    title={'Phone'} list={studentList} keyname='phone' />
            </div>
            <div>
                {/* <AutoComplete title={'Enter Student Name'} list={studentList} keyname='student' /> */}
            </div>
        </div>
    )
}

export default StudentAddForm;