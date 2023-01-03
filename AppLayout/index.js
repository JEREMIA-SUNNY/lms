import Navbar from "@/components/Navbar";

const AppLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            <div style={{ height: '6.8rem' }} />
            <main className='container px-5 z-0 py-24 mx-auto relative'>
                {children}
            </main>
        </>
    )
}

export default AppLayout;
