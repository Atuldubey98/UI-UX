import Header from '../../components/header/Header'
import TopBar from '../../components/topbar/TopBar'
import './Home.css'
export const Home = () => {
    return (
        <div className='home-page'>
            <TopBar />
            <Header />
            <p>Its a home page</p>
        </div>
    )
}
