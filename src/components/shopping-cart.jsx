import React, { Component } from 'react';

class ShoppingCart extends Component {
    state = {  }
    render() { 
        return <div className="shopping-cart-container">
            <h2>Shopping Cart</h2>

            <ul className="list-group">
                { this.props.items.map(item => <li className="list-group-item d-flex justify-content-left align-items-center shopping-cart-list-item" key={ item.name }>
                    <span className="badge text-bg-primary rounded-pill">{ item.amount }</span>
                    { item.name } <br/> { item.price } €
                    </li>) }
                <li className="list-group-item active text-end"><b>Total: { this.props.sum } €</b></li>
            </ul>

        </div>;
    }
}
 
export default ShoppingCart;

