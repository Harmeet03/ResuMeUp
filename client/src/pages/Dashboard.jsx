import Footer from "../components/common/Footer.jsx";
import Navbar from "../components/common/Navbar.jsx";
import Resume from "../components/Dashboard/Resume";
import Feedback from "../components/Dashboard/Feedback";
import AppLayout from "../layouts/AppLayout.jsx";
import useTitle from '../hooks/useTitle'

const Dashboard = () => {
    useTitle('Dashboard | Tools to create your resume | ResuMeUp')
    return(
        <>
            <AppLayout>
                <Resume/>
                <Feedback/>
            </AppLayout>
        </>
    )
}

export default Dashboard;