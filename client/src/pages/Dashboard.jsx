import Footer from "../layouts/Footer.jsx";
import Navbar from "../layouts/Navbar.jsx";
import Resume from "../components/Dashboard/Resume";
import Feedback from "../components/Dashboard/Feedback";

const Dashboard = () => {
    return(
        <>
            <Navbar/>
            <Resume/>
            <Feedback/>
            <Footer/>
        </>
    )
}

export default Dashboard;