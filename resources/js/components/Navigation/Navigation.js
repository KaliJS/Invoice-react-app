import React from 'react';
import './Navigation.css';


const Navigation = (props) => {
	
		return(
			<div className="login-header box-shadow">
		        <div className="container-fluid d-flex justify-content-between align-items-center">
		            <div className="brand-logo">
		                <a className="text-dark">
		                    App
		                </a>
		            </div>
		            <div className="login-menu">
		              <ul className="d-flex" >
						<li><a id="signin" className="mr-4" onClick={()=>{props.onRouteChange('signin')}}>Sign In</a></li>
						<li><a id="register" className="mr-4" onClick={()=>{props.onRouteChange('register')}}>Register</a></li>
			          </ul>
		            </div>
		        </div>
		    </div>
		);
               
};

export default Navigation;