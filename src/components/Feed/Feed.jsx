import React, { useEffect } from 'react'
import './Feed.css'
import MessageBox from '../MessageBox/MessageBox'

function Feed({messages, buttonDisable}) {

  return (
    <div className="feed-container">
        {messages.map((element, index) => {
          return <MessageBox key={index} isBot={element.isBot} content={element.content} buttonDisable={buttonDisable}/>;
        })}
    </div>
  )
}

export default Feed