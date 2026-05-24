import { useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <a className={styles.logo} href="/">
                <span className={styles.logoFull}>Our Blooms®</span>
                <span className={styles.logoShort}>O.B.</span>
            </a>

            <button
                className={styles.hamburger}
                onClick={() => setOpen(!open)}
            >
                ☰
            </button>

            <ul className={`${styles.navLinks} ${open ? styles.open : ''}`}>
                <li><a href="/gallery">GALLERY</a></li>
                <li><a href="/about">ABOUT</a></li>
                <li><a href="/">CONTACT</a></li>
            </ul>
        </nav>
    )
}