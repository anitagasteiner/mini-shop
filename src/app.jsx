import React, { Component } from 'react';
import Navbar from "./components/navbar";
import Product from "./components/product";
import ShoppingCart from './components/shopping-cart';
import "./app.css";

class App extends Component {
    state = { 
        items: []
     }

    addItem = (amount, name, price) => {
        let currentItems = this.state.items;
        currentItems.push({
            amount,
            name,
            price,
        });
        this.setState({items: currentItems});
        console.log(this.state);
    }

    render() { 
        return <React.Fragment>
                <Navbar/>
                <div className="main-container">
                    <div className="product-container">
                        <Product onAdd={() => this.addItem(1, "Red Converse", 59.99)} title="Red Converse" img="converse-red" alt="Red Converse" description="Classic red Converse shoes."/>
                        <Product onAdd={() => this.addItem(1, "White and Blue Running Shoes", 86.95)} title="White and Blue Running Shoes" img="running-shoes-blue" alt="White and Blue Running Shoes" description="High quality running shoes with classic design."/>
                        <Product onAdd={() => this.addItem(1, "Colored Running Shoes", 119.95)} title="Colored Running Shoes" img="running-shoes-colored" alt="Colored Runnung Shoes" description="High quality running shoes with modern design."/>
                        <Product onAdd={() => this.addItem(1, "Bright Running Shoes", 94.95)} title="Bright Running Shoes" img="running-shoes-bright" alt="Bright Running Shoes" description="High quality running shoes with elegant design."/>
                        <Product onAdd={() => this.addItem(1, "Converse Heroes", 64.99)} title="Converse Heroes" img="shoes-heroes" alt="Converse with Comic Heroes" description="Converse shoes with comic heroes design."/>
                        <Product onAdd={() => this.addItem(1, "Sneakers", 75.99)} title="Sneakers" img="sneakers" alt="Blue and Beige Sneakers" description="Elegant sneakers in dark blue and beige."/>
                    </div>
                    <ShoppingCart items={this.state.items}/>
                </div>
            </React.Fragment>;
    }
}
 
export default App;

