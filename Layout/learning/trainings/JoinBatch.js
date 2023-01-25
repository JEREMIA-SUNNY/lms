
import Modal from 'components/Modal'
import CheckoutSummery from 'components/custom/checkoutSummery';

const JoinBatch = ({ }) => {

    return (
        <Modal
            width='max-w-md w-full'
            moduleHeight='h-full'
            ui={<div className="mt-2 w-full h-full">
                <CheckoutSummery
                    title=''
                    itemList={[]}
                    subtotal='100'
                    discout='20'
                    discoutInPer="20"
                    total='80'
                />
            </div>}
            title={'Checkout to Join'}
            classTitleIcon="mr-3 w-24 px-2 h-8 bg-[#419a00] text-white shadow rounded-full text-sm py-1 px-2 mr-1 flex justify-center"
            TitleIcon={<>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                </svg>
                Join
            </>
            } />

    )
}

export default JoinBatch;
