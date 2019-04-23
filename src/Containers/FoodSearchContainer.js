import React, { Component } from 'react';
let user1 =
  {
    id:1,
    name:"hotpot",
    picturl:"https://www.google.ca/search?q=hotpot&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjUjrukgsThAhVp6YMKHdHxDZgQ_AUIDygC&biw=1920&bih=963#imgrc=W-pog86d9F0IqM:"
  }
let user2 =
{
  id:2,
  name:"dumplings",
  picturl:"https://www.google.com/search?q=dumplings&rlz=1C1AZAA_enCA743CA769&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjDnsbe5uThAhUDjq0KHYSMD4YQ_AUIDigB&biw=1920&bih=920#imgrc=Nm2_3y-w9bVStM:"

}
let user3 =
{
  id:3,
  name:"hamburger",
  picturl:"https://www.google.com/search?q=hamburgers&rlz=1C1AZAA_enCA743CA769&source=lnms&tbm=isch&sa=X&ved=0ahUKEwirhZji5-ThAhUQUK0KHTRQDaUQ_AUIDigB&biw=1920&bih=920#imgrc=vC0BnRsRcDrXmM:"
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
