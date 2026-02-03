import React, { Component } from 'react';
import Navbar from "./components/navbar";
import Product from "./components/product";
import "./app.css";

class App extends Component {
    state = {  } 
    render() { 
        return <React.Fragment>
                <Navbar/>
                <div className="product-container">
                    <Product title="Converse" img="converse-red" alt="Red Converse" description="Classic red Converse shoes."/>
                    <Product title="White and Blue Running Shoes" img="running-shoes-blue" alt="White and Blue Running Shoes" description="High quality running shoes with classic design."/>
                    <Product title="Colored Running Shoes" img="running-shoes-colored" alt="Colored Runnung Shoes" description="High quality running shoes with modern design."/>
                    <Product title="Bright Running Shoes" img="running-shoes-bright" alt="Bright Running Shoes" description="High quality running shoes with elegant design."/>
                    <Product title="Converse Heroes" img="shoes-heroes" alt="Converse with Comic Heroes" description="Converse shoes with comic heroes design."/>
                    <Product title="Sneakers" img="sneakers" alt="Blue and Beige Sneakers" description="Elegant sneakers in dark blue and beige."/>
                </div>                
            </React.Fragment>;
    }
}
 
export default App;


