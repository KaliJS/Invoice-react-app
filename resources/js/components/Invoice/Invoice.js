import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import InvoiceItem from './InvoiceItem/InvoiceItem';
import  './Invoice.css';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();


class Invoice extends Component {

    state = {
      invoices: [],
      loading: true
    }

    fetchInvoices = () => {
      axios.get('/invoice')
      .then(res =>{
        if(res.data.status === 200){
          this.setState({invoices: res.data.invoices});
          this.setState({loading: false});
        }
      })
    }

    searchData = (e) => {
      if(e.target.value.length>0){
        axios.get(`/invoice/filter/${e.target.value}`)
      .then(res =>{
        if(res.data.status === 200){
          this.setState({invoices: res.data.invoices});
        }
      })
      }else{
        this.fetchInvoices();
      } 
    }

    deleteInvoice = (id) => {
      axios.delete(`/invoice/${id}`)
      .then(res =>{
        if(res.data.status === 200){
          toast.success(res.data.message);
          this.fetchInvoices();
        }
      })
    }

    componentDidMount(){
      this.fetchInvoices();
    }

    render(){
      if(this.state.loading){
        return <div className="container"><h2>Loading....</h2></div>
      }
        return (

          <div className="container mt-30">
            <div className="card-box mb-30">
              <div className="pd-20">
                 <h4 className="text-dark h4">Invoices List</h4>
                 <div className="row">
                    <div className="col-md-6">
                       <Link className="btn btn-primary text-white" to="/invoice/create"><i className="fa fa-plus"></i> Add New Product</Link>
                    </div>
                    <div className="col-md-6">
                       <div className="form-group row">
                          <label className="col-sm-12 col-md-2 col-form-label">Search Invoice</label>
                          <div className="col-sm-12 col-md-6">
                            <input className="form-control" placeholder="Search Here" type="search" onKeyUp={this.searchData}/>
                          </div>
                        </div>
                    </div>
                 </div>
              </div>
              <div className="pb-20 table-responsive">
                 <table className="table table-striped">
                    <thead>
                       <tr>
                          <th>Id</th>
                          <th>Name</th>
                          <th>Description</th>
                          <th>Number of Units</th>
                          <th>Quantity</th>            
                          <th>Unit Price</th>
                          <th>Discount</th>
                          <th>Tax</th>
                          <th className="datatable-nosort">Action</th>
                       </tr>
                    </thead>
                    <tbody>
                       
                       {this.state.invoices.map(invoice => (
                          <InvoiceItem invoice={invoice} key={invoice.id} deleteInvoice={this.deleteInvoice}/>
                        ))}
                       
                       
                    </tbody>
                 </table>
              </div>
           </div>
           </div>
        );
    }
}

export default Invoice;

