import Image from 'next/image';
import styles from './index.module.css';
export default function Header() {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.logoLink}>
        <Image 
          src={'/logo.svg'}
          alt='simple'
          width={348}
          height={133}
          priority
          className={styles.logo}
        />
      </a>
      <nav>
        <ul className={styles.items}>
          <li>
            <a href="/members">メンバー</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}