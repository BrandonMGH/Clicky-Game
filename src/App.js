import React, { Component } from "react";
import DBZcard from "./components/DBZCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Container from "./components/Title";
// import DBZCharacters from "./DBZCharacters.json";
import  Gohan  from "./images/Gohan.jpg";
import  Goku  from "./images/Goku.jpg";
import  Androids  from "./images/Androids.jpg";
import  Android21  from "./images/Android21.jpg";
import  Piccolo from "./images/Piccolo.png";
import Vegeta from "./images/Vegeta.jpg";
import Broly from "./images/Broly.jpg";
import Cell from "./images/Cell.jpg";
import Trunks from "./images/Trunks.jpg";
import Frieza from "./images/Frieza.jpg";
import SuperBoo from "./images/SuperBoo.jpg";
import Janemba from "./images/Janemba.jpg";



let DBZCharacters = [
  {
    id: 1,
    image: Goku
  },
  {
    id: 2,
    image: Gohan
  },
  {
    id: 3,
    image: Android21
  },
  {

    id: 4,
    image: Androids
  },
  {
    id: 5,
    image: Piccolo
  },
  {
    id: 6,
    image: Vegeta
  },
  {
    id: 7,
    image: Broly
  },
  {

    id: 8,
    image: Cell
  },
  {
    id: 9,
    image: Trunks
  },
  {
    id: 10,
    image: Frieza
  },
  {
    id: 11,
    image: SuperBoo
  },
  {

    id: 12,
    image: Janemba
  },
]



class App extends Component {


  state = {
    DBZCharacters,
    DBZclick: [],
    score: 0,
    message: ""
  }


  shuffleClick = id => {
    let DBZclick = this.state.DBZclick;

    if (DBZclick.includes(id)) {
      this.setState({ score: 0, DBZclick: [], message: "You Guessed Incorrectly, Please Try Again" });
      return
    } else {
      DBZclick.push(id)
      this.setState({ message: "" })

      if (DBZclick.length === DBZCharacters.length) {
        this.setState({ score: DBZCharacters.length, DBZclick: [], message: "Congratulations!  You have won." });
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
    return <div>
      <Container>
      <div className="row">
            <div className="col-12">
              <h1> Dragon Ball Image Clicker</h1>
              <h3> Click an image to increase your score.  Make sure you don't click the same image twice!</h3>
              <p className="card-text">Click Count: {this.state.score}</p>
              <Title message={this.state.message} />
              </div>
          </div>
        <Wrapper>
          {this.state.DBZCharacters.map(friend => (
            <DBZcard
              shuffleClick={this.shuffleClick}
              id={friend.id}
              key={friend.id}
              image={friend.image}
            />
          ))}
        </Wrapper>
      </Container>
      );
    </div>
  }
}


export default App;


