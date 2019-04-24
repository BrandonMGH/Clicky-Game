import React, { Component } from "react";
import DBZcard from "./components/DBZCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import DBZCharacters from "./DBZCharacters.json";



// function shuffle(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   return array
// }




class App extends Component {

  state = {
    DBZCharacters,
    DBZclick: [],
    score: 0,
    message: ""
  }


  shuffleClick = id => {
    let DBZclick = this.state.DBZclick;

    if(DBZclick.includes(id)){
      this.setState({ score: 0, DBZclick: [], Message: "You Guessed Incorrectly, Please Try Again" });
      return;
    }else{
      DBZclick.push(id)

      if(DBZclick.length === 12){
        this.setState({score: 8, DBZclick: [], Message: "Congratulations!  You have won."});
        return;
      }

      this.setState({ DBZCharacters, DBZclick, score: DBZclick.length, status: " " });

      for (let i = DBZCharacters.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [DBZCharacters[i], DBZCharacters[j]] = [DBZCharacters[j], DBZCharacters[i]];
      }
    }
  }
  

 

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return <div>(
      <Wrapper>
        <Title>
        <header className="App-header">
          <h1 className="App-title">Clicky-Game</h1>
           
        </header>
        </Title>
        <p className="card-text">Click Count: {this.state.score}</p>
        {this.state.DBZCharacters.map(friend => (
          <DBZcard
            shuffleClick={this.shuffleClick}
            id={friend.id}
            key={friend.id}
            image={friend.image}
            
          />
        ))}
      </Wrapper>
    );
    </div>
  }
}

export default App;


