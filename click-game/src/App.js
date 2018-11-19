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
    chars: charList
  }

  render()  {
    return(
      
      <Wrapper>
        <HeaderCard score = {this.state.score} highScore = {this.state.highScore}>SuperHero Click Game</HeaderCard>
       <div id = "charWell">
        
        {this.state.chars.map(char =>(
          <CharCard 
            id= {char.id}
            image={char.image}
            clicked={char.clicked}
            name={char.name}
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
