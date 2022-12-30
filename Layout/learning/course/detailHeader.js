
const DetailHeader = ({ id }) => {
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
                        <td><span className="font-semibld">Course title: Course #{id}</span></td>
                        <td><span className="font-semibld">Level: </span></td>
                        <td><span className="font-semibld">Price: </span></td>
                    </tr>
                    <tr>
                        <td><span className="font-semibld">Language: </span></td>
                        <td><span className="font-semibld">Rating: </span></td>
                        <td><span className="font-semibld">Taken by users: </span></td>
                    </tr>
                    <tr>
                        <td><span className="font-semibld">Publisher: </span></td>
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
            <p className="font-semibld">Description: </p>
            <p className="mt-2 text-gray-700">
                n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final co
            </p>
        </div>
    )
}

export default DetailHeader