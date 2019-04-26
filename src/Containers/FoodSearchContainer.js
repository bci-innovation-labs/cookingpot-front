import React, { Component } from 'react';
let user1 =
  {
    id:1,
    name:"hotpot",
    picturl:"https://s3-media2.fl.yelpcdn.com/bphoto/1mxolN72C53UVSq02G39Tg/ls.jpg"
  }
let user2 =
{
  id:2,
  name:"dumplings",
  picturl:"https://thewoksoflife.com/wp-content/uploads/2016/04/chicken-dumplings-7.jpg"

}
let user3 =
{
  id:3,
  name:"hamburger",
  picturl:"https://recipes-secure-graphics.grocerywebsite.com/0_GraphicsRecipes/4589_4k.jpg"
}
class App extends Component {
  render() {
    return(
     <div className="App">
      <h1>Cooking Pot</h1>
      <div>
          <p>Hello food</p>
          <button> Wow </button>
          <p>{user1.name}</p>
          <img src={user1.picturl} alt={user1.name} />
          <p>{user2.name}</p>
          <img src={user2.picturl} alt={user2.name} />
          <p>{user3.name}</p>
          <img src={user3.picturl} alt={user3.name} />
      </div>
      </div>
    );
  }
};
export default App;
