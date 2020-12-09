import React, { useState } from 'react';

import './App.css';


function App() {
  const headingText = "Cool";
  
  var [emoji,setEmoji] = useState("");
  var [text,setText] = useState("meaning");



  

  const emodict = {
    "🥶" : "Cold Face",
    "🏂" : "Snowboarder",
    "🌲" : "Evergreen Tree",
    "🏔️" : "Snow-Capped Mountain",
    "🌁" : "Foggy",
    "🌬️" : "Wind Face",
    "❄️" : "Snowflake",
    "☃️" : "Snowman",
    "🎿" : "Skis",
    "🧣" : "Scarf",
    "🌂" : "Closed Umbrella",
    "☔" : "Umbrella with Rain Drops",
    "🧥" : "Coat",
  }
  
  const emoarr = Object.keys(emodict);

  const inputHandler = (e) =>{
    const inputEmoji = e.target.value;
    setEmoji(inputEmoji)

    if(inputEmoji in emodict){
      setText(emodict[inputEmoji]);    
    }else{
      setText("")
    }
    
  }

  const emojiHandler = (inputText) =>{
    setText(emodict[inputText]);
  }
  
  return (
    <div className="App" >
      <div className="container"> 
        <h1> <span style={{backgroundColor:"lightblue",color:"black"}}>{headingText}</span> Emojis</h1>
        <br />
        <h1>winter is coming</h1>
        
        <div className="container container-center">
          <input placeholder="Emoji" onChange={inputHandler} />
        
          
          <h1 style={{size:"4rem"}}>
          {
            emoarr.map((emoji) => (
              <span id="emo" onClick={()=>emojiHandler(emoji)}>
                  {emoji}
              </span>
            ))
          }
          </h1>
          

          <div className="output">
            <h2>{text}</h2>
          </div>
          
        </div>
        
      </div>
    </div>
  );
}

export default App;
