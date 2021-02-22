import React,{Component} from 'react';
import FacebookLogin from './logIn/facebookLogIn';
import axios from 'axios';
import Nav from './NavBar/Nav';
//import cookie from 'react-cookies';
import '../essential/css/signIn.min.css'

axios.defaults.withCredentials = true;


export default class SignIn extends Component{
  constructor(props){
    super(props);
    this.responseFacebook = this.responseFacebook.bind(this);
    this.componentClicked = this.componentClicked.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  responseFacebook = async (res) =>{
    var user = {
      name: res.name,
      graphDomain: res.graphDomain,
      domainId: res.id
    };
    var item;
    await axios.post('http://localhost:5000/user/login',user)
    .then(resp => user.userId = resp.data.userId);

    console.log(item);
    if(res.status != "unknown"){
      this.props.history.push({
        pathname: '/Account',
        state:{currentUser: res.name, userId: user.userId}
      })

    }else{
      this.props.history.push('/')
      console.error("access denied");
    }

  }

  componentClicked = () =>{
  }

  logOut = (e) =>{
    e.preventDefault();
    axios.post('http://localhost:5000/user/logout');

    this.setState({
      currentUser:'',
      currentUserId:'',
      isLoggedIn: false,
      email:'',
      picture: ''
    });

  }

  render(){

    return(
      <div>
        <Nav paths = {[{value:"Home", path:"/"} , {value:"SignIn", path:"/signin"} ]}/>
        <div className="signInContainer">
          <FacebookLogin
            responseFacebook = {this.responseFacebook}
            componentClicked = {this.componentClicked}
          />
        </div>
      </div>

    )
  };
}
