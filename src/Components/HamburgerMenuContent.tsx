import styles from "../styles/hamburgerMenuContent.module.css";

const HamburgerMenuContent = () => {
    return (
        <div className={styles.hamburgerMenuContent}>
            <div className={styles.hamburgerMenuContentItem}>Home</div>
            <div className={styles.hamburgerMenuContentItem}>About</div>
            <div className={styles.hamburgerMenuContentItem}>Contact</div>
        </div>
    );
}

export default HamburgerMenuContent;
