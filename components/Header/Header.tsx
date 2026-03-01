import css from './Header.module.css';
import Link from 'next/link';

export default function Header() {
  return (
    <header className={css.header}>
      <Link href="/" aria-label="Home" className={css.headerLink}>
        NoteHub
      </Link>
      <nav aria-label="Main Navigation">
        <ul className={css.navigation}>
          <li className={css.navigationItem}>
            <Link href="/" className={css.navigationLink}>
              Home
            </Link>
          </li>
          <li className={css.navigationItem}>
            <Link href="/notes/filter/all" className={css.navigationLink}>
              Notes
            </Link>
          </li>
          {/* <li>
            <Link href="/profile">Profile</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}
