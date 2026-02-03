import React, { Component } from 'react';

class ShoppingCart extends Component {
    state = { 
        items: [
            {
                amount: 1,
                name: "Red Converse",
                price: 59.99
            },
            {
                amount: 1,
                name: "Converse Heroes",
                price: 64.99
            }
        ]
     } 
    render() { 
        return <div className="shopping-cart-container">
            <h2>Shopping Cart</h2>
            { this.state.items.map(item => <div key={ item.name }>{ item.amount }x { item.name } { item.price } €</div>) }
        </div>;
    }
}
 
export default ShoppingCart;