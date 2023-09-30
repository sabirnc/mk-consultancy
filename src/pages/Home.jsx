import { Banner } from "../components/banner"
import { Navbar } from "../components/navbar"
import { Services } from "../components/services"

export const Home = () => {
    return (
     <div className="home">
        <Navbar />
        <Banner />
        <Services />
     </div>
    )
}