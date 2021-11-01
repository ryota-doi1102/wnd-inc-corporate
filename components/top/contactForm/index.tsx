import { ChangeEventHandler, useState } from 'react';
import { validateEmail } from 'utils/string';
import style from './contactForm.module.scss';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [mailError, setMailError] = useState(false);

  const handleChangeName: ChangeEventHandler<HTMLInputElement> = (e) => setName(e.target.value);

  const handleChangeEmail: ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value;
    setMail(value);
    setMailError(!validateEmail(value));
  };

  return (
    <form className={style.contactForm}>
      <label className={style.inputLabel}>
        お名前<span>必須</span>
      </label>
      <input className={style.input} type="text" placeholder="山田　太郎" value={name} onChange={handleChangeName} />
      <label className={style.inputLabel}>
        所属<span>必須</span>
      </label>
      <input className={style.input} type="text" placeholder="会社名、所属団体名など" />
      <label className={style.inputLabel}>
        メールアドレス<span>必須</span>
      </label>
      <input
        className={style.input}
        type="email"
        placeholder="mail@address.jp"
        value={mail}
        onChange={handleChangeEmail}
      />
      {mailError && <p>正しいEメールを入力してください。</p>}
      <label className={style.inputLabel}>
        お問い合わせ内容<span>必須</span>
      </label>
      <textarea className={style.textarea} placeholder="お問い合わせ内容をご入力ください" />
      <input className={style.btn} type="submit" value="送信" disabled={name === '' || mail === '' || mailError} />
    </form>
  );
};
