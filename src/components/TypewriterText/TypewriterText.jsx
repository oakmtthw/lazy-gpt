import React, { useEffect, useState } from 'react'
import './TypewriterText.css'

function TypewriterText({text, delay, buttonDisable, changingCurrentText}) {

    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setCurrentText(prevText => prevText + text[currentIndex]);
          setCurrentIndex(prevIndex => prevIndex + 1);
        }, delay);

        changingCurrentText(currentText);
    
        return () => clearTimeout(timeout);
      }
    }, [currentIndex, delay, text]);

    useEffect(() => {
      if(currentIndex == text.length) {
        const to = setTimeout(() => {
          buttonDisable(false);
        }, 1000)
        return () => clearTimeout(to);
      }
  }, [currentIndex])

  return (
    <div className='typewritertext'>
        {currentText}
    </div>
  )
}

export default TypewriterText