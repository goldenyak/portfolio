import './App.css';
import {Header} from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import {useState} from "react";
import HomeTop from "./components/HomeTop/HomeTop";
import Portfolio from "./components/Portfolio/Portfolio";
import PersonalPortfolio from "./components/PersonalPortfolio/PersonalPortfolio";
import HomeDown from "./components/HomeDown/HomeDown";
import AboutMe from "./components/AboutMe/AboutMe";

function App() {

    const [showMenu, setShowMenu] = useState(false)

    const toggleShowMenu = () => {
        setShowMenu(!showMenu)
    }
    return (
        <div className="App">
            <Header toggleShowMenu={toggleShowMenu} showMenu={showMenu}/>
            {showMenu && <Menu/>}
            <HomeTop/>
            <AboutMe/>
            <PersonalPortfolio/>
            <AboutMe/>

            {/*<Portfolio/>*/}
            {/*<HomeDown/>*/}
        </div>
    );
}

export default App;
