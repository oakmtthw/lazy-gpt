import React, { useRef } from 'react'
import './Feed.css'
import MessageBox from '../MessageBox/MessageBox'

function Feed({messages, buttonDisable, forwardedRef, currentText}) {

  return (
    <div className="feed-container">
        {messages.map((element, index) => {
          return <MessageBox key={index} currentText={currentText} isBot={element.isBot} content={element.content} buttonDisable={buttonDisable}/>;
        })}
        <div ref={forwardedRef}></div>
    </div>
  )
}

export default Feed