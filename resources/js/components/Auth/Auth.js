import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SignIn from './SignIn/SignIn';
import Register from './Register/Register';
import Navigation from '../Navigation/Navigation';

class Invoice extends Component {

    state = {
        invoice: {},
        route: 'signin',
        isSignIn: false,
        user: {
          id: '',
          name: '',
          email: ''
        }
    }

    onRouteChange = (route) => {
      if(route === 'home'){
        this.setState({isSignIn:true});
        this.props.history.push('/invoice');
      }
      this.setState({route: route});
    }

    render(){
        return (
          <div className="">
                <Navigation isSignIn={this.state.isSignIn} onRouteChange={this.onRouteChange}/>
                  {
                      this.state.route === 'signin'
                      ? <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
                      : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>  
                            
                  }
        
            </div>
        );
    }
}

export default Invoice;

