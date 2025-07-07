import Footer from "../layouts/Footer"
import Navbar from "../layouts/Navbar"
import Overview from "../components/Admin/Overview.jsx"

const Admin = () => {
    return(
        <>
            <Navbar/>
            <Overview/>
            <Footer/>
        </>
    )
}

export default Admin