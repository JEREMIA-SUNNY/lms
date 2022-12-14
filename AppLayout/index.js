import Navbar from "../components/Navbar";

const AppLayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <div style={{paddingTop:'5rem'}} className="container mx-auto">
                <main>
                    {children}
                </main>
            </div>
        </div>
    )
}

export default AppLayout;
