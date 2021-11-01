import style from './companyInfoTable.module.scss';

export const CompanyInfoTable = () => (
  <table className={style.companyInformationTable}>
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
);
