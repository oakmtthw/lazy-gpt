import React, { useEffect, useState } from 'react'

function TypewriterText({text, waitDelay, delay, buttonDisable, changingCurrentText}) {

    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isStart, setIsStart] = useState(false);

    useEffect(() => {
      const waitTimeout = setTimeout(()=> {
        setCurrentText("");
        setIsStart(true);
      }, waitDelay)

      return () => clearTimeout(waitTimeout);
    }, [])

    useEffect(() => {
      if (currentIndex < text.length && isStart) {
        const timeout = setTimeout(() => {
          setCurrentText(prevText => prevText + text[currentIndex]);
          setCurrentIndex(prevIndex => prevIndex + 1);
        }, delay);
    
        changingCurrentText(currentText);

        return () => clearTimeout(timeout);
      }
    }, [currentIndex, delay, text, isStart]);

    useEffect(() => {
      if(currentIndex == text.length) {
        const to = setTimeout(() => {
          buttonDisable(false);
        }, 1000)
        return () => clearTimeout(to);
      }
  }, [currentIndex])

  return (
    <div className='typewritertext' style={{color: "var(--green"}}>
         {/* icon 'Pulse / spinner' from loading.io */}
        {!currentText ?  <img style={{marginTop: '-3px'}} height={32} src="../src/assets/loading.gif" alt="loading"/> : currentText}
    </div>
  )
}

export default TypewriterText