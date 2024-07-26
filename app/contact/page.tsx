import ContactForm from '../_components/ContactForm'
import styles from './page.module.css'
export default function Contact() {
  return(
    <div className={styles.container}>
      <p className={styles.text}>
        ご質問・ご相談は下記フォームよりお問い合わせください。
        <br />
        内容確認後、担当者より3営業日以内にご連絡いたします。
      </p>
      <ContactForm />
    </div>
  )
}