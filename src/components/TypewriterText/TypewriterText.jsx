import React, { useEffect, useState } from 'react'
import './TypewriterText.css'

function TypewriterText({content, buttonDisable}) {

    const [twSpeed, setTwSpeed] = useState(Math.round((content.length)/24));
    const [changeCn, setChangeCn] = useState(false);
    const [timeToDisable, setTimeToDisable] = useState(0);

    const [cssVars, setCssVars] = React.useState({
        typewriterSpeed: `${twSpeed}s`,
        typewriterChars: content.length,
        backgroundColor: "black",
    });

    useState(() => {
        document.documentElement.style.setProperty('--typewriterSpeed', cssVars.typewriterSpeed),
        document.documentElement.style.setProperty('--typewriterChars', cssVars.typewriterChars),
        document.documentElement.style.setProperty('--backgroundColor', cssVars.backgroundColor)

        setTimeout(() => {
          setChangeCn(true);
          buttonDisable(false);
        }, (twSpeed+6)*1000)
    }, [])

  return (
    <div className={!changeCn ? 'typewritertext play' : 'typewritertext'}>
        {content}
    </div>
  )
}

export default TypewriterText