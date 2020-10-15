import styles from '../styles/Nav.module.css'
import Link from 'next/link'

export default function Nav() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <h3 className={styles.brandname}>
          <Link href="/">
              <a>ZOEZI</a>
            </Link>
        </h3>
        <ul className={styles.menu}>
          <li className={styles.menuitem}>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li className={styles.menuitem}>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}