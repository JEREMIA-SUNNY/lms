import Table from 'components/custom/Table'
import StudentJson from 'assets/mokedata/student.json';

const list = ['S No.', 'Student Name', 'Student Id', 'Phone Number', 'Gender', 'Action']
const StudentTable = () => {

    return (
        <div className="w-full overflow-scroll h-full">
            <Table tablename='studentApproval' column={list} data={StudentJson} />
        </div>

    )
}

export default StudentTable;