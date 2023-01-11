import StudentAction from "./StudentAction";


const TableAction = ({ tablename }) => {
    return (
        <>
            {tablename === 'studentApproval' ? <StudentAction /> : ''}
        </>
    )
}

export default TableAction;