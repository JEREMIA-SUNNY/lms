import Table from './Table'
import StudentJson from 'assets/mokedata/student.json';

const StudentTable = () => {

    return (
        <div className="w-full overflow-scroll h-full">
            <Table data={StudentJson} />
        </div>

    )
}

export default StudentTable;