import style from './header.module.scss';
import Image from 'next/image';

export const Header = () => {
  return (
    <header className={style.header}>
      <a>
        <Image src="/image/logo.svg" alt="ロゴ" width="60" height="20" />
      </a>
      <button>CONTACT US</button>
    </header>
  );
};
