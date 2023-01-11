import Modal from '@/components/Modal'
import GroupAvatar from '@/components/custom/GroupAvatar'
import students from '@/assets/mokedata/student.json'
import Table from '@/components/custom/Table'

const list = ['S No.', 'Fullname', 'Phone Number', 'Gender']
const AssignedUsers = () => {

    return (
        <div className="w-full overflow-scroll h-full">
            <Table tablename='AssignedUsers' column={list} data={students} />
        </div>

    )
}


const GroupUserListingModal = ({ assigmentType }) => {
    return (
        <Modal
            ui={<div className="w-full overflow-scroll h-full">
                <AssignedUsers />
            </div>}
            title={`${assigmentType} >  Users`}
            TitleIcon={
                <>
                    <GroupAvatar rows={10} total={students?.length} />
                </>
            } />

    )
}

export default GroupUserListingModal;