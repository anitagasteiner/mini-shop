import React, { Component } from 'react';

class Product extends Component {
    state = {  } 
    render() { 
        return <div className="card" style={{width: '260px'}}>
                    <img src={"/assets/img/" + this.props.img + ".jpg"} className="card-img-top" alt={this.props.alt}/>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <p className="card-text">{this.props.description}</p>
                        <button onClick={this.props.onAdd} className="btn btn-primary">Add to Shopping Cart</button>
                    </div>
                </div>;
    }
}
 
export default Product;

