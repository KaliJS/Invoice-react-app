import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class InvoiceItem extends Component {

    deleteInvoiceHandler = (id) => {
      this.props.deleteInvoice(id);
    }

    render(){
      const {invoice} = this.props;
        return (
           
             <tr>
                <td className="table-plus">{invoice.id}</td>
                
                <td>{invoice.name}</td>
                <td>{invoice.description}</td>
                <td>{invoice.number_of_units}</td>
                <td>{invoice.quantity}</td>
                <td>{invoice.unit_price}</td>
                <td>{invoice.discount}</td>
                <td>{invoice.tax}</td>
                
                <td>
                   <Link className="btn btn-info" to={`/invoice/edit/${invoice.id}`}>Edit</Link>
                   <button className="btn btn-danger" onClick={()=>this.deleteInvoiceHandler(invoice.id)}>Delete</button>
                </td>
             </tr>
                       
                     
        );
    }
}

export default InvoiceItem;

