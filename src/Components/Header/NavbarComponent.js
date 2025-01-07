import { useSession, signIn, signOut } from 'next-auth/react';
import Link from 'next/link';
import styles from './NavbarComponent.module.css';

const NavbarComponent = () => {
  const { data: session } = useSession();

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">TechBuzz</Link>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link href="/categories">Categories</Link>
        </li>
        <li>
          <Link href="/deals">Deals</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <div className={styles.actions}>
        <Link href="/cart" className={styles.cartButton}>
          Cart
        </Link>
        {session ? (
          <button onClick={() => signOut()} className={styles.authButton}>
            Sign Out
          </button>
        ) : (
          <button onClick={() => signIn()} className={styles.authButton}>
            Sign In
          </button>
        )}
      </div>
    </nav>
  );
};

export default NavbarComponent;
