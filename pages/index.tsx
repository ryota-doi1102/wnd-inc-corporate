import type { NextPage } from 'next'
import style from "../styles/Home.module.css"

const Home: NextPage = () => {
  return (
    <>
      <header className={style.header}>
        <a className={style.logo}><img src="/image/logo.svg"/></a>
        <a className={style.contact}>CONTACT US</a>
      </header>
      <main>
        <section>
          <h1>HACK THE PRECONCEIVED BIAS.</h1>
          <img src="" alt="ファーストビュー"/>
          <p>W&amp;Dでは、潜在的な課題を浮き彫りにし、技術の力で企業及び事業の成長を支えます。</p>
        </section>
        <section>
          <h2>SERVICE</h2>
          <h3>アジャイル受託開発</h3>
          <p>
            事業や会社をさらに成長させるためのお手伝いをさせていただきます。<br/>
            ただ開発を行うのではなく、<br/>
            「課題を明確化した上でどのようなアプローチで解決していくか」<br/>
            それが我々の提供するシステム開発です。<br/>
            Webサイトの制作から業務システムの開発、<br/>
            システムリニューアルなど幅広く対応させていただきます。
          </p>
          <div>
            <img src="" alt="サイト制作"/>
            <p>サイト制作</p>
          </div>
          <div>
            <img src="" alt="Webサービス開発"/>
            <p>Webサービス開発</p>
          </div>
          <div>
            <img src="" alt="スマホアプリ開発"/>
            <p>スマホアプリ開発</p>
          </div>
          <button>詳しいサービス内容</button>
        </section>
        <section>
          <h2>COMPANY</h2>
          <table>
            <tbody>
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
                <td>代表取締役 岡田シェーラン</td>
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
        <section>
          <h2>CONTACT</h2>
          <p>
            制作についてのご相談・ご質問など、<br/>
            お気軽にお問い合わせください。
          </p>
          <address>
            tel:<a>03-5637-7729</a><br/>
            e-mail:<a>contact@wnd.co.jp</a>
          </address>
          <form>
            <label>お名前<span>必須</span></label>
            <input type="text"/>
            <label>所属<span>必須</span></label>
            <input type="text"/>
            <label>メールアドレス<span>必須</span></label>
            <input type="email"/>
            <label>お問い合わせ内容<span>必須</span></label>
            <textarea></textarea>
            <input type="submit" value="送信"/>
          </form>
        </section> 
      </main>
      <footer>
        <span>W&amp;D</span>
        <a>プライバシーポリシー</a>
        <small>&copy; 2020 W&amp;D Inc.</small>
      </footer>
    </>
  )
}

export default Home
