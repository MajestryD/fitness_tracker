import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';


export default class LoginFacebook extends Component{

  render(){
    let fbAuth =
      (<FacebookLogin
        appId="864294370750323"
        autoLoad={false}
        fields="name,email,picture"
        onClick={this.props.componentClicked}
        callback={this.props.responseFacebook} />
    );



    return(
      <div>
        {fbAuth}
      </div>
    );

  };


}
