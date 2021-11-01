import type { NextPage } from "next";
import Img from "next/image";
import { Header } from "../components/common/header";
import style from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <main>
        <section className={style.mainSection}>
          <h1>
            <span>HACK</span> THE PRECONCEIVED BIAS.
          </h1>
          <Img
            src="/image/firstView.svg"
            alt="ファーストビュー"
            width="340"
            height="230"
          />
          <p>
            W&amp;Dでは、潜在的な課題を浮き彫りにし、技術の力で企業及び事業の成長を支えます。
          </p>
        </section>
        <section className={style.serviceSection}>
          <h2 className={style.sectionTitle}>SERVICE</h2>
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
                <Img
                  src="/image/serviceHp.svg"
                  alt="サイト制作"
                  width="86"
                  height="83"
                />
                <p>サイト制作</p>
              </li>
              <li>
                <Img
                  src="/image/serviceWeb.svg"
                  alt="Webサービス開発"
                  width="86"
                  height="83"
                />
                <p>Webサービス開発</p>
              </li>
              <li>
                <Img
                  src="/image/serviceApp.svg"
                  alt="スマホアプリ開発"
                  width="86"
                  height="83"
                />
                <p>スマホアプリ開発</p>
              </li>
            </ul>
            <button>詳しいサービス内容</button>
          </div>
        </section>
        <section className={style.companySection}>
          <h2 className={style.sectionTitle}>COMPANY</h2>
          <table>
            <tbody className={style.companyInformation}>
              <tr>
                <td>会社名</td>
                <td>株式会社W&amp;D</td>
              </tr>
              <tr>
                <td>事業内容</td>
                <td>Web サービスの企画、制作、設計、開発、運営</td>
              </tr>
              <tr>
                <td>設立</td>
                <td>2021年2月</td>
              </tr>
              <tr>
                <td>資本金</td>
                <td>1,500,000円</td>
              </tr>
              <tr>
                <td>取締役</td>
                <td>代表取締役&nbsp;&nbsp;岡田シェーラン</td>
              </tr>
              <tr>
                <td>メールアドレス</td>
                <td>contact@wnd.co.jp</td>
              </tr>
              <tr>
                <td>電話番号</td>
                <td>03-5637-7729</td>
              </tr>
              <tr>
                <td>所在地</td>
                <td>東京都墨田区向島一丁目31-7KMG小梅301</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section className={style.contactSection}>
          <div>
            <div>
              <h2 className={style.sectionTitle}>CONTACT</h2>
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
            <form>
              <label>
                お名前<span>必須</span>
              </label>
              <input
                className={style.input}
                type="text"
                placeholder="山田　太郎"
              />
              <label>
                所属<span>必須</span>
              </label>
              <input
                className={style.input}
                type="text"
                placeholder="会社名、所属団体名など"
              />
              <label>
                メールアドレス<span>必須</span>
              </label>
              <input
                className={style.input}
                type="email"
                placeholder="mail@address.jp"
              />
              <label>
                お問い合わせ内容<span>必須</span>
              </label>
              <textarea placeholder="お問い合わせ内容をご入力ください" />
              <input className={style.btn} type="submit" value="送信" />
            </form>
          </div>
        </section>
      </main>
      <footer className={style.footer}>
        <div>
          <a className={style.logo}>
            <Img src="/image/logo.svg" alt="ロゴ" width="60" height="20" />
          </a>
          <a>プライバシーポリシー</a>
        </div>
        <small>&copy; 2020 W&amp;D Inc.</small>
      </footer>
    </>
  );
};

export default Home;
