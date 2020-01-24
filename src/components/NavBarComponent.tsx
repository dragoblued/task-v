import React, {useState} from 'react';
import styles from './NavBarComponent.module.css';

const NavBarComponent: React.FC  = () => {
    const [count, setCount] = useState(0);
    const stylesButton: string = `large material-icons ${styles.container_button}`;
    const styleLink: string = (count === 0) ? `${styles.nav_link}` : `${styles.nav_link2}`;
    return(
        <nav className={styles.container}>
            <div className={styles.logo}>
                <span>L</span>
                <span>O</span>
                <span>G</span>
                <span>O</span>
            </div>
            <div className={styles.container_link}>
                <i className={stylesButton} onClick={() => {
                    if (count === 0) setCount(prev => prev + 1);
                    else setCount(prev => prev - 1)}}>dashboard</i>
                <ul className={styles.nav_mobile} >
                    <li className={styleLink}><a href="/taskone" > Task 2 </a></li>
                    <li className={styleLink}><a href="/" > Task 3 </a></li>
                </ul>
            </div>
        </nav>
    )
}
export default NavBarComponent;