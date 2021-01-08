import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from './Auth/Auth';
import Navigation from './Navigation/Navigation';
import Invoice from './Invoice/Invoice';
import InvoiceCreate from './Invoice/InvoiceCreate';
import InvoiceEdit from './Invoice/InvoiceEdit';


class Example extends Component {

    
    render(){
        return (
            <div>
                  
                <Router>
                    <Switch>
                        <Route path="/" exact component={Auth}/>
                        <Route path="/invoice" exact component={Invoice}/>
                        <Route path="/invoice/create" exact component={InvoiceCreate}/>
                        <Route path="/invoice/edit/:id" exact component={InvoiceEdit}/>
                    </Switch>
                </Router>
            </div>
            
        );
    }
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
