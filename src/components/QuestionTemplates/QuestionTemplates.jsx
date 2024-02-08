import React from 'react'
import './QuestionTemplates.css'

  function QuestionTemplates({ handleButton }) {
    return (
      <div className='questiontemplates-container'>
        
      <div className="qt-wrapper">
        
        <h2>How can I help you today?</h2>

        <div className="qt-row">

          {/* ROW 1 */}
          <button className="qt-single" onClick={(e) => {handleButton(e, "What's the weather today?")}} >
            What's the weather today? ⛅
          </button>

          <button className="qt-single" onClick={(e) => {handleButton(e, "Tell me a fun story")}} >
            Tell me a fun story 🤣
          </button>

        </div>

          {/* ROW 2 */}
        <div className="qt-row">

          <button className="qt-single" onClick={(e) => {handleButton(e, "How to get rich?")}} >
            How to get rich? 🤑
          </button>

          <button className="qt-single" onClick={(e) => {handleButton(e, "How to find a gf?")}} >
            How to find a gf? ❤️
          </button>

        </div>

      </div>
    </div>
  )
}

export default QuestionTemplates