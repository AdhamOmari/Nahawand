import { useState } from 'react'
import { MdArrowForwardIos } from 'react-icons/md'
import { useSelector } from 'react-redux'
import styles from './style.module.css'

const SubscriptionForm = () => {
  const isArabic = useSelector(state => state.isArabic)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    // Here you can add your logic to submit the form
    console.log(name, email, phone)
  }

  const language = isArabic ? 'ar' : 'en'
  const namePlaceholder = language === 'ar' ? 'ادخل اسمك' : 'Enter your name'
  const emailPlaceholder =
    language === 'ar' ? 'ادخل عنوان بريدك الإلكتروني' : 'Enter email address'
  const phonePlaceholder =
    language === 'ar' ? 'ادخل رقم هاتفك المحمول' : 'Enter mobile number'
  const submitButtonLabel = language === 'ar' ? 'اشتراك' : 'SUBSCRIBE'

  return (
    <div className={styles.sectionSubscribe}>
      <div className={styles.subcontainer}>
        <div className={styles.subrow}>
          <div className={styles.subcol}>
            <div className={styles.sectionTitle}>
              {language === 'ar' ? 'اشترك' : 'SUBSCRIBE'}
            </div>
            <p className={styles.textsub}>
              {language === 'ar'
                ? 'احصل على عروض ومعلومات الأحداث كل شهر'
                : 'Get offers and events information every month'}
            </p>
            <div className={styles.mailSubscribe}>
              <form name='' className={styles.form}>
                <div className={styles.row}></div>
                <div className={styles.row}>
                  <div className={`${styles.col6} ${styles.colMd6}`}>
                    <input
                      className={styles.formControl}
                      name='email'
                      placeholder={emailPlaceholder}
                      type='email'
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                  </div>
                  <div className={`${styles.col6} ${styles.colMd6}`}>
                    <input
                      className={styles.formControl}
                      name='mobile'
                      placeholder={phonePlaceholder}
                      type='number'
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                    />
                  </div>
                </div>
                <button
                  type='submit'
                  className={`${styles.submit} ${styles.btn} ${styles.btnBlock}`}
                  onClick={handleSubmit}
                  disabled={
                    !name || !email || phone < 499999999 || phone > 599999999
                  }
                >
                  {submitButtonLabel}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubscriptionForm
