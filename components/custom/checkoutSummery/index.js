const CheckoutSummery = ({ title, subtotal, discout = 0.00, discoutInPer = "10", total, itemList }) => {
    return (
        <>
            <div className="px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
                <div className="flex justify-center item-start space-y-2 flex-col">
                    <h3 className="text-xl font-semibold leading-5 text-gray-800">{title}</h3>
                </div>
                <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                    <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                        <div className="flex justify-center flex-col w-full space-y-4">
                            <div className="shadow flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6">
                                <h3 className="text-xl font-semibold leading-5 text-gray-800">Summary</h3>
                                <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                                    {
                                        itemList?.map((item, i) => {
                                            return (
                                                <div key={i} className="flex justify-between w-full">
                                                    <p className="text-base leading-4 text-gray-800">{item?.name}</p>
                                                    <p className="text-base leading-4 text-gray-600">${item?.price}</p>
                                                </div>
                                            )
                                        })
                                    }
                                    <div className="flex justify-between w-full">
                                        <p className="text-base leading-4 text-gray-800">Subtotal</p>
                                        <p className="text-base leading-4 text-gray-600">${subtotal}</p>
                                    </div>
                                    <div className="flex justify-between items-center w-full">
                                        <p className="text-base leading-4 text-gray-800">Discount <span className="bg-gray-200 p-1 text-xs font-medium leading-3 text-gray-800">STUDENT</span></p>
                                        <p className="text-base leading-4 text-gray-600">-${discout} ({discoutInPer}%)</p>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center w-full">
                                    <p className="text-base font-semibold leading-4 text-gray-800">Total</p>
                                    <p className="text-base font-semibold leading-4 text-gray-600">${total}</p>
                                </div>
                            </div>
                            <div className="w-full flex justify-center items-center">
                                <button className="shadow rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#409a00] py-5 w-96 md:w-full bg-[#409a00] text-base font-medium leading-4 text-white">Pay Now</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default CheckoutSummery;
