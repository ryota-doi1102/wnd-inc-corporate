import style from './footer.module.scss';
import Image from 'next/image';

export const Footer = () => (
  <footer className={style.footer}>
    <div>
      <a>
        <Image src="/image/logo.svg" alt="ロゴ" width="60" height="20" />
      </a>
      <a>プライバシーポリシー</a>
    </div>
    <small>&copy; 2020 W&amp;D Inc.</small>
  </footer>
);
