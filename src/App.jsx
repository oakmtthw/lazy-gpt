import './App.css'
import Input from './components/Input/Input.jsx'
import TopBar from './components/TopBar/TopBar.jsx'
import Feed from './components/Feed/Feed.jsx'
import { useEffect, useRef, useState } from 'react'
import { lazyResponses, lazyResponsesToFact } from './assets/responds.js'
import QuestionTemplates from './components/QuestionTemplates/QuestionTemplates.jsx'
import axios from 'axios'


function App() {

  // All messages array
  const [messages, setMessages] = useState([]);
  
  // Submit button disable state
  const [isButtonDisable, setIsButtonDisable] = useState(false);
  
  const [showFeed, setShowFeed] = useState(false);
  const [currentFact, setCurrentFact] = useState([{}]);

  // Execute after clicking on submit button (in <Input />)
  const handleSubmit = (e, value, handleInputReset) => {
    e.preventDefault();
    if(value && !isButtonDisable) {
      setShowFeed(true);
      setIsButtonDisable(true);

      // Add user input to feed
      setMessages((prevMessages) => [...prevMessages, {isBot: false, content: value}]);
      handleInputReset !== "" && handleInputReset();
      generateBotResponse();
    }

  }

  const generateBotResponse = () => {
    const randomTime = 500+Math.floor(Math.random()*2)*1000;
    
    setTimeout(() => {
      const random = Math.floor(Math.random()*lazyResponses.length);
      switch(lazyResponses[random].answer) {
        case "[randomFact]": fetchRandomFact(lazyResponses[random]); break;
        default: setMessages((prevMessages) => [...prevMessages, {id: lazyResponses[random].id, isBot: true, content: lazyResponses[random].answer, isAnim: true}]); break;
      }
    }, randomTime)
    
  }

  const generateFactResponse = () => {
    const random = Math.floor(Math.random()*lazyResponsesToFact.length);
    return lazyResponsesToFact[random].answer;
    
  }

  // Scroll bottom every change
  useEffect(() => {
    const scrollTimer =  setTimeout(() => {
      showFeed && childRef.current.scrollIntoView({ behavior: 'smooth' });
    }, 10)
  },)
    

  const handleButtonDisable = (condition) => {
    setIsButtonDisable(condition);
  }

  const handleChangingCurrentText = (currentText) => {
    showFeed && childRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  const childRef = useRef(null);

  const fetchRandomFact = async ( respObj ) => {
    try {
      const { data }  = await axios('https://api.api-ninjas.com/v1/facts?limit=1', {
        headers: {
          'X-Api-Key': import.meta.env.VITE_RANDOM_FACT_API_KEY
        }
      });

      const randomContent = generateFactResponse();

      setMessages((prevMessages) => [...prevMessages, {id: respObj.id, isBot: true, content: `${randomContent} ${data[0].fact}`, isAnim: true}]);
      
    } catch (error) {

    }
  }

  return (
    <div className="app-container">
      <div className="wrapper">
        <TopBar />
        
        {showFeed ? 
        <Feed forwardedRef={childRef} currentText={(currentText) => handleChangingCurrentText(currentText)} messages={messages} buttonDisable={handleButtonDisable} />
        : <QuestionTemplates handleButton={(e, text) => {
          handleSubmit(e, text, "");
          setShowFeed(true);
          }} />}

        <Input handleSubmit={handleSubmit} isSendDisable={isButtonDisable}/>
      </div>
    </div>
  )
}


export default App
