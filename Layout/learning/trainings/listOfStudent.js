
import Table from '@/components/custom/Table'
import StudentJson from '@/assets/mokedata/student.json';

const list = ['S No.', 'Student Name', 'Student Id', 'Phone Number', 'Gender']

const ListOfStudent = () => {
    return (
        <div className="w-full overflow-scroll h-full">
            <Table column={list} data={StudentJson} />
        </div>

    )
}

export default ListOfStudent;