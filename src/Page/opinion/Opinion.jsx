import { useState } from 'react'
import { useSelector } from 'react-redux'
import { FaComments } from 'react-icons/fa'
import { BiAddToQueue } from 'react-icons/bi'
import './style.css'

const Opinion = () => {
  const isArabic = useSelector(state => state.isArabic)

  const [opinion, setOpinion] = useState('')
  const [showOpinionField, setShowOpinionField] = useState(false)

  const handleOpinionChange = event => {
    setOpinion(event.target.value)
  }

  const handleAddOpinion = () => {
    setShowOpinionField(true)
  }

  const handleSubmitOpinion = () => {
    const emailLink = `mailto:adhamalomari909@gmail.com?subject=Opinion&body=${encodeURIComponent(
      opinion
    )}`
    window.location.href = emailLink
  }

  return (
    <div className='rtl'>
      {' '}
      <div className='section-home home-news ng-scope'>
        <div className='heading-section'>
          <div className='sa-title popcat ng-binding '>
            {isArabic ? 'رأيك يهمنا' : 'Your opinion matters'}
            <FaComments className='mx-2' />
          </div>
          <div className='add-feedback'>
            <button className='btn' onClick={handleAddOpinion}>
              {isArabic ? 'أضف رأيك' : 'Add Your Opinion'}
              <BiAddToQueue className='mx-1' />
            </button>
          </div>
          <div className='clear'></div>
        </div>
        <div className='home-news-wrap'>
          {showOpinionField && (
            <div className='opinion-card'>
              <div className='opinion-card-header'>
                <h2 className='opinion-card-title'>
                  {isArabic ? 'أضف رأيك' : 'Add Your Opinion'}
                </h2>
              </div>
              <div className='opinion-card-body'>
                <textarea
                  className='opinion-textarea'
                  placeholder={
                    isArabic ? 'أدخل رأيك هنا...' : 'Enter your opinion here...'
                  }
                  value={opinion}
                  onChange={handleOpinionChange}
                ></textarea>
                <button
                  className='opinion-card-submit'
                  onClick={handleSubmitOpinion}
                >
                  {isArabic ? 'إرسال الرأي' : 'Submit Opinion'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Opinion
