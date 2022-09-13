import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [emojis, setEmojis] = useState(["😄", "🥲", "😛", "🥸", "🤩", "😕", "😡", "🥵", "😶‍🌫️"]);
  useEffect(() => {
    console.log(emojis)
  }, [emojis])
  
  const selectEmoji = (emoji) => {
    var result = [];
    for(var i=0; i< emojis.length; i++) {
      console.log(emojis[i], emoji);
      if(emojis[i] === emoji) {
        i+=1;
        for(var j=1; j< emojis.length; j+=1) {
          result.push(emojis[i%9]);
          i+=1;
        }
        result.push(emoji)
      }
    }
    setEmojis(result);
  }
  return (
    <div className="App">
      <div className="circle" style={{"--total": 9}}>
        {
          emojis.map((emoji, index) => (
            <div className="emoji" key={index} style={{"--i": index+1}} onClick={()=>selectEmoji(emoji)}>{emoji}</div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
