import styles from './NavbarComponent.module.css';

const NavbarComponent = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <a>TechBuzz</a>
        </Link>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link href="/categories">
            <a>Categories</a>
          </Link>
        </li>
        <li>
          <Link href="/deals">
            <a>Deals</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
      <div className={styles.cart}>
        <Link href="/cart">
          <a>Cart</a>
        </Link>
      </div>
    </nav>
  );
};

export default NavbarComponent;
