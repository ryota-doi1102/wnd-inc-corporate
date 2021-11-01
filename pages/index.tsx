import { Header, Footer } from 'components/common';
import { CompanyInfoTable, ContactForm, PageTitle, SectionTitle } from 'components/top';
import type { NextPage } from 'next';
import Img from 'next/image';
import style from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <main>
        <section className={style.mainSection}>
          <PageTitle />
          <Img src="/image/firstView.svg" alt="ファーストビュー" width="340" height="230" />
          <p>W&amp;Dでは、潜在的な課題を浮き彫りにし、技術の力で企業及び事業の成長を支えます。</p>
        </section>
        <section className={style.serviceSection}>
          <SectionTitle>SERVICE</SectionTitle>
          <div className={style.serviceContents}>
            <h3>アジャイル受託開発</h3>
            <p>
              事業や会社をさらに成長させるためのお手伝いをさせていただきます。
              <br />
              ただ開発を行うのではなく、
              <br />
              「課題を明確化した上でどのようなアプローチで解決していくか」
              <br />
              それが我々の提供するシステム開発です。
              <br />
              Webサイトの制作から業務システムの開発、
              <br />
              システムリニューアルなど幅広く対応させていただきます。
            </p>
            <ul className={style.serviceIndex}>
              <li>
                <Img src="/image/serviceHp.svg" alt="サイト制作" width="86" height="83" />
                <p>サイト制作</p>
              </li>
              <li>
                <Img src="/image/serviceWeb.svg" alt="Webサービス開発" width="86" height="83" />
                <p>Webサービス開発</p>
              </li>
              <li>
                <Img src="/image/serviceApp.svg" alt="スマホアプリ開発" width="86" height="83" />
                <p>スマホアプリ開発</p>
              </li>
            </ul>
            <button>詳しいサービス内容</button>
          </div>
        </section>
        <section className={style.companySection}>
          <SectionTitle>COMPANY</SectionTitle>
          <CompanyInfoTable />
        </section>
        <section className={style.contactSection}>
          <div>
            <div>
              <SectionTitle>CONTACT</SectionTitle>
              <p>
                制作についてのご相談・ご質問など、
                <br />
                お気軽にお問い合わせください。
              </p>
              <address>
                TEL：<a>03-5637-7729</a>
                <br />
                e-mail：<a>contact@wnd.co.jp</a>
              </address>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
