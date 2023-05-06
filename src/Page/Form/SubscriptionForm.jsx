import { useState } from 'react'
import { MdArrowForwardIos } from 'react-icons/md'
import styles from './style.module.css'

const SubscriptionForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    // Here you can add your logic to submit the form
    console.log(name, email, phone)
  }

  return (
    <div className={styles.sectionSubscribe}>
      <div className={styles.subcontainer}>
        <div className={styles.subrow}>
          <div className={styles.subcol}>
            <div className={styles.sectionTitle}>SUBSCRIBE</div>
            <p className={styles.textsub}>
              Get offers and events information every month
            </p>
            <div className={styles.mailSubscribe}>
              <form name='' className={styles.form}>
                <div className={styles.row}>
                  <div className={styles.col12}>
                    <input
                      className={styles.formControl}
                      name='name'
                      placeholder='Enter your name'
                      type='text'
                      value={name}
                      onChange={e => setName(e.target.value)}
                    />
                  </div>
                </div>
                <div className={styles.row}>
                  <div className={`${styles.col6} ${styles.colMd6}`}>
                    <input
                      className={styles.formControl}
                      name='email'
                      placeholder='Enter email address'
                      type='email'
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                  </div>
                  <div className={`${styles.col6} ${styles.colMd6}`}>
                    <input
                      className={styles.formControl}
                      name='mobile'
                      placeholder='Enter mobile number'
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
                  SUBSCRIBE
                  <MdArrowForwardIos />
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
