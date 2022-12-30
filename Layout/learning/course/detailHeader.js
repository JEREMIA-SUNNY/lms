
const DetailHeader = ({id }) => {
    return (
        <div className="rounded-lg shadow bg-[#F5F5F5] p-4">
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
                        <td>Course title: Course #{id}</td>
                        <td>Level: </td>
                        <td>Price: </td>
                    </tr>
                    <tr>
                        <td>Language: </td>
                        <td>Rating: </td>
                        <td>Taken by users: </td>
                    </tr>
                    <tr>
                        <td>Publisher: </td>
                        <td> </td>
                        <td></td>
                    </tr>
                    {/* <tr>
                        <td>Skills: </td>
                        <td>Description: </td>
                        <td>Rating: </td>
                    </tr> */}
                </tbody>
            </table>
            <p className="mt-2 text-gray-900">
            n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final co          
            </p>
        </div>
    )
}

export default DetailHeader