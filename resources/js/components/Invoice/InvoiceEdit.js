import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

class InvoiceEdit extends Component {

  state = {
    name: '',
    description: '',
    quantity: '',
    number_of_units: '',
    unit_price: '',
    discount: '',
    tax: ''
  }

  handleInput = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  updateInvoice = (e) => {

    e.preventDefault();
    const id = this.props.match.params.id;
    axios.patch(`/invoice/${id}`, this.state)
    .then(res => {
      if(res.data.status === 200) {
        toast.success(res.data.message);
        this.props.history.push('/invoice');
      }
    })  
  }

  componentDidMount(){
    const id = this.props.match.params.id;
    axios.get(`/invoice/${id}/edit`)
    .then(res => {
      if(res.data.status === 200){
        this.setState({name:res.data.invoice.name});
        this.setState({description:res.data.invoice.description});
        this.setState({quantity:res.data.invoice.quantity});
        this.setState({number_of_units:res.data.invoice.number_of_units});
        this.setState({unit_price:res.data.invoice.unit_price});
        this.setState({discount:res.data.invoice.discount});
        this.setState({tax:res.data.invoice.tax});
      }
    })
  }
    
    render(){
        return (
          <div className="container mt-30">
            <div className="card-box mb-30">
              <div className="pd-20">
                 <h4 className="text-dark h4">Edit Invoice</h4>
                 
              </div>
              <div className="pb-20">
                 

                  <form onSubmit={this.updateInvoice} className="pl-20 pr-20">
                    <div className="form-group row">
                      <label className="col-sm-12 col-md-2 col-form-label">Name</label>
                      <div className="col-sm-12 col-md-10">
                        <input className="form-control" type="text" placeholder="Enter Name" value={this.state.name} name="name" onChange={this.handleInput} required/>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-12 col-md-2 col-form-label">Description</label>
                      <div className="col-sm-12 col-md-10">
                        <input className="form-control" placeholder="Description" type="text" value={this.state.description} name="description" onChange={this.handleInput} required />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-12 col-md-2 col-form-label">Numbers Of Unit</label>
                      <div className="col-sm-12 col-md-10">
                        <input className="form-control" placeholder="Numbers of Unit" type="number" value={this.state.number_of_units} name="number_of_units" onChange={this.handleInput} required/>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-12 col-md-2 col-form-label">Quantity</label>
                      <div className="col-sm-12 col-md-10">
                        <input className="form-control" type="number" placeholder="Quantity" value={this.state.quantity} name="quantity" onChange={this.handleInput} required/>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-12 col-md-2 col-form-label">Unit Price</label>
                      <div className="col-sm-12 col-md-10">
                        <input className="form-control" placeholder="Unit Price" type="number" value={this.state.unit_price} name="unit_price" onChange={this.handleInput} required/>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-12 col-md-2 col-form-label">Discount</label>
                      <div className="col-sm-12 col-md-10">
                        <input className="form-control" placeholder="Discount" type="number" value={this.state.discount} name="discount" onChange={this.handleInput} required/>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-12 col-md-2 col-form-label">Tax</label>
                      <div className="col-sm-12 col-md-10">
                        <input className="form-control" placeholder="Tax" type="number" value={this.state.tax} name="tax" onChange={this.handleInput} required/>
                      </div>
                    </div>

                    <div className="form-group row">
                      
                      <div className="col-sm-12 col-md-10">
                        <button className="btn btn-primary" type="submit">Update</button>
                      </div>
                    </div>
                    
                  </form>

              </div>
            </div>
          </div>
        );
    }
}

export default InvoiceEdit;

