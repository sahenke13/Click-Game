import React from "react";
import Wrapper from "./components/Wrapper/index";
import HeaderCard from "./components/HeaderCard";
import charList from "../src/Characters.json"
import CharCard from "./components/CharacterCard"
import Footer from "./components/Footer"
import "./App.css"



class App extends React.Component {

  state = {
    score: 0,
    highScore: 0,
    charList
  }

  // where in is current index, and j represents next index.  Fisher/Yates Array Shuffle method
shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

IncrementScore = () => {
  const newScore = this.state.score +1;
  this.setState({score: newScore})
}



//click function.
clicked = (id) => {
     
    const currentChar = this.state.charList.filter(chars=>{
        return (chars.id === id)
      })[0];
     if(currentChar.clicked === false){
       this.IncrementScore();
       currentChar.clicked = true;
       this.shuffleArray(this.state.charList);
     }
     else{
        alert("You Lose. Try Again")
       console.log("Game Over");
       if(this.state.score > this.state.highScore){
         this.setState({highScore: this.state.score,
                          score: 0})
       }
       this.state.charList.forEach(char => (char.clicked = false))
     }
      console.log(currentChar);

   
   
    
  }

  render()  {
    return(
      
      <Wrapper>
        <HeaderCard score = {this.state.score} highScore = {this.state.highScore}>SuperHero Click Game</HeaderCard>
       <div id = "charWell">
        
        {this.state.charList.map(char =>(
          <CharCard 
            key = {char.id}
            id= {char.id}
            image={char.image}
            clicked={char.clicked}
            name={char.name}
            clickChar ={this.clicked}
            />
        ))
        }
        </div>
      
  
    
        <Footer>A Game by TCCC</Footer>
      </Wrapper>
    );
  }
}
export default App;
