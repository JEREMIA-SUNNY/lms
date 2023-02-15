import IconButton from "../Buttons/IconButton";

const CheckoutSummery = ({ title, subtotal, discout = 0.00, discoutInPer = "10", total, itemList }) => {
    return (
        <>
            <p className="text-sm">This is a paid batch. Please complete the payment to unlock the course.</p>
            <div className="shadow bg-gray-50 mt-4 px-4 py-2 rounded-lg">
                <div className="flex justify-center item-start space-y-2 flex-col">
                    <h3 className="text-xl font-semibold leading-5 text-gray-800">{title}</h3>
                </div>
                <div>
                    <div className="flex flex-col py-3 w-full">
                        <h3 className="mb-4 text-xl font-semibold leading-5 text-gray-800">Summary</h3>
                        <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                            {
                                itemList?.map((item, i) => {
                                    return (
                                        <div key={i} className="flex justify-between w-full">
                                            <p className="text-base leading-4 text-gray-800">{item?.name}</p>
                                            <p className="text-base leading-4 text-gray-600">$ {item?.price}</p>
                                        </div>
                                    )
                                })
                            }
                            <div className="flex justify-between w-full">
                                <p className="text-base leading-4 text-gray-800">Subtotal</p>
                                <p className="text-base leading-4 text-gray-600">$ {subtotal}</p>
                            </div>
                            <div className="flex justify-between items-center w-full">
                                <p className="text-base leading-4 text-gray-800">Discount </p>
                                <p className="text-base leading-4 text-gray-600">$ {discout} ({discoutInPer}%)</p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center w-full py-4 border-gray-200 border-b">
                            <p className="text-base font-semibold leading-4 text-gray-800">Total</p>
                            <p className="text-base font-semibold leading-4 text-gray-600">$ {total}</p>
                        </div>
                    </div>
                    <div className="w-full flex justify-end items-center">
                        <IconButton className='rounded bg-primary text-white'>
                            Pay Now
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                            </svg>
                        </IconButton>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CheckoutSummery;
