import Footer from "../components/common/Footer"
import Navbar from "../components/common/Navbar"

const AppLayout = ({children}) => {
    return(
        <div>
            <Navbar/>
            <main className="mt-20 min-h-screen print:h-auto print:m-0 print:bg-white">
                {children}
            </main>
            <Footer/>
        </div>
    )
}

export default AppLayout