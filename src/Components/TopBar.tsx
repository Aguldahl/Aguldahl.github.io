import {FunctionComponent, useState} from "react";
import styles from "../styles/HomeScreenMobile.module.css";
import HamburgerMenuContent from "./HamburgerMenuContent";

const TopBar: FunctionComponent = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    };
    return (
        <div className={styles.topBar}>
            <div className={styles.bingen}>BINGEN</div>
            <div className={styles.hamburgerMenu} onClick={toggleMenu}>
                <div className={styles.hamburgerMenuChild}/>
                <div className={styles.hamburgerMenuChild}/>
            </div>
            {isMenuOpen && <HamburgerMenuContent/>}
        </div>
    );
}

export default TopBar;