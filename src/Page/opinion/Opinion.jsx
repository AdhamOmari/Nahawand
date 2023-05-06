import { FaComments } from 'react-icons/fa'
import { BiAddToQueue } from 'react-icons/bi'
import './style.css'

const Opinion = () => {
  return (
    <div>
      <div class='section-home home-news ng-scope'>
        <div class='heading-section'>
          <div class='sa-title popcat ng-binding '>
            Your opinion matters
            <FaComments className='mx-2' />
          </div>
          <div class='add-feedback'>
            <button class='btn' ui-sref='survey' href='#/survey'>
              <BiAddToQueue />
            </button>
          </div>

          <div class='clear'></div>
        </div>
        <div class='home-news-wrap'></div>
      </div>
    </div>

    // <div class='opinion-card'>
    //   <div class='opinion-card-header'>
    //     <h2 class='opinion-card-title'>Add Your Opinion</h2>

    //   </div>
    //   <div class='opinion-card-body'>
    //     <form>
    //       <div class='form-group'>
    //         <label for='opinion-title' class='form-label'>
    //           Title
    //         </label>
    //         <input
    //           type='text'
    //           id='opinion-title'
    //           name='opinion-title'
    //           class='form-input'
    //           required
    //         />
    //       </div>
    //       <div class='form-group'>
    //         <label for='opinion-text' class='form-label'>
    //           Opinion
    //         </label>
    //         <textarea
    //           id='opinion-text'
    //           name='opinion-text'
    //           class='form-textarea'
    //           required
    //         ></textarea>
    //       </div>
    //       <button type='submit' class='opinion-card-submit'>
    //         Submit Opinion
    //       </button>
    //     </form>
    //   </div>
    // </div>
  )
}

export default Opinion
