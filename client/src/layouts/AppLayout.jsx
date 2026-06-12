import Footer from "../components/common/Footer"
import Navbar from "../components/common/Navbar"

const AppLayout = ({children}) => {
    return(
        <div>
            <Navbar/>
            <main>
                {children}
            </main>
            <Footer/>
        </div>
    )
}

export default AppLayout