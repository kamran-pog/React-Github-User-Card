import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      User: [],
      UserFollowing: []
    }
    

  }

  componentDidMount() {
    fetch("https://api.github.com/users/kamran-pog")
      .then((res) => res.json())
      .then((user) => {
        console.log("User: ", user);
        this.setState({User: user });
      })
      .catch((err) => {
        console.log(err, "error");
      })

    fetch("https://api.github.com/users/kamran-pog/following")
      .then((res) => res.json())
      .then((following) => {
        console.log("Following: ", following);
        this.setState({UserFollowing: following });
      })
      .catch((err) => {
        console.log(err, "error");
      })
  }
  
  render() {
    const Title = styled.h1`
      with: 100%;
      align-content: center;
      margin: 0 auto;
    `;
    let userState = this.state.User;

    // let followingState = this.state.UserFollowing
    return (
      <>
        <Title>GitHub User Card</Title>
          <img
          src={userState.avatar_url}
          alt={userState.avatar_url}
          key={userState.avatar_url}
          width="250"
          height="250"
        /> 
        <strong><br/>Name: </strong> {userState.name} <br/>
        <strong>User Login:</strong> {userState.login}<br/>
        <strong>User ID:</strong> {userState.id}<br/>
        <strong>Number of Followers:</strong> {userState.followers}<br/>
        <strong>Location:</strong> {userState.location}<br/>
        <strong>Twitter @:</strong> {userState.twitter_username}<br/>
        <strong>Public Repos:</strong> {userState.public_repos}<br/>
        <br/><Title>GitHub following</Title>
        {this.state.UserFollowing.map((followings) => (
          <>  
        <br/> <strong> Name: </strong> {followings.login}<br/>
                <img 
                  src={followings.avatar_url}
                  alt={followings.avatar_url}
                  key={followings.login} 
                  width="250"
                  height="250" 
                />
                
          </>
        ))}

      </>
      
      
    )
  }
}

