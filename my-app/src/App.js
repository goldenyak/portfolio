import './App.css';
import {Header} from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import {useState} from "react";
import HomeTop from "./components/HomeTop/HomeTop";
import Portfolio from "./components/Portfolio/Portfolio";

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
            <Portfolio/>
        </div>
    );
}

export default App;
