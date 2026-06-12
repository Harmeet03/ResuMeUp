import Footer from "../components/common/Footer.jsx"
import Navbar from "../components/common/Navbar.jsx"
import Overview from "../components/Admin/Overview.jsx"
import AppLayout from "../layouts/AppLayout.jsx"

const Admin = () => {
    return(
        <>
            <AppLayout>
                <Overview/>
            </AppLayout>
        </>
    )
}

export default Admin