import Navbar from "../components/Navbar";

const AppLayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <div className="container h-screen px-5 py-24 mx-auto">
                {children}
            </div>
        </div>
    )
}

export default AppLayout;
