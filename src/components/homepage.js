import React,{Component} from 'react';
import FacebookLogin from './logIn/facebookLogIn';

export default class Homepage extends Component{
  constructor(props){
    super(props);
    this.responseFacebook = this.responseFacebook.bind(this);
    this.componentClicked = this.componentClicked.bind(this);
    this.logOut = this.logOut.bind(this);

    this.state = {
      currentUser:'',
      currentUserId:'',
      isLoggedIn: false,
      email:'',
      picture: ''
    }
  }

  responseFacebook = (res) =>{
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: res.name,
        graphDomain: res.graphDomain,
        domainId: res.id
      })
    };
    fetch('http://localhost:5000/user/add', requestOptions)
    .then(res => res.json());

    if(res.status != "unknown"){
      this.setState({
        isLoggedIn : true,
        currentUserId : res.id,
        currentUser : res.name,
        email : res.email,
        picture : res.picture.data.url
      });
      const payload = this.state;
      console.log(payload);

    }else{
      console.alert("access denied");
    }

  }

  componentClicked = () =>{
    if(this.state.isLoggedIn){
      console.log("You've logged in")
    }else{
      console.log("You've tried to log in")
    }
  }

  logOut = (e) =>{
    e.preventDefault();
    this.setState({
      currentUser:'',
      currentUserId:'',
      isLoggedIn: false,
      email:'',
      picture: ''
    });
  }

  render(){
    let logInComponent;

    if(this.state.isLoggedIn){
      logInComponent = (
        <div>
          <p> Name: {this.state.currentUser}</p>
          <p> ID: {this.state.currentUserId}</p>
          <p> Email: {this.state.email}</p>
          <img src={this.state.picture} alt="Your picture"/>
          <button onClick ={this.logOut}> Log Out </button>
      </div>


      )
    }else{
      logInComponent = (
        <FacebookLogin
          responseFacebook = {this.responseFacebook}
          componentClicked = {this.componentClicked}
        />
      )
    }

    return(
      <div>
        {logInComponent}
      </div>
    )
  };
}
