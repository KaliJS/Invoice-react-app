import React, {Component} from 'react';
import axios from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

class Register extends Component {
	state = {
		name: '',
		email: '',
		password: '',
		errors: {
	      name: '',
	      email: '',
	      password: ''
	    }
	}
	
	inputChangeHandler = (e) => {
	  e.preventDefault();
	  const { name, value } = e.target;
	  let errors = this.state.errors;
	  const validEmailRegex = 
      RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);


	  switch (name) {
	    case 'name': 
	      errors.name = 
	        value.length < 3
	          ? 'Name must be 3 characters long!'
	          : '';
	      break;
	    case 'email': 
	      errors.email = 
	        validEmailRegex.test(value)
	          ? ''
	          : 'Email is not valid!';
	      break;
	    case 'password': 
	      errors.password = 
	        value.length < 5
	          ? 'Password must be 5 characters long!'
	          : '';
	      break;
	    default:
	      break;
	  }

	  this.setState({errors, [name]: value});
	}

	validateForm = (errors) => {
	  let valid = true;
	  Object.values(errors).forEach(
	    (val) => val.length > 0 && (valid = false)
	  );
	  return valid;
	}

	onSubmitRegister = (e) => {
		e.preventDefault();
		if(this.validateForm(this.state.errors)) {
			axios.post('/register', this.state)
			.then(res => {
				if(res.data.status === 200) {
					toast.success(res.data.message);
					this.props.onRouteChange('signin');
				}else{
					toast.error(res.data.message); 
				}
			})	
		}else{
			toast.error('Please Enter Valid Input'); 
		}
	}


	render(){
		const {errors} = this.state;
		return(
			
		    <div className="login-wrap d-flex align-items-center flex-wrap justify-content-center">
		        <div className="container">
		            <div className="row align-items-center">
		                
		                <div className="col-md-12 col-lg-12">
		                    <div className="login-box bg-white box-shadow border-radius-10">
		                        <div className="login-title">
		                            <h2 className="text-center text-primary">Register To App</h2>
		                        </div>
		                        
		                          <form onSubmit={this.onSubmitRegister}>

		                          {errors.name.length > 0 && 
  										<span className='text-danger'>{errors.name}</span>}
		                            <div className="input-group custom">
		                                <input type="text" name="name" className="form-control form-control-lg" placeholder="Enter Name" onChange={this.inputChangeHandler} />
		                                <div className="input-group-append custom">
		                                    <span className="input-group-text"><i className="icon-copy dw dw-user"></i></span>
		                                </div>
		                            </div>

		                            {errors.email.length > 0 && 
 										<span className='text-danger'>{errors.email}</span>}
		                            <div className="input-group custom">
		                                <input type="email" name="email" className="form-control form-control-lg" placeholder="Enter Email" onChange={this.inputChangeHandler} />
		                                <div className="input-group-append custom">
		                                    <span className="input-group-text"><i className="icon-copy dw dw-user1"></i></span>
		                                </div>
		                            </div>
		                            
		                            {errors.password.length > 0 && 
  										<span className='text-danger'>{errors.password}</span>}
		                            <div className="input-group custom">
		                                <input type="password" name="password" className="form-control form-control-lg" placeholder="**********" onChange={this.inputChangeHandler} />
		                                <div className="input-group-append custom">
		                                    <span className="input-group-text"><i className="dw dw-padlock1"></i></span>
		                                </div>
		                            </div>
		                            
		                            <div className="row">
		                                <div className="col-sm-12">
		                                    <div className="input-group mb-0">
		                                        
		                                        <button className="btn btn-primary text-white btn-lg btn-block" type="submit">Register</button>
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

export default Register;