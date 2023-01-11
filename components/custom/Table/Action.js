import StudentAction from "./StudentAction";


const TableAction = ({ tablename }) => {
    return (
        <>
            {tablename ? <StudentAction /> : ''}
        </>
    )
}

export default TableAction;