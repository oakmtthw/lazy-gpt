import './App.css'
import Input from './components/Input/Input.jsx'
import TopBar from './components/TopBar/TopBar.jsx'
import Feed from './components/Feed/Feed.jsx'
import { useEffect, useRef, useState } from 'react'
import { lazyResponses } from './assets/responds.js'

function App() {

  // All messages array
  const [messages, setMessages] = useState([]);
  
  // Submit button disable state
  const [isButtonDisable, setIsButtonDisable] = useState(false);

  // Execute after clicking on submit button (in <Input />)
  const handleSubmit = (e, value, handleInputReset) => {
    e.preventDefault();
    if(value && !isButtonDisable) {
      setIsButtonDisable(true);
      setMessages((prevMessages) => [...prevMessages, {isBot: false, content: value}]);
      handleInputReset();
      generateBotResponse();
    }

  }

  const generateBotResponse = () => {
    const randomTime = 500+Math.floor(Math.random()*2)*1000;
    setTimeout(() => {
      const random = Math.floor(Math.random()*lazyResponses.length);
      setMessages((prevMessages) => [...prevMessages, {isBot: true, content: lazyResponses[random].answer, isAnim: true}]);
    }, randomTime)  }

  const handleButtonDisable = (condition) => {
    setIsButtonDisable(condition);
  }

  const handleChangingCurrentText = (currentText) => {
    childRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  const childRef = useRef(null);

  return (
    <div className="app-container">
      <div className="wrapper">
        <TopBar />
        <Feed forwardedRef={childRef} currentText={(currentText) => handleChangingCurrentText(currentText)} messages={messages} buttonDisable={handleButtonDisable} />
        <Input handleSubmit={handleSubmit} isSendDisable={isButtonDisable}/>
      </div>
    </div>
  )
}


export default App
