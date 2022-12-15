
const DetailHeader = ({id }) => {
    return (
        <div className="rounded-md shadow bg-[#F5F5F5] p-4">
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Course Name: Course #{id}</td>
                        <td>Level: </td>
                        <td>Rating: </td>
                    </tr>
                    <tr>
                        <td>Published By: </td>
                        <td>Endorsed By: </td>
                        <td>Language: </td>
                    </tr>
                    <tr>
                        <td>Domain: </td>
                        <td>Status: </td>
                        <td>Taken By: </td>
                    </tr>
                    <tr>
                        <td>Skills: </td>
                        <td>Description: </td>
                        <td>Rating: </td>
                    </tr>
                </tbody>
            </table>
            <p className="mt-2 text-gray-900">
            n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final co          
            </p>
        </div>
    )
}

export default DetailHeader