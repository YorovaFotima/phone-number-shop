import styles from "./header.module.css";
import { Menu } from "./menu";
function Header() {
  return (
    <header className={styles.menu1}>
      <h2>Phone Number Shop</h2>
      <nav>
        <Menu />
      </nav>
    </header>
  );
}

export { Header };

