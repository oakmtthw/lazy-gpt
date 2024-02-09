import React from 'react'
import './MessageBox.css'
import TypewriterText from '../TypewriterText/TypewriterText'

function MessageBox({isBot, content, buttonDisable, currentText}) {


  return (
    <div className='messagebox-container'>
        {isBot ? <div className="message bot">
            <div className="msg-pfp">
                <img width={24} height={24} src='./lazygpt-logo-svg.svg' alt='[lazygpt-pfp]'/>
                <span style={{textAlign: "right", color: "var(--green"}}>A:</span>
            </div>
            <div className="msg-text">
                <div className="name">
                    LazyGPT
                </div>
                <div className="text-content">
                    <TypewriterText text={content} changingCurrentText={currentText} waitDelay={3000} delay={20} buttonDisable={buttonDisable}/>
                </div>
            </div>
        </div> : <div className="message user">
            <div className="msg-pfp">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /></svg>
                <span style={{textAlign: "right"}}>Q:</span>
            </div>
            <div className="msg-text">
                <div className="name">
                    User
                </div>
                <div className="text-content">
                    {content}
                </div>
            </div>
        </div>}
    </div>
  )
}

export default MessageBox