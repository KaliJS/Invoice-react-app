import React, {Component} from 'react';
import axios from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

class SignIn extends Component {
	state = {
		
		SignInEmail: '',
		SignInPassword: ''

	}

	onEmailChange = (e) => {
		this.setState({SignInEmail: e.target.value});
	}

	onPasswordChange = (e) => {
		this.setState({SignInPassword: e.target.value});
	}

	onSubmitSignIn = (e) => {
		e.preventDefault();
		axios.post('/signin', this.state)
		.then(res => {
			if(res.data.status === 200) {
				toast.success(res.data.message);
				this.props.onRouteChange('home');
			}else{
				toast.error(res.data.message); 
			}
		})	
	}


	render(){
		return(
			

		    <div className="login-wrap d-flex align-items-center flex-wrap justify-content-center">
		        <div className="container">
		            <div className="row align-items-center">
		                
		                <div className="col-md-12 col-lg-12">
		                    <div className="login-box bg-white box-shadow border-radius-10">
		                        <div className="login-title">
		                            <h2 className="text-center text-primary">Login To App</h2>
		                        </div>
		                        
		                          <form onSubmit={this.onSubmitSignIn}>
		                            <div className="input-group custom">
		                                <input type="email" className="form-control form-control-lg" placeholder="Enter Email" onChange={this.onEmailChange} required/>
		                                <div className="input-group-append custom">
		                                    <span className="input-group-text"><i className="icon-copy dw dw-user1"></i></span>
		                                </div>
		                            </div>
		                            <div className="input-group custom">
		                                <input type="password" className="form-control form-control-lg" placeholder="**********" onChange={this.onPasswordChange} required/>
		                                <div className="input-group-append custom">
		                                    <span className="input-group-text"><i className="dw dw-padlock1"></i></span>
		                                </div>
		                            </div>
		                            
		                            <div className="row">
		                                <div className="col-sm-12">
		                                    <div className="input-group mb-0">
		                                        
		                                        <button className="btn btn-primary text-white btn-lg btn-block" type="submit" >Sign In</button>
		                                    </div>
		                                    <div className="font-16 weight-600 pt-10 pb-10 text-center" data-color="#707373">OR</div>
		                                    <div className="input-group mb-0">
		                                        <a className="btn btn-outline-primary btn-lg btn-block" onClick={()=>this.props.onRouteChange('register')}>Register To Create Account</a>
		                                    </div>
		                                </div>
		                            </div>
		                          </form>
		                        
		                    </div>
		                </div>
		            </div>
		        </div>
		    </div>


		);
	}
}

export default SignIn;