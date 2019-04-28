import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class AboutUsComponent extends Component{
  render(){
    return(
        <div className="container-fluid">
            <div className="d-flex align-items-stretch">
                <main id="main" role="main">
                    <h1>AboutUS</h1>
                    <h2>Tearm members</h2>
                    <h3>Mike</h3>
                    <h4>Adamic person on coding and learing it</h4>
                    <h3>Robert</h3>
                    <h4>An international student who are learning bussinse running in University of Western</h4>
                    <h3>Wei</h3>
                    <h4>An international student in University of Western</h4>
                    <h3>Hardy</h3>
                    <h4>Learning coding and trying to find a job in London</h4>
                    <h2>AboutOurCondition&Ideas</h2>
                    <p>Nowadays people always rely on phones for working and life. So, our company is working on phones application so far. Meanwhile, information and news are also a big part of people life.  People who are living in new cities or would like to travel always spend much more time to search for information on applications. According to this situation, we combine these two together and complete an information sharing application. If you recently want to change your life or make it easier, please read the following context carefully.  Do not be a stranger, you are a member of this team. Our first step is that we just focus on Food cooking.</p>
                    <h2>Related products</h2>
                    <p>There are many applications help people to get more familiar with locals. However, they always focus on one or two parts for new people. Such as Food guide. We do not only help new people to know every single information they need, and also give a place for people to cook their own dishes.</p>
                    <h2>Functional developing</h2>
                    <h4>Local popular restaurants</h4>
                    <h4>Public transport</h4>
                    <h4>Order hotels</h4>
                    <h4>Find partners</h4>
                    <h4>......more functions are coming by you!</h4>
                    <p>The reason is that we give a place for people to share their information. As long as people share more useful information, users can get more news they need. We are welcome users to send more suggestions to us and the data is created by us!</p>
                    <h2>customers</h2>
                    <p>International students</p>
                    <p>People who are working aborad</p>
                    <p>Travelling people</p>
                    <p>People who like cooking and dishes</p>
                </main>
            </div>
        </div>
    )
  }
}

export default AboutUsComponent;
