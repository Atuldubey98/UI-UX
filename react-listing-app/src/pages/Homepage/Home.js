import Header from '../../components/header/Header'
import Listing from '../../components/listing/Listing'
import SideBar from '../../components/sidebar/SideBar'
import TopBar from '../../components/topbar/TopBar'
import './Home.css'
export const Home = () => {
    return (
        <div>
            <TopBar />
            <Header />
            <div className='home-page'>
                <Listing />
                <SideBar />
            </div>
        </div>
    )
}
