import React, { useEffect, useState } from 'react'
import './Input.css'
import { randomPlaceholder } from '../../assets/responds.js'

function Input({handleSubmit, isSendDisable}) {

  const [inputText, setInputText] = useState("");
  const [randomPh, setRandomPh] = useState('');

  const generateRandomPlaceholder = () => {
    const random = Math.floor(Math.random()*randomPlaceholder.length);
    setRandomPh(randomPlaceholder[random].content);
  }

  const handleInputValue = (e) => {
    setInputText(e.target.value);
  }

  // Clear input function
  const handleInputReset = () => {
    setInputText("");
  }

  useEffect(() => {
    generateRandomPlaceholder();
  }, []);


  return (
    <div className='input-container'>
      <form>
        <input type="text" onChange={handleInputValue} value={inputText} placeholder={randomPh}/>
        <button type='submit' className={isSendDisable ? 'disable' : 'able'} onClick={(e) => handleSubmit(e, inputText, handleInputReset)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-right" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M13 18l6 -6" /><path d="M13 6l6 6" /></svg>
        </button>
      </form>
    </div>
  )
}

export default Input