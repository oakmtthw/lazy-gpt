import React from 'react'
import './MessageBox.css'
import TypewriterText from '../TypewriterText/TypewriterText'

function MessageBox({isBot, content, buttonDisable}) {


  return (
    <div className='messagebox-container'>
        {isBot ? <div className="message bot">
            <div className="msg-pfp">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-robot-face" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 5h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2z" /><path d="M9 16c1 .667 2 1 3 1s2 -.333 3 -1" /><path d="M9 7l-1 -4" /><path d="M15 7l1 -4" /><path d="M9 12v-1" /><path d="M15 12v-1" /></svg>
            </div>
            <div className="msg-text">
                <div className="name">
                    LazyGPT
                </div>
                <div className="text-content">
                    <TypewriterText content={content} buttonDisable={buttonDisable}/>
                </div>
            </div>
        </div> : <div className="message user">
            <div className="msg-pfp">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /></svg>
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